import { schema, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class StoreDrinkValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    category_id: schema.number([
      rules.exists({
        table: 'category',
        column: 'id',
      }),
    ]),
    name: schema.string({ escape: true, trim: true }, [
      rules.unique({
        table: 'drink',
        column: 'name',
        where: {
          category_id: this.ctx.request.input('category_id'),
        },
      }),
    ]),
    description: schema.string({ escape: true, trim: true }, []),
    drink_file: schema.string({}, []),
  })

  public messages = {}
}
