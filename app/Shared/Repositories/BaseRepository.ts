import { LucidModel } from '@ioc:Adonis/Lucid/Orm'

import IBaseRepository, {
  ModelType,
  PaginateContractType,
  PaginateParams,
} from '../../Shared/Interfaces/BaseInterface'

export default class BaseRepository<Model extends LucidModel> implements IBaseRepository<Model> {
  constructor(protected orm: Model) {}


  public async store(values: ModelType<Model>): Promise<InstanceType<Model>> {
    return this.orm.create(values)
  }

  public async listWithPagination({
    page,
    perPage,
    clauses,
    scopes,
  }: PaginateParams<Model>): Promise<PaginateContractType<Model>> {
    const models = this.orm.query()

    if (clauses)
      Object.entries(clauses).find(([key, value]) => {
        if (key === 'where') models.where(value)
        if (key === 'like') {
          const { column, match } = value
          if (column && match) models.where(column, 'LIKE', `%${match}%`)
        }
      })

    if (scopes) models.withScopes(scopes)

    return models.paginate(page, perPage)
  }
}
