module.exports = ({ env }) => ({
  'users-permissions': {
    config: {
      jwt: {
        expiresIn: '7d',
      },
    },
  },
  upload: {
    config: {
      provider: 'local',
      providerOptions: {
        sizeLimit: 100000,
      },
    },
  },
  'api-token': {
    enabled: true,
    config: {
      tokenExpiration: 7 * 24 * 60 * 60 * 1000, // 7 days
    },
  },
});
