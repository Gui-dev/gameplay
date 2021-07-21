export type IGuildProps = {
  id: string
  name: string
  icon: string | null
  owner: boolean
}

export type IAppointmentProps = {
  id: string
  guild: IGuildProps
  category: string
  description: string
  date: string
}
