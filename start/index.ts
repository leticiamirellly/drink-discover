import Event from '@ioc:Adonis/Core/Event'
import Database from '@ioc:Adonis/Lucid/Database'
import AppException from 'App/Shared/Exceptions/AppException'

Event.on('db:query', Database.prettyPrint)

