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


  storeMany(values: Array<ModelType<Model>>): Promise<Array<InstanceType<Model>>>

  save<T extends InstanceType<Model>>(model: T): Promise<T>
}


interface Helpers<Model extends LucidModel> {
  listWithPagination(params: PaginateParams<Model>): Promise<PaginateContractType<Model>>
  findBy(
    key: string,
    value: any,
    params?: ContextParams<Model>
  ): Promise<InstanceType<Model> | null>
  findOrStore(
    searchPayload: ModelType<Model>,
    savePayload: ModelType<Model>
  ): Promise<InstanceType<Model>>
  pluckBy(column: string, closers?: ModelClause<Model>): Promise<any[]>
}

export type ModelType<Model extends LucidModel> = Partial<ModelAttributes<InstanceType<Model>>>

export type ModelKeysType<Model extends LucidModel> = keyof ModelType<Model>

export type PaginateContractType<Model extends LucidModel> =
  | ModelPaginatorContract<LucidRow & InstanceType<Model>>
  | SimplePaginatorContract<InstanceType<Model>>

export interface ContextParams<Model extends LucidModel> {
  clauses?: ModelClause<Model>
  scopes?: <Scopes extends ExtractScopes<Model>>(scopes: Scopes) => void
}

export interface PaginateParams<Model extends LucidModel> extends ContextParams<Model> {
  page: number
  perPage: number
}

export interface ModelClause<Model extends LucidModel> {
  where?: ModelType<Model>
  like?: { column: ModelKeysType<Model>; match: string }
}