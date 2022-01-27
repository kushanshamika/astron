const { createProxyMiddleware } = require('http-proxy-middleware');

const options = {
  target: 'https://jsonplaceholder.typicode.com',
  changeOrigin: true,
  pathRewrite: {
    [`^/api`]: '',
  },
};

const exampleProxy = createProxyMiddleware(options);

export default exampleProxy;
