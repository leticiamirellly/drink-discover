import Env from '@ioc:Adonis/Core/Env'
import { DriveConfig } from '@ioc:Adonis/Core/Drive'

const driveConfig: DriveConfig = {
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
}

export default driveConfig
