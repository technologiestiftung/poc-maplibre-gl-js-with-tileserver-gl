// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/#configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: { url: "/", static: true },
    src: { url: "/dist" },
  },
  plugins: ["@snowpack/plugin-typescript"],
  install: [
    /* ... */
  ],
  installOptions: {
    installTypes: true,
  },
  devOptions: { port: 3000 },

  buildOptions: {
    /* ... */
  },
  alias: {
    /* ... */
  },
};
