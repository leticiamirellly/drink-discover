import BaseRepository from '../../../Shared/Repositories/BaseRepository'

import { IUser } from '../Interfaces/UserInterface'
import User from '../Models/User'

export default class UserRepository
  extends BaseRepository<typeof User>
  implements IUser.Repository
{
  constructor() {
    super(User)
  }
}
