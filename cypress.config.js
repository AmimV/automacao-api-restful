import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    viewportWidth: 1440,
    viewportHeight: 900,
    defaultCommandTimeout: 10000,
    requestTimeout: 12000,

    chromeWebSecurity: false,
    video: false,

    specPattern: '**/*.feature',
    setupNodeEvents(on, config) {
      const cucumber = require('cypress-cucumber-preprocessor').default;
      const options = {
        typescript: require.resolve('typescript'),
        watchOptions: {},
      };
      config.fileServerFolder = '.';
      on('file:preprocessor', cucumber(options));
    },
  },
});
