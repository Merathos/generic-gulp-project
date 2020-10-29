import { createProxyMiddleware } from 'http-proxy-middleware';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default createProxyMiddleware({
  target: 'https://api.develop.dins.d.nimax.ru',
  changeOrigin: true,
  secure: false,
  pathRewrite: { [`^/api`]: '/graphql' },
});
