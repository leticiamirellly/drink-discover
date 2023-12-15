import  Route  from '@ioc:Adonis/Core/Route';
import AppException from 'App/Shared/Exceptions/AppException';

Route.group(async () => {
  await require('../app/Modules/Category/Routes/CategoryRoutes')
}).prefix('/api')

Route.any('*', () => {
  throw new AppException('Rota não encontrada', 404)
})