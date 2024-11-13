const cypress = require("cypress");
const {tagify} = require ('cypress-tags')

module.exports = {
  projectId: "xrhohi",
  reporter: "junit",
  reporterOptions: {
    mochaFile: "results/my-test-output-[hash].xml",
    toConsole: true,
  },
  retries: {
    runMode: 1,
    openMode: 1,
  },
    // Configure the JUnit reporter
    junit: {
      reporterEnabled: true,
      mochaFile: "cypress/reports/junit/test-results.xml",
      toConsole: true,
    },
    experimentalStudio: true,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('file:preprocessor', tagify(config));
      return config;
    },
    baseUrl: "https://www.netshoes.com.br",
    scrollBehavior: false,
  },
};
