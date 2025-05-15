import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'tasks'

  async up() {
    this.schema.createTable(this.tableName, (table) => {

      table.increments('id')
      table.timestamp('created_at')
      table.timestamp('updated_at')

      table.boolean('is_done').defaultTo(false)
      table.string('task_name')
      table.string('note')
      table.integer('priorite').defaultTo(1).notNullable()
      table.string("liste").defaultTo('all').notNullable()


    })
  }

  async down() {

    this.schema.dropTable(this.tableName)
  }
}