const {defineConfig} = require("cypress");
const {tagify} = require ('cypress-tags')
//import ('cypress-mochawesome-reporter/register');

module.exports = defineConfig({
  projectId: "xrhohi",
  reporter: 'cypress-mochawesome-reporter',

  reporterOptions: {
    reportDir: 'results',
    overwrite: false,
    html: true,
    json: true,
    inlineAssets: true,
    charts: true,
    reportPageTitle: 'Netshoes-automation-report',
    embeddedScreenshots: true,
  },
  retries: {
    runMode: 1,
    openMode: 1,
  },
    // Configure the JUnit reporter
    junit: {
      reporterEnabled: false,
      mochaFile: "reports/junit/test-results.xml",
      toConsole: true,
    },
    experimentalStudio: true,
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on); // Add this line
      on('file:preprocessor', tagify(config));
      return config;
    },
    baseUrl: "https://www.netshoes.com.br",
    scrollBehavior: false,
  },
});

// projectId: "xrhohi",
//   reporter: "junit",
//   reporterOptions: {
//     mochaFile: "results/my-test-output-[hash].xml",
//     toConsole: true,