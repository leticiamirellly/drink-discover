import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Category extends BaseModel {
  public static table = 'category'
  public static selfAssignPrimaryKey = true
  
  @column({ isPrimary: true })
  public id: string;


  @column({ isPrimary: true })
  public name: string

}
