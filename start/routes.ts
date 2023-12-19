import  Route  from '@ioc:Adonis/Core/Route';
import AppException from 'App/Shared/Exceptions/AppException';

import '../app/Modules/Category/Routes/CategoryRoutes';
import '../app/Modules/Drink/Routes/DrinkRoutes';
import '../app/Modules/User/Routes/UserRoutes';


Route.any('*', () => {
  throw new AppException('Rota não encontrada', 404)
})