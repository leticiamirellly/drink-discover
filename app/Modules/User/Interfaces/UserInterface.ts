import BaseInterface from '../../../Shared/Interfaces/BaseInterface'
import User from '../Models/User'

export namespace IUser {
  export interface Repository extends BaseInterface<typeof User> {}

  export namespace DTO {
    export type Store = {
      name: string
    }
  }
}
