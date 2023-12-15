import { inject, injectable } from 'tsyringe'

import { ICategory } from '../../Interfaces/CategoryInterface'
import Category from '../../Models/Category'
import DTO = ICategory.DTO

@injectable()
export class StoreCategoryService {
  constructor(
    @inject('CategoryRepository')
    private CategoryRepository: ICategory.Repository
  ) {}

  public async init(data: DTO.Store): Promise<Category> {
    return await this.CategoryRepository.store(data)
  }
}
