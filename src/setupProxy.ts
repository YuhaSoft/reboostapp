import { createProxyMiddleware } from "http-proxy-middleware";

module.exports = function(app: any) {
    app.use(
      '/api',
      createProxyMiddleware({
        target: 'http://reboost.eu-4.evennode.com/api/v1/',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '',
        },
      })
    );
}  