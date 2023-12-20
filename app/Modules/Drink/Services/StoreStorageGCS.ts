import Drive from '@ioc:Adonis/Core/Drive'
import AppException from 'App/Shared/Exceptions/AppException'
import { MultipartFileContract } from '@ioc:Adonis/Core/BodyParser'


export class StoreStorageService {
    constructor() { }

    public async init(file: MultipartFileContract) {
        try {
            await file.moveToDisk('./drinks/', { name: `${file.clientName}` })
            try {
                return await Drive.getUrl(`${file.clientName}`)
            } catch (error) {
                throw new AppException('Erro ao retornar imagem salva.')
            }
        } catch (error) {
            throw new AppException('Erro ao salvar imagem.')
        }
    }
}
