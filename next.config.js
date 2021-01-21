module.exports = {
  async redirects() {
    return [
      {
        source: '/index',
        destination: '/',
        statusCode: 301,
      },
    ];
  },
};
