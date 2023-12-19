import { inject, injectable } from 'tsyringe'

import { IUser } from '../Interfaces/UserInterface'
import Drink from '../Models/User'
import DTO = IUser.DTO

@injectable()
export class StoreUserService {
  constructor(
    @inject('UserRepository')
    private UserRepository: IUser.Repository
  ) {}

  public async init(data: DTO.Store): Promise<Drink> {
    return await this.UserRepository.store(data)
  }
}
