import { inject, injectable } from 'tsyringe'


import { IFavorites } from '../Interfaces/Favorites'
import Favorites from '../Models/Favorites'
import DTO = IFavorites.DTO

@injectable()
export class StoreFavoriteService {
  constructor(
    @inject('FavoriteRepository')
    private FavoriteRepository: IFavorites.Repository
  ) {}

  public async init(data: DTO.Store): Promise<Favorites> {
    return await this.FavoriteRepository.store(data)
  }
}
