const { createProxyMiddleware } = require('http-proxy-middleware')
const { env } = require('process')

const target = env.ASPNETCORE_HTTPS_PORT
    ? `https://localhost:${env.ASPNETCORE_HTTPS_PORT}`
    : env.ASPNETCORE_URLS
    ? env.ASPNETCORE_URLS.split(';')[0]
    : 'http://localhost:8000'

const context = ['/jobapplication']

const onError = (err: any, req: any, resp: any, target: any) => {
    console.error(`${err.message}`)
}

module.exports = function (app: any) {
    const appProxy = createProxyMiddleware(context, {
        target: target,
        // Handle errors to prevent the proxy middleware from crashing when
        // the ASP NET Core webserver is unavailable
        onError: onError,
        secure: false,
        // Uncomment this line to add support for proxying websockets
        //ws: true,
        headers: {
            Connection: 'Keep-Alive'
        }
    })

    app.use(appProxy)
}
