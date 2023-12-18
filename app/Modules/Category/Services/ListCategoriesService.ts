import { inject, injectable } from 'tsyringe'

import { ICategory } from '../Interfaces/CategoryInterface'
import Category from '../Models/Category'
import { PaginateContractType, PaginateParams } from 'App/Shared/Interfaces/BaseInterface'
import Drink from 'App/Modules/Drink/Models/Drink'


@injectable()
export class ListCategoryService {
  constructor(
    @inject('CategoryRepository')
    private CategoryRepository: ICategory.Repository
  ) {}

  public async init(
    params: PaginateParams<typeof Category>
  ): Promise<PaginateContractType<typeof Category>> {
    return await this.CategoryRepository.listWithPagination({
        ...params,
        orders: [
          {
            column: 'name',
            direction: 'asc',
          },
        ],
    });
  }
}
