var webpack = require('webpack');

module.exports = {
	entry: [
		'webpack-dev-server/client?http://localhost:3000',
		'webpack/hot/only-dev-server',
		'react-hot-loader/patch',
		'./app/app.js',
	],
	output: {
		path: __dirname,
		filename: 'bundle.js',
		publicPath: '/'
	},
	plugins: [
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin(),
	],
	module: {
		loaders: [
			{
				test: /\.js$/,
        		exclude: /node_modules/,
        		loader: 'babel',
        		query: { presets: [ 'es2015', 'react' ] }
			}
		]
	}
}