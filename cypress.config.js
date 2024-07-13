const { defineConfig } = require('cypress');

module.exports = defineConfig({
  watchForFileChanges: false,
  defaultCommandTimeout: 4000,
  viewportWidth: 1920,
  viewportHeight: 1080,
  numTestsKeptInMemory: 1,
  blockHosts: ['*.google.com'],
  chromeWebSecurity: false,
  screenshotsFolder: 'screenshots',
  videosFolder: 'video',
  video: false,
  responseTimeout: 60000,
  e2e: {
    retries: {
      runMode: 1,
      openMode: 0
    },
    baseUrl: 'https://guest:welcome2qauto@qauto.forstudy.space',
    specPattern: 'cypress/integration/**/*.js',
    setupNodeEvents(on, config) {
    },
  },
});

