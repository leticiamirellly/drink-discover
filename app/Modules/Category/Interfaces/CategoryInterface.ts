import BaseInterface from '../../../Shared/Interfaces/BaseInterface'
import Category from '../Models/Category'

export namespace ICategory {

  export interface Repository extends BaseInterface<typeof Category> {}

  export namespace DTO {
    export type Store = {
      name: string
    }

    export type Edit = {
      name: string
    }
  }
}
