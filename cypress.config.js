const { defineConfig } = require('cypress')

module.exports = defineConfig({
  video: true, // active l’enregistrement vidéo de chaque test
  e2e: {
    baseUrl: 'https://spring-music-hgckhuf3gza0bvb2.canadacentral-01.azurewebsites.net/',
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: false,
    setupNodeEvents(on, config) {
      // plugins éventuels ici
    },
  },
})
