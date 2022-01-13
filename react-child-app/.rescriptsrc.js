module.exports = {
  webpack: (config) => {
    config.output.library = "singleReact";
    config.output.libraryTarget = "umd";
    return config;
  },
};
