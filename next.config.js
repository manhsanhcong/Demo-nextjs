

module.exports = {
  reactStrictMode: true,
  webpack: (config, options) => {
    // Important: return the modified config

    config.module.rules.push({
      test: /\.(png|jpg|gif)$/i,
      use: [
        {
          loader: "url-loader",
        },
      ],
    });
    return config;
  },
};
