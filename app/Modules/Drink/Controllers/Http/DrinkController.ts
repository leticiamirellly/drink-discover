import {HttpContextContract} from '@ioc:Adonis/Core/HttpContext';
import { container } from 'tsyringe'
import { StatusCodes } from 'http-status-codes'
import AppException from 'App/Shared/Exceptions/AppException';
import { StoreDrinkService } from '../../Services/StoreDrinkService';
import StoreDrinkValidator from '../../Validators/StoreDrinkValidator';
import { GetDrinkByNameService } from '../../Services/GetDrinksByNameService';
import { GetDrinkByCategoryIdService } from '../../Services/GetDrinkByCategoryIdService';


export default class DrinkController {

    public async getDrinkByName({ response, params }: HttpContextContract): Promise<void> {
        const {name: drinkName} = params

        const getDrinks= container.resolve(GetDrinkByNameService)
        const category = await getDrinks.init(drinkName)
    
        return response.json(category)
    }

    public async get({ response, request }: HttpContextContract): Promise<void> {
        const categoryId = request.qs().category_id

        const getDrinks= container.resolve(GetDrinkByCategoryIdService)
        const result = await getDrinks.init(categoryId)
    
        return response.json(result)
    }

    public async store(ctx: HttpContextContract) {
        const drinkDTO = await ctx.request.validate(StoreDrinkValidator).catch((error) => {
            throw new AppException(error, StatusCodes.BAD_REQUEST)
        })
        const storeDrink = container.resolve(StoreDrinkService)
        

        const drink = await storeDrink.init(drinkDTO);
        const data = {message: 'Drink cadastrado com sucesso!', drink}
        return ctx.response.status(201).json(data)        

    }
}