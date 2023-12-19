import { BaseModel, HasMany, column, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Favorites from './Favorites'

export default class User extends BaseModel {
  public static table = 'user'
  public static selfAssignPrimaryKey = true

  @column({ isPrimary: true })
  public id: string

  @column()
  public name: string

  @hasMany(() => Favorites, { localKey: 'id', foreignKey: 'user_id' })
  public favorite: HasMany<typeof Favorites>
}
