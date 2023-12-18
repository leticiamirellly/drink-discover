import {
  ExtractScopes,
  LucidModel,
  LucidRow,
  ModelAttributes,
  ModelPaginatorContract,
} from '@ioc:Adonis/Lucid/Orm'
import { SimplePaginatorContract } from '@ioc:Adonis/Lucid/Database'

export default interface BaseInterface<Model extends LucidModel> extends Helpers<Model> {

  list(params?: ContextParams<Model>): Promise<Array<InstanceType<Model>>>


  store(values: Partial<ModelAttributes<InstanceType<Model>>>): Promise<InstanceType<Model>>

}
interface Helpers<Model extends LucidModel> {
  listWithPagination(params: PaginateParams<Model>): Promise<PaginateContractType<Model>>

  findBy(
    key: string,
    value: any,
    params?: ContextParams<Model>
  ): Promise<InstanceType<Model> | null>

  pluckBy(column: Array<string>, closers?: ModelClause<Model>): Promise<any[]>

}

export type ModelType<Model extends LucidModel> = Partial<ModelAttributes<InstanceType<Model>>>

export type ModelKeysType<Model extends LucidModel> = keyof ModelType<Model>

export type PaginateContractType<Model extends LucidModel> =
  | ModelPaginatorContract<LucidRow & InstanceType<Model>>
  | SimplePaginatorContract<InstanceType<Model>>

export interface ContextParams<Model extends LucidModel> {
  orders?: Array<OrderBy<Model>>
  scopes?: <Scopes extends ExtractScopes<Model>>(scopes: Scopes) => void
}

export interface OrderBy<Model extends LucidModel> {
  column: ModelKeysType<Model>
  direction?: 'asc' | 'desc'
}

export interface ModelClause<Model extends LucidModel> {
  where?: ModelType<Model>
  like?: { column: ModelKeysType<Model>; match: string }
}

export interface PaginateParams<Model extends LucidModel> extends ContextParams<Model> {
  page: number
  perPage: number
}