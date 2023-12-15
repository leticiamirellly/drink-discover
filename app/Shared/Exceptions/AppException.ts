import { Exception } from '@adonisjs/core/build/standalone'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { StatusCodes } from 'http-status-codes'

export default class AppException extends Exception {
  private async jsonHandle(error: this, ctx: HttpContextContract): Promise<void> {
    switch (error.status) {
      case 400:
        return ctx.response.status(StatusCodes.BAD_REQUEST).send(
          {
            errors: error.message,
          }
        )

      case 404:
        return ctx.response.status(StatusCodes.NOT_FOUND).send(
          {
            message: error.message,
          }
        )

      default:
        return ctx.response.status(error.status ?? StatusCodes.INTERNAL_SERVER_ERROR).send(
          {
            message: error.message,
          },
          
        )
    }
  }

  public async handle(error: this, ctx: HttpContextContract) {
    switch (ctx.request.accepts(['html', 'json'])) {
      case 'json':
        this.jsonHandle(error, ctx)
        break

      default:
        return ctx.response.status(error.status).send(error.message)
    }
  }
}