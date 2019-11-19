const logger = {
    info: console.log,
    error: console.error,
}

const Koa = require('koa')
const KoaRouter = require('koa-router');
const KoaBodyParser = require('koa-bodyparser');

const koaApp = new Koa()
const router = new KoaRouter()

router.get('/', ctx => ctx.body = 'Generic API!!')

koaApp
.use(KoaBodyParser())
.use(router.routes())
.use(router.allowedMethods())

const httpServer = koaApp.listen(process.env.PORT || 3000, _ => {
    logger.info(`server running at ${httpServer.address().address}:${httpServer.address().port}`)
})