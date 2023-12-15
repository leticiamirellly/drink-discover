import Server from '@ioc:Adonis/Core/Server'

Server.middleware.register([
    () => import('../app/Shared/Middleware/LogRequest'),
    () => import('@ioc:Adonis/Core/BodyParser'),
])

Server.middleware.registerNamed({
})
