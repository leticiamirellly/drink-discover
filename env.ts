import Env from '@ioc:Adonis/Core/Env'

export default Env.rules({
  HOST: Env.schema.string.optional({ format: 'host' }),
  PORT: Env.schema.number.optional(),
  APP_KEY: Env.schema.string(),
  APP_NAME: Env.schema.string(),
  PG_HOST: Env.schema.string({ format: 'host' }),
  PG_PORT: Env.schema.number(),
  PG_USER: Env.schema.string(),
  PG_PASSWORD: Env.schema.string.optional(),
  PG_DB_NAME: Env.schema.string(),
  DRIVE_DISK: Env.schema.enum(['gcs'] as const),
  GCS_KEY_FILENAME: Env.schema.string(),
  GCS_BUCKET: Env.schema.string(),

  NODE_ENV: Env.schema.enum.optional(['development', 'production', 'test'] as const),
})
