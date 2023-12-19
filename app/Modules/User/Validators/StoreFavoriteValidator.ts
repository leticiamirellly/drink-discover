import { schema } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class FavoriteValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    drink_id: schema.number(),
    user_id: schema.number(),
  })

  public messages = {}
}
