import BaseSchema from '@ioc:Adonis/Lucid/Schema'
import Logger from '@ioc:Adonis/Core/Logger'

export default class extends BaseSchema {
  protected tableName = 'drink'

  public async up() {
    if (!(await this.schema.hasTable(this.tableName))) {
      this.schema.createTable(this.tableName, (table) => {
        table.increments('id').primary()
        table.integer('category_id').unsigned()
        table.foreign('category_id').references('category.id').deferrable('deferred')
        table.string('name', 70).notNullable()
        table.string('description', 3000).notNullable()
        table.string('drink_file').notNullable()
      })
    } else Logger.info('Running migration...')
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
