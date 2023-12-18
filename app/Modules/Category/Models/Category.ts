import { BaseModel, HasMany, column, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Drink from 'App/Modules/Drink/Models/Drink'

export default class Category extends BaseModel {
  public static table = 'category'
  public static selfAssignPrimaryKey = true

  @column({ isPrimary: true })
  public id: string

  @column()
  public name: string

  @hasMany(() => Drink, { localKey: 'id', foreignKey: 'category_id' })
  public drink: HasMany<typeof Drink>
}
