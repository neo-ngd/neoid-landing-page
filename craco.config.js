module.exports = {
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
