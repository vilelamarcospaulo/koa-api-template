const Koa = require('koa')
const logger = console

const koaApp = new Koa()
const httpServer = koaApp.listen(process.env.PORT || 3000, _ => {
    logger.log(`server running at ${httpServer.address().address}:${httpServer.address().port}`)
})