import { ContextParams, ModelClause } from 'App/Shared/Interfaces/BaseInterface'
import BaseRepository from '../../../Shared/Repositories/BaseRepository'

import { IDrink } from '../Interfaces/DrinkInterface'
import Drink from '../Models/Drink'

export default class DrinkRepository
  extends BaseRepository<typeof Drink>
  implements IDrink.Repository
{
  constructor() {
    super(Drink)
  }
 
}
