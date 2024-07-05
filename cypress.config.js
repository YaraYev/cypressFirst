const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    viewportWidth: 1280,
    viewportHeight: 720,
    specPattern: 'cypress/integration/**/*.js',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    fixturesFolder: 'cypress/fixtures',
    videosFolder: 'cypress/videos',
    screenshotsFolder: 'cypress/screenshots',
  },
});
