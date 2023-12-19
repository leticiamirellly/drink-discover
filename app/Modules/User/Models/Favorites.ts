import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import User from './User'
import Drink from 'App/Modules/Drink/Models/Drink'

export default class Favorites extends BaseModel {
  public static table = 'favorites'
  public static selfAssignPrimaryKey = true

  @column({ isPrimary: true })
  public id: string

  @column()
  public user_id: string

  @column()
  public drink_id: string

  @belongsTo(() => User, { localKey: 'id', foreignKey: 'user_id' })
  public user: BelongsTo<typeof User>

  @belongsTo(() => Drink, { localKey: 'id', foreignKey: 'drink_id' })
  public drink: BelongsTo<typeof Drink>
}
