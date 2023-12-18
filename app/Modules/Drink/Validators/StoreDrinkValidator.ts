import { schema, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class StoreDrinkValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    category_id: schema.string({ escape: true, trim: true }, [
      rules.exists({
        table: 'category',
        column: 'id',
      }),
    ]),
    name: schema.string({ escape: true, trim: true }, []),
    description: schema.string({ escape: true, trim: true }, []),
    image: schema.string({ escape: true, trim: true }, []),
  })

  public messages = {}
}
