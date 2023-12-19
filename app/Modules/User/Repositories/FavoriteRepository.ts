import BaseRepository from '../../../Shared/Repositories/BaseRepository'
import { IFavorites } from '../Interfaces/Favorites'
import Favorites from '../Models/Favorites'

export default class FavoriteRepository
  extends BaseRepository<typeof Favorites>
  implements IFavorites.Repository
{
  constructor() {
    super(Favorites)
  }
}
