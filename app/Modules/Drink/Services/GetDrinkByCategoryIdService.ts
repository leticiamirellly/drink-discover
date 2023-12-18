import { inject, injectable } from 'tsyringe'

import { IDrink } from '../Interfaces/DrinkInterface'
import Drink from '../Models/Drink';
import AppException from 'App/Shared/Exceptions/AppException';

@injectable()
export class GetDrinkByCategoryIdService {
  constructor(
    @inject('DrinkRepository')
    private DrinkRepository: IDrink.Repository
  ) {}

  public async init(categoryId: string): Promise<Drink[] | null>{
    const drinks = await this.DrinkRepository.pluckBy(['name', 'description', 'image'], {where: {category_id: categoryId} })
    if (!drinks.length) throw new AppException('Não há drinks cadastrados para essa categoria.')  
    return drinks;
  }
}
