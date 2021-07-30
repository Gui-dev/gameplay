import React, { createContext, useState } from 'react'
import * as AuthSession from 'expo-auth-session'

import { discordConfig } from './../config/discordAuth'
import { api } from '../services/api'

type User = {
  id: string
  token: string
  username: string
  firstName: string
  email: string
  avatar: string
}

type AuthContextProps = {
  user: User
  loading: boolean
  signIn: () => Promise<void>
}

type AuthProviderProps = {
  children: React.ReactNode
}

type AuthorizationResponse = AuthSession.AuthSessionResult & {
  params: {
    access_token: string
  }
}

export const AuthContext = createContext({} as AuthContextProps)

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User>({} as User)
  const [loading, setLoading] = useState(false)

  const signIn = async () => {
    try {
      setLoading(true)
      const { REDIRECT_URI, CLIENT_ID, RESPONSE_TYPE, SCOPE, CDN_IMAGE } = discordConfig
      const authUrl = `${api.defaults.baseURL}/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`

      const { type, params } = await AuthSession.startAsync({ authUrl }) as AuthorizationResponse

      if (type === 'success') {
        api.defaults.headers.authorization = `Bearer ${params.access_token}`
        const userInfo = await api.get('/users/@me')
        const firstName = userInfo.data.username.split(' ')[0]
        userInfo.data.avatar = `${CDN_IMAGE}/avatars/${userInfo.data.id}/${userInfo.data.avatar}.png`

        setUser({
          ...userInfo.data,
          firstName,
          token: params.access_token
        })
        setLoading(false)
      }
      setLoading(false)
    } catch {
      throw new Error('Não foi possível autenticar')
    }
  }

  return (
    <AuthContext.Provider value={{
      user,
      loading,
      signIn
    }}>
      { children }
    </AuthContext.Provider>
  )
}
