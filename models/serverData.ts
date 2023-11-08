export interface Welcome {
  statement: string
}
export interface ServerDetails {
  ip: string
  port: string
  online: object
  max: number
  icon: string
  version: number
  software: string
  players: number
  players_online: number
  motd: string
  html: string
  players_list: []
}
export interface Players {
  players_list: object
}
