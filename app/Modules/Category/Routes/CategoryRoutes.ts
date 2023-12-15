import Route from '@ioc:Adonis/Core/Route'

import CategoryController from '../Controllers/Http/CategoryController'

Route.group(() => {
  Route.post('/', new CategoryController().store).as('category.store')
}).prefix('/category')
