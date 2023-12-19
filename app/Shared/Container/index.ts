import { container, delay } from 'tsyringe'

import { ICategory } from '../../Modules/Category/Interfaces/CategoryInterface'
import CategoryRepository from '../../Modules/Category/Repositories/CategoryRepository'

import { IDrink } from 'App/Modules/Drink/Interfaces/DrinkInterface'
import DrinkRepository from 'App/Modules/Drink/Repositories/DrinkRepository'

import { IUser } from 'App/Modules/User/Interfaces/UserInterface'
import UserRepository from 'App/Modules/User/Repositories/UserRepository'
import { IFavorites } from 'App/Modules/User/Interfaces/Favorites'
import FavoriteRepository from 'App/Modules/User/Repositories/FavoriteRepository'

container.registerSingleton<ICategory.Repository>(
  'CategoryRepository',
  delay(() => CategoryRepository)
)

container.registerSingleton<IDrink.Repository>(
  'DrinkRepository',
  delay(() => DrinkRepository)
)

container.registerSingleton<IUser.Repository>(
  'UserRepository',
  delay(() => UserRepository)
)

container.registerSingleton<IFavorites.Repository>(
  'FavoriteRepository',
  delay(() => FavoriteRepository)
)
