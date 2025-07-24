const { defineConfig } = require('cypress')
//const mochawesome = require('cypress-mochawesome-reporter/plugin')

module.exports = defineConfig({
  video: true,
  reporter: 'mocha-junit-reporter',
  reporterOptions: {
    mochaFile: 'cypress/reports/junit/test-results.xml',
    toConsole: true
  },
  e2e: {
    baseUrl: 'https://spring-music-hgckhuf3gza0bvb2.canadacentral-01.azurewebsites.net/',
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: 'cypress/support/e2e.js',
    setupNodeEvents(on, config) {
      //require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
})
