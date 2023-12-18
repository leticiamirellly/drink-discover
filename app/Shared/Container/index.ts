import { container, delay } from 'tsyringe'

import { ICategory } from '../../Modules/Category/Interfaces/CategoryInterface'
import CategoryRepository from '../../Modules/Category/Repositories/CategoryRepository'

import { IDrink } from 'App/Modules/Drink/Interfaces/DrinkInterface'
import DrinkRepository from 'App/Modules/Drink/Repositories/DrinkRepository'

container.registerSingleton<ICategory.Repository>(
  'CategoryRepository',
  delay(() => CategoryRepository)
)

container.registerSingleton<IDrink.Repository>(
  'DrinkRepository',
  delay(() => DrinkRepository)
)