const cypress = require("cypress");
const cypressGrep = require("cypress-grep/src/plugin");

module.exports = {
  projectId: "xrhohi",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require("cypress-mochawesome-reporter/plugin")(on);
      cypressGrep(config);
      return config;
    },
    scrollBehavior: false,
    reporter: 'cypress-multi-reporters',
    reporterOptions: {
      reporterEnabled: 'mocha-junit-reporter, mochawesome',
      mochaJunitReporterReporterOptions: {
        mochaFile: 'results/junit/test-results-[hash].xml',
      },
      mochawesomeReporterOptions: {
        reportDir: 'results/mochawesome',
        overwrite: false,
        html: true,
        json: false,
      },
    },
  },
};
