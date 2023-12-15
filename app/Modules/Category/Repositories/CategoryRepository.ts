import BaseRepository from '../../../Shared/Repositories/BaseRepository'

import { ICategory } from '../Interfaces/CategoryInterface'
import Category from '../Models/Category'

export default class CategoryRepository
  extends BaseRepository<typeof Category>
  implements ICategory.Repository
{
  constructor() {
    super(Category)
  }
}
