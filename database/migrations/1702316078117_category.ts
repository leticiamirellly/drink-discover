import BaseSchema from '@ioc:Adonis/Lucid/Schema'
import Logger from '@ioc:Adonis/Core/Logger'

export default class extends BaseSchema {
  protected tableName = 'category'

  public async up() {
    if (!(await this.schema.hasTable(this.tableName))) {
      this.schema.createTable(this.tableName, (table) => {
        table.increments('id').primary()
        table.string('name', 70).notNullable()
      })
    } else Logger.info('Running migration...')
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
