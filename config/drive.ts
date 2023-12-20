import Env from '@ioc:Adonis/Core/Env'
import { driveConfig } from '@adonisjs/core/build/config'

export default driveConfig({
  disks: {
    gcs: {
      driver: 'gcs',
      visibility: 'private',
      keyFilename: Env.get('GCS_KEY_FILENAME'),
      bucket: Env.get('GCS_BUCKET'),
      usingUniformAcl: false,
    },
  },
  disk: 'gcs',
})
