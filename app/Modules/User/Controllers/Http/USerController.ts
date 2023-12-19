import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { container } from 'tsyringe'
import { StatusCodes } from 'http-status-codes'
import AppException from 'App/Shared/Exceptions/AppException'
import { StoreUserService } from '../../Services/UserService'
import UserValidator from '../../Validators/UserValidator'
import FavoriteValidator from '../../Validators/StoreFavoriteValidator'
import { StoreFavoriteService } from '../../Services/FavoriteService'

export default class UserController {

  public async store(ctx: HttpContextContract) {
    const userDTO = await ctx.request.validate(UserValidator).catch((error) => {
      throw new AppException(error, StatusCodes.BAD_REQUEST)
    })
    const storeUser = container.resolve(StoreUserService)

    const user = await storeUser.init(userDTO)
    const data = { message: 'Usuário cadastrado com sucesso!', user }
    return ctx.response.status(201).json(data)
  }

  public async storeFavorite(ctx: HttpContextContract) {
    const favoriteDTO = await ctx.request.validate(FavoriteValidator).catch((error) => {
      throw new AppException(error, StatusCodes.BAD_REQUEST)
    })
    const storeFavorite = container.resolve(StoreFavoriteService)

    const favorite = await storeFavorite.init(favoriteDTO)
    const data = { message: 'Drink adicionado aos favoritos', favorite }
    return ctx.response.status(201).json(data)
  }
}
