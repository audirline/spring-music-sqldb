const { defineConfig } = require('cypress')
const mochawesome = require('cypress-mochawesome-reporter/plugin')

module.exports = defineConfig({
  video: true,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/results',
    overwrite: false,
    html: false,
    json: true
  },
  e2e: {
    baseUrl: 'https://spring-music-hgckhuf3gza0bvb2.canadacentral-01.azurewebsites.net/',
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: false,
    setupNodeEvents(on, config) {
      mochawesome(on) // ajoute le plugin mochawesome
    },
  },
})
