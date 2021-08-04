import React, { createContext, useEffect, useState } from 'react'
import * as AuthSession from 'expo-auth-session'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { discordConfig } from './../config/discordAuth'
import { COLLECTION_USER, COLLECTION_APPOINTMENTS } from './../config/storage'
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
  signOut: () => Promise<void>
}

type AuthProviderProps = {
  children: React.ReactNode
}

type AuthorizationResponse = AuthSession.AuthSessionResult & {
  params: {
    access_token?: string
    error?: string
  }
}

export const AuthContext = createContext({} as AuthContextProps)

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User>({} as User)
  const [loading, setLoading] = useState(false)


  useEffect(() => {
    const loadStorageData = async () => {
      setLoading(true)
      const storage = await AsyncStorage.getItem(COLLECTION_USER)

      if (storage) {
        const user = JSON.parse(storage)
        setUser(user)
        api.defaults.headers.authorization = `Bearer ${user.token}`
        setLoading(false)
      }

      setLoading(false)
    }

    loadStorageData()
  }, [])

  const signIn = async () => {
    try {
      setLoading(true)

      const { REDIRECT_URI, CLIENT_ID, RESPONSE_TYPE, SCOPE, CDN_IMAGE } = discordConfig
      const authUrl = `${api.defaults.baseURL}/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`

      const { type, params } = await AuthSession.startAsync({ authUrl }) as AuthorizationResponse

      if (type === 'success' && !params.error) {
        api.defaults.headers.authorization = `Bearer ${params.access_token}`
        const userInfo = await api.get('/users/@me')
        const firstName = userInfo.data.username.split(' ')[0]
        userInfo.data.avatar = `${CDN_IMAGE}/avatars/${userInfo.data.id}/${userInfo.data.avatar}.png`

        const userData = {
          ...userInfo.data,
          firstName,
          token: params.access_token
        }

        await AsyncStorage.setItem(COLLECTION_USER, JSON.stringify(userData))

        setUser(userData)
      }
    } catch {
      throw new Error('Não foi possível autenticar')
    } finally {
      setLoading(false)
    }
  }

  const signOut = async () => {
    await AsyncStorage.removeItem(COLLECTION_USER)
    setUser({} as User)
  }

  return (
    <AuthContext.Provider value={{
      user,
      loading,
      signIn,
      signOut
    }}>
      { children }
    </AuthContext.Provider>
  )
}
