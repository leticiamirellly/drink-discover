import { container, delay } from 'tsyringe'

import { ICategory } from '../../Modules/Category/Interfaces/CategoryInterface'
import CategoryRepository from '../../Modules/Category/Repositories/CategoryRepository'

container.registerSingleton<ICategory.Repository>(
  'CategoryRepository',
  delay(() => CategoryRepository)
)