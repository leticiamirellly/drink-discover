import { inject, injectable } from 'tsyringe'

import { IDrink } from '../Interfaces/DrinkInterface'
import Drink from '../Models/Drink';
import DTO = IDrink.DTO

@injectable()
export class StoreDrinkService {
  constructor(
    @inject('DrinkRepository')
    private DrinkRepository: IDrink.Repository
  ) {}

  public async init(data: DTO.Store): Promise<Drink> {
    return await this.DrinkRepository.store(data)
  }
}
