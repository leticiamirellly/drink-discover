export default class LogRequest {
  public async handle(next: () => Promise<void>) {

    await next()
  }
}