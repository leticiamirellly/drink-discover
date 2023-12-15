import Application from '@ioc:Adonis/Core/Application'
import Event from '@ioc:Adonis/Core/Event'
import Database from '@ioc:Adonis/Lucid/Database'
import Logger from '@ioc:Adonis/Core/Logger'

Event.on('db:query', (query) => {
    if (Application.inProduction) {
      Logger.debug(query.sql)
    } else {
      Database.prettyPrint(query)
    }
  })