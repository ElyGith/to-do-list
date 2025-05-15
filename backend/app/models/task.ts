import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Task extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare is_done : boolean

  @column()
  declare task_name: string //map automatiquement sur task_name

  @column()
  declare liste: string

  @column()
  declare priorite: number

  @column ()
  declare note: string

  @column.dateTime({ autoCreate: true })
  declare created_at: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updated_at: DateTime
}
