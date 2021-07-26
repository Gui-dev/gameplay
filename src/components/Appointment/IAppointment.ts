import { GuildProps } from './../Guild'

export type IAppointmentProps = {
  id: string
  guild: GuildProps
  category: string
  description: string
  date: string
}
