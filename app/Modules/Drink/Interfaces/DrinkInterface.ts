import BaseInterface from '../../../Shared/Interfaces/BaseInterface'
import Drink from '../Models/Drink'

export namespace IDrink {

  export interface Repository extends BaseInterface<typeof Drink> {}

  export namespace DTO {
    export type Store = {
      name: string;
      description: string;
      image: string;
      category_id: string
    }

    export type Edit = {
        name?: string;
        description?: string;
        image?: string;
        category_id?: string
    }

  }
}
