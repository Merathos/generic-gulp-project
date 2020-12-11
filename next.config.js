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
      {
        source: '/event',
        destination: '/events/event',
        permanent: true,
      },
    ];
  },
};
