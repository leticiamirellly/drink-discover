import Route from '@ioc:Adonis/Core/Route'

import UserController from '../Controllers/Http/USerController'

Route.group(() => {
  Route.post('/', new UserController().store).as('user.store')
  Route.post('/favorites', new UserController().storeFavorite).as('favorites.store')
}).prefix('/api/user')
