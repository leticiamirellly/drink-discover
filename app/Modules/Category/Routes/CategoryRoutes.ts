import Route from '@ioc:Adonis/Core/Route'

import CategoryController from '../Controllers/Http/CategoryController'

Route.group(() => {
  Route.get('/:id', new CategoryController().get).as('category.get')
  Route.get('/', new CategoryController().list).as('category.list')
  Route.post('/', new CategoryController().store).as('category.store')
}).prefix('/api/category')
