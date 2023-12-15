import {HttpContextContract} from '@ioc:Adonis/Core/HttpContext';
import { container } from 'tsyringe'
import { StoreCategoryService } from '../../Services/Category';
import StoreCategoryValidator from '../../Validators/Category/StoreCategoryValidator';
import { StatusCodes } from 'http-status-codes'
import AppException from 'App/Shared/Exceptions/AppException';

export default class CategoryController {
    public async store(ctx: HttpContextContract) {
        const categoryDTO = await ctx.request.validate(StoreCategoryValidator).catch((error) => {
            throw new AppException(error, StatusCodes.BAD_REQUEST)
        })

        const storeCategory = container.resolve(StoreCategoryService)

        const category = await storeCategory.init(categoryDTO);
        const data = {message: 'Categoria cadastrada com sucesso!', category}
        return ctx.response.json(data)          
    
    }
}
