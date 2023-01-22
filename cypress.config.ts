import { defineConfig } from "cypress";

export default defineConfig({
  viewportHeight: 900,
  viewportWidth: 1280,
  e2e: {
    baseUrl: 'https://buggy.justtestit.org/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
