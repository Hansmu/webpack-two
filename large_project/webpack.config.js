var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

const VENDOR_LIBS = [
    'faker', 'lodash', 'redux', 'react-redux', 'react-dom',
    'react', 'react-input-range', 'redux-form', 'redux-thunk'
];

module.exports = {
  entry: {
      bundle: './src/index.js',  //  I wanted to produce a bundle.js file as the property is called bundle.
      vendor: VENDOR_LIBS   //  I want a different bundle. Provide an array with the different vendor files. Put all the regular dependencies in there.
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'   //  Uses the property defined above to create a file. When bundle file has been created, save it as bundle.js. When vendor has been created, save it as vendor.js.
  },
  module: {
    rules: [
        {
            use: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/ //  Waste of resources to transpile them.
        },
        {
            use: ['style-loader', 'css-loader'],
            test: /\.css$/
        }
    ]
  },
  plugins: [
      new webpack.optimize.CommonsChunkPlugin({
          name: 'vendor'    //  Looks at our entry points and if it finds common/duplicate code, then pulls it out and puts it in the vendor file that's created in entry.
      }),
      new HtmlWebpackPlugin({
          template: 'src/index.html'
      })
  ]
};
