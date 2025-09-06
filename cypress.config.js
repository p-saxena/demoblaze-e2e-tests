const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.demoblaze.com',
    specPattern: 'cypress/specs/**/*.js',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
})
