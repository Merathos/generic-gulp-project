module.exports = {
  async redirects() {
    return [
      {
        source: '/index',
        destination: '/',
        permanent: true,
      },
      {
        source: '/blog-list',
        destination: '/blog',
        permanent: true,
      },
    ];
  },
};
