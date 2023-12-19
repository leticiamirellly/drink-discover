import Logger from '@ioc:Adonis/Core/Logger'
import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'favorites'

  public async up () {
    if (!(await this.schema.hasTable(this.tableName))) {
      this.schema.createTable(this.tableName, (table) => {
        table.increments('id').primary()
        table.integer('user_id').unsigned()
        table.foreign('user_id').references('user.id').deferrable('deferred')
        table.integer('drink_id').unsigned()
        table.foreign('drink_id').references('drink.id').deferrable('deferred')
      })
    } else Logger.info('Running migration...')
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
