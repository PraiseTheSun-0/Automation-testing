import { defineConfig } from "cypress";

export default defineConfig({
  env: {
    apiUrl: "http://localhost:3001",
    mobileViewportWidthBreakpoint: 414,
    coverage: false,
    username: 'Tavares_Barrows',
    password: 's3cret',
    codeCoverage: {
      url: "http://localhost:3001/__coverage__",
      exclude: "cypress/**/*.*",
    },
    defaultPassword: process.env.SEED_DEFAULT_USER_PASSWORD,
    paginationPageSize: process.env.PAGINATION_PAGE_SIZE,

    // Auth0
    auth0_username: process.env.AUTH0_USERNAME,
    auth0_password: process.env.AUTH0_PASSWORD,
    auth0_domain: process.env.REACT_APP_AUTH0_DOMAIN,

    // // Okta
    // okta_username: process.env.OKTA_USERNAME,
    // okta_password: process.env.OKTA_PASSWORD,
    // okta_domain: process.env.REACT_APP_OKTA_DOMAIN,
    // okta_client_id: process.env.REACT_APP_OKTA_CLIENTID,
    // okta_programmatic_login: process.env.OKTA_PROGRAMMATIC_LOGIN || false,

    // // Amazon Cognito
    // cognito_username: process.env.AWS_COGNITO_USERNAME,
    // cognito_password: process.env.AWS_COGNITO_PASSWORD,
    // cognito_domain: process.env.AWS_COGNITO_DOMAIN,
    // cognito_programmatic_login: false,
    // //awsConfig: awsConfig.default,

    // // Google
    // googleRefreshToken: process.env.GOOGLE_REFRESH_TOKEN,
    // googleClientId: process.env.REACT_APP_GOOGLE_CLIENTID,
    // googleClientSecret: process.env.REACT_APP_GOOGLE_CLIENT_SECRET,
  },
  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
    specPattern: "src/**/*.cy.{js,jsx,ts,tsx}",
    supportFile: "cypress/support/component.ts",
    setupNodeEvents(on, config) {
      //codeCoverageTask(on, config);
      return config;
    },
  },
  e2e: {
    baseUrl: "http://localhost:3000",
    specPattern: "cypress/e2e/**/*.spec.{js,jsx,ts,tsx}",
    supportFile: "cypress/support/e2e.ts",
    viewportHeight: 1000,
    viewportWidth: 1280,
    setupNodeEvents(on, config) {
      require('cypress-terminal-report/src/installLogsPrinter')(on, {printLogsToConsole:"always"});
      // const testDataApiEndpoint = `${config.env.apiUrl}/testData`;

      // const queryDatabase = ({ entity, query }, callback) => {
      //   const fetchData = async (attrs) => {
      //     const { data } = await axios.get(`${testDataApiEndpoint}/${entity}`);
      //     return callback(data, attrs);
      //   };

      //   return Array.isArray(query) ? Promise.map(query, fetchData) : fetchData(query);
      // };

      // on("task", {
      //   percyHealthCheck,
      //   async "db:seed"() {
      //     // seed database with test data
      //     const { data } = await axios.post(`${testDataApiEndpoint}/seed`);
      //     return data;
      //   },

      //   // fetch test data from a database (MySQL, PostgreSQL, etc...)
      //   "filter:database"(queryPayload) {
      //     return queryDatabase(queryPayload, (data, attrs) => _.filter(data.results, attrs));
      //   },
      //   "find:database"(queryPayload) {
      //     return queryDatabase(queryPayload, (data, attrs) => _.find(data.results, attrs));
      //   },
      //});

      //codeCoverageTask(on, config);
      return config;
    },
  },
});
