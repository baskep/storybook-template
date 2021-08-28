module.exports = {
  "stories": [
    "../packages/ui-mobile/src/**/*.stories.mdx",
    "../packages/ui-mobile/src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve('babel-loader'),
          options: {
            presets: [require.resolve('babel-preset-react-app')],
          },
        },
      ],
    });
    config.module.rules.push({
      test: /\.less$/,
      loaders: [
        'style-loader',
        'css-loader',
        {
          loader: 'less-loader',
          options: {
            lessOptions: {
              javascriptEnabled: true,
            },
          },
        },
      ],
    });
    return config;
  },
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ]
}