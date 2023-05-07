const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://webcams.nyctmc.org',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '/api',
      },
    })
  );
};
