declare module '@ioc:Adonis/Core/Drive' {
  interface DisksList {
    gcs: {
      config: GcsDriverConfig
      implementation: GcsDriverContract
    }
  }
}
