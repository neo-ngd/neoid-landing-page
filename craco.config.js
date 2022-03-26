const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              // See all theme variables (dark override default):
              // https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less
              // https://github.com/ant-design/ant-design/blob/master/components/style/themes/dark.less

              // Prefer modifying more abstract variables (check the impact)
              // Base scaffolding variables
              '@font-size-base': '16px',
              '@link-color': 'invalid',
              '@link-hover-color': 'invalid',
              '@link-active-color': 'invalid',
              '@link-decoration': 'invalid',
              '@link-hover-decoration': 'invalid',
              '@link-focus-decoration': 'invalid',

              // Drawer
              '@drawer-header-padding': 0,
              '@drawer-body-padding': 0,
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
  webpack: {
    target: 'node',
    configure: webpackConfig => {
      // Fix import outside src, see https://stackoverflow.com/a/60353355
      const scopePluginIndex = webpackConfig.plugins.findIndex(plugin => {
        return plugin.constructor && plugin.constructor.name === 'ModuleScopePlugin';
      });
      webpackConfig.resolve.plugins.splice(scopePluginIndex, 1);

      // Fix FOUC (Flash Of Unstyled Content)
      if (process.env.NODE_ENV === 'production') {
        const htmlWebpackPlugin = webpackConfig.plugins.find(plugin => {
          return plugin.constructor && plugin.constructor.name === 'HtmlWebpackPlugin';
        });
        if (htmlWebpackPlugin) {
          htmlWebpackPlugin.userOptions.inject = 'body';
          htmlWebpackPlugin.userOptions.scriptLoading = 'blocking';
        }
      }
      return webpackConfig;
    },
  },
};
