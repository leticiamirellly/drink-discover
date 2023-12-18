import { LucidModel } from '@ioc:Adonis/Lucid/Orm'

import IBaseRepository, {
  ContextParams,
  ModelClause,
  ModelType,
  PaginateContractType,
  PaginateParams,
} from '../../Shared/Interfaces/BaseInterface'

export default class BaseRepository<Model extends LucidModel> implements IBaseRepository<Model> {
  constructor(protected orm: Model) {}

  public async list({
    orders,
  }: ContextParams<Model>): Promise<Array<InstanceType<Model>>> {
    const models = this.orm.query()

    if (orders) {
      for (const { column, direction } of orders)
        if (column) models.orderBy(String(column), direction ? direction : 'asc')
    }

    return models
  }

  public async store(values: ModelType<Model>): Promise<InstanceType<Model>> {
    return this.orm.create(values)
  }

  public async findBy(
    key: string,
    value: any,
    params?: ContextParams<Model>
  ): Promise<InstanceType<Model> | null> {
    const model = this.orm.query().where(key, value)

    if(params) {
      const { orders } = params;
      if (orders)
        for (const { column, direction } of orders)
          if (column) model.orderBy(String(column), direction ? direction : 'asc')
    }
    return model.first()
  }

  public async pluckBy(columns: Array<string>, clauses?: ModelClause<Model>): Promise<any[]> {

    const models = this.orm.query().select(columns)

    if (clauses)
      Object.entries(clauses).find(([key, value]) => {
        if (key === 'where') models.where(value)
        if (key === 'like') {
          const { column, match } = value
          if (column && match) models.where(column, 'LIKE', `%${match}%`)
        }
      })

    return (await models).map((item) => {
      const resultObject: Record<string, any> = {};
      columns.forEach((column) => resultObject[column] = item[column])
      return resultObject;
    })
  }

  public async listWithPagination({
    page,
    perPage,
    orders,
  }: PaginateParams<Model>): Promise<PaginateContractType<Model>> {
    const models = this.orm.query()

     if (orders) {
      for (const { column, direction } of orders)
        if (column) models.orderBy(String(column), direction ? direction : 'asc')
    }

    return models.paginate(page, perPage)
  }
}
