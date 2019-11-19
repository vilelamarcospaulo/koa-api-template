module.exports = logger => ({
    logRequest: logRequest(logger),
})

const logRequest = logger => async (ctx, next) => {
    const startAt = new Date()
    await next()
    logger.info(`Received at ${startAt} => ${ctx.request.method} on ${ctx.request.url} => ${ctx.status} || ${ctx.body} `)
}