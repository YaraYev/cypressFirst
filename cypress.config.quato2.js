import { defineConfig } from "cypress"

export default defineConfig({
    watchForFileChanges: false,
    defaultCommandTimeout: 4000,
    viewportWidth: 1920,
    viewportHeight: 1080,
    numTestsKeptInMemory: 1,
    blockHosts: ['*.google.com'],
    chromeWebSecurity: false,
    screenshotsFolder: "screenshots",
    videosFolder: "video",
    video: false,
    responseTimeout: 10000,
    reporter: 'cypress-multi-reporters',
    reporterOptions: {
        configFile: 'reporter-config.json',
    },
    env: {
        user: {
            email: "kar@gmail.com",
            password: "P123456k"
        }
    },
    e2e: {
        retries: {
            runMode: 1,
            openMode: 0
        },
        baseUrl: "https://guest:welcome2qauto@qauto2.forstudy.space",
        specPattern: "cypress/integration/pages/**/*.spec.js",
        setupNodeEvents: function (on, config) {

        },
        reporter: 'mochawesome',
        reporterOptions: {
            reportDir: 'cypress/results',
            overwrite: false,
            html: true,
            json: true
        }
    }

})