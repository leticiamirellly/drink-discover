import Route from '@ioc:Adonis/Core/Route'

import DrinkController from '../Controllers/Http/DrinkController'

Route.group(() => {
  Route.get('/:name', new DrinkController().getDrinkByName).as('drink.getDrinkByName')
  Route.get('/', new DrinkController().get).as('drink.get')
  Route.post('/', new DrinkController().store).as('drink.store')
}).prefix('/api/drink')
