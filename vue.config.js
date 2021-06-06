const PrerenderSpaPlugin = require('prerender-spa-plugin')
const path = require('path')
const esmImport = require('esm')(module);
const data = esmImport('./data.js')
module.exports = {
	chainWebpack: config => {
		const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
		types.forEach(type => addStyleResource(config.module.rule('stylus').oneOf(type)))

		const svgRule = config.module.rule('svg')
		svgRule.uses.clear()
		svgRule
			.use('babel-loader')
			.loader('babel-loader')
			.end()
			.use('vue-svg-loader')
			.loader('vue-svg-loader')

		config.plugin('define').tap(definitions => {
			definitions[0]['process.env']['NODE_ANALYTICS'] = '"development"'
			return definitions
		})
		config
			.plugin('html')
			.tap(args => {
				args[0].templateParameters = data.default
				return args
			})
	},
	css: {
		sourceMap: process.env.NODE_ENV == 'production' ? false : true
	},
	productionSourceMap: process.env.NODE_ENV == 'production' ? false : true,
	transpileDependencies: ['@cookieseater/vue-yandex-share'],
	configureWebpack: config => {
		let plugins = []
		var routes = []
		data.default.allPrerenderRoutes.forEach(el => routes.push(el))
		if (process.env.NODE_ENV === 'production') {
			plugins.push(new PrerenderSpaPlugin({
				staticDir: path.resolve(__dirname, 'dist'),
				routes: routes,
				// postProcessHtml: function (context) {
				//   return context.html.replace(
				//     // strip all script tags
				//     /<script.*(tag|analytics|top100|fbevents|iframe_api).*?><\/script>/gmi,
				//     ''
				//   )
				// },
				renderer: new PrerenderSpaPlugin.PuppeteerRenderer({
					timeout: 60000,
					renderAfterTime: 10000,
					maxConcurrentRoutes: 1
				})
			}))
		}

		return {
			plugins: plugins
		}

	}
}

function addStyleResource(rule) {
	rule.use('style-resource')
		.loader('style-resources-loader')
		.options({
			patterns: [
				path.resolve(__dirname, './src/assets/styles/imports.styl'),
			],
		})
}
