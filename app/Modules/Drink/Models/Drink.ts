import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Category from 'App/Modules/Category/Models/Category'

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
  public image?: string

  @belongsTo(() => Category, { localKey: 'id', foreignKey: 'category_id' })
  public category: BelongsTo<typeof Category>
}
