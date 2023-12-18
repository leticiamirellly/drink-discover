import { BaseModel, BelongsTo, belongsTo, column,   HasMany, hasMany, } from '@ioc:Adonis/Lucid/Orm'
import Category from 'App/Modules/Category/Models/Category';

export default class Drink extends BaseModel {
  public static table = 'drink'
  public static selfAssignPrimaryKey = true
  
  @column({ isPrimary: true })
  public id: string;

  @column({ serializeAs: null })
  public category_id: string

  @column()
  public name: string

  @column()
  public description?: string

  @column()
  public image?: string

  @belongsTo(() => Category, { localKey: 'id', foreignKey: 'category_id' })
  public category: BelongsTo<typeof Category>

}
