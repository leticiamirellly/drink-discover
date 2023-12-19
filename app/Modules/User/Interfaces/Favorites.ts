import BaseInterface from '../../../Shared/Interfaces/BaseInterface'
import Favorites from '../Models/Favorites'

export namespace IFavorites {
  export interface Repository extends BaseInterface<typeof Favorites> {}

  export namespace DTO {
    export type Store = {
      drink_id: number
      user_id: number
    }
  }
}
