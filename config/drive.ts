import Env from '@ioc:Adonis/Core/Env'
const driveConfig = {
  disks: {
    gcs: {
      driver: 'gcs',
      visibility: 'private',
      keyFilename: Env.get('GCS_KEY_FILENAME'),
      bucket: Env.get('GCS_BUCKET'),
      usingUniformAcl: true
    },
  },
  disk: Env.get('DRIVE_DISK'),
}

export default driveConfig
