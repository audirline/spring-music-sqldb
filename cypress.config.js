const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://spring-music-hgckhuf3gza0bvb2.canadacentral-01.azurewebsites.net/',
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: false,
    setupNodeEvents(on, config) {
      // Tu peux ajouter des plugins Cypress ici si besoin
    },
  },
})
