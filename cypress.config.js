const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "hgfgif",
  chromeWebSecurity: false,
  e2e: {
    retries: 2,
    baseUrl: "https://qamid.tmweb.ru",
    setupNodeEvents(on, config) {},
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
    pageLoadTimeout: 60000,
    viewportWidth: 1920,
    viewportHeight: 1080,
  },
});
