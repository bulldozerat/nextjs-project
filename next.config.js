const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
  // npm run dev
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        testKey: 'dev-key',
      },
    };
  }

  return {
    env: {
      testKey: 'prd-key',
    },
  };
};
