module.exports = {
    
    entry: "./src/app.js",
    
    output: {
      path: './build',
      filename : 'bundle.js'
    },
    
    resolve: {
        extensions: ['', '.js']
    },
    
    devServer: {
        host: '0.0.0.0',
        port: 8080,
        inline: true
    },
    
    module:{
        loaders: [
            {
                test: /(\.js|.jsx)$/,
                loader: 'babel',
                exclude: '/node_modules/',
                query: {
		            presets:['es2015']
		        }
            }
        ]
    }
}