const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    // Where files should be sent once they are bundled
    entry: { 
      index: path.resolve(__dirname, 'src', 'index.js')
     },
   output: {
     path: path.resolve(__dirname, 'src','dist'),
     filename: 'index.bundle.js'
   },
    // webpack 5 comes with devServer which loads in development mode
   devServer: {
     port: 5000,
     watchContentBase: true
   },
    // Rules of how webpack will take our files, complie & bundle them for the browser 
   module: {
     rules: [
       {
         test: /\.(js|jsx)$/,
         exclude: /nodeModules/,
         use: {
           loader: 'babel-loader'
         }
       },
       {
         test: /\.css$/,
         exclude: /nodeModules/,
         use: ['style-loader', 'css-loader']
       }
     ]
   },
   plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html')
    })
  ]
  }