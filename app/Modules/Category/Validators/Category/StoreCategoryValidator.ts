import { schema, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class StoreCategoryValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    name: schema.string({ escape: true, trim: true }, [
      rules.unique({
        table: 'category',
        column: 'name',
        caseInsensitive: true,
      }),
    ]),
  })

  public messages = {}
}
