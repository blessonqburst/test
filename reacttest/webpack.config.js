var config = {
   entry: './main.js',
	
   output: {
      path:'./',
      filename: 'index.js',
   },
	
   devServer: {
      inline: true,
      port: 8080
   },
	
   module: {
      loaders: [
     {
       test: /.jsx?$/,
       loader: 'babel-loader',
       exclude: /node_modules/,
       query: {
         presets: ['es2015', 'react']
       }
     },
     {
       test: /\.css$/,
       loader: 'style!css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
       exclude: /node_modules/
     }
   ]
   }
}

module.exports = config;
