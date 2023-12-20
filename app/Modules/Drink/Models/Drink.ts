import { BaseModel, BelongsTo, HasMany, belongsTo, column, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Category from 'App/Modules/Category/Models/Category'
import Favorites from 'App/Modules/User/Models/Favorites'

export default class Drink extends BaseModel {
  public static table = 'drink'
  public static selfAssignPrimaryKey = true

  @column({ isPrimary: true })
  public id: number

  @column()
  public category_id: number

  @column()
  public name: string

  @column()
  public description?: string

  @column()
  public drink_file: string

  @belongsTo(() => Category, { localKey: 'id', foreignKey: 'category_id' })
  public category: BelongsTo<typeof Category>

  @hasMany(() => Favorites, { localKey: 'id', foreignKey: 'drink_id' })
  public favorite: HasMany<typeof Favorites>
}
