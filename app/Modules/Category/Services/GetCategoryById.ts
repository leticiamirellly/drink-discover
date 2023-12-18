import { inject, injectable } from 'tsyringe'

import { ICategory } from '../Interfaces/CategoryInterface'
import Category from '../Models/Category'
import { PaginateContractType, PaginateParams } from 'App/Shared/Interfaces/BaseInterface'
import AppException from 'App/Shared/Exceptions/AppException';
import { StatusCodes } from 'http-status-codes';


@injectable()
export class GetCategoryByIdService {
  constructor(
    @inject('CategoryRepository')
    private CategoryRepository: ICategory.Repository
  ) {}

  public async init(
   categoryId: string
  ): Promise<Category> {
    const category = await this.CategoryRepository.findBy('id', categoryId);
    if(!category) throw new AppException('Categoria não encontrada.', StatusCodes.NOT_FOUND)
    return category
}
}