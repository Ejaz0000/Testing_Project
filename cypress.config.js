const { defineConfig } = require("cypress");
const { lighthouse, prepareAudit } = require("@cypress-audit/lighthouse");
//const { lighthouse, pa11y, prepareAudit } = require("cypress-audit");
module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
   // baseUrl: "http://localhost/opencart",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
      on("before:browser:launch", (browser = {}, launchOptions) => {
        prepareAudit(launchOptions);
      });

      on("task", {
        lighthouse: lighthouse(),
        
      });
    },
  },
});


