const path = require('path'); // path comes from NodeJS. Helper to give absolute path.
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
    entry: './src/index.js', // Relative path.
    output: {
        path: path.resolve(__dirname, 'build'), // Path to save to. Requires absolute path. Node makes sure we get the correct path with path.resolve.
        //  __dirname is a constant in NodeJS. A reference to the current directory.
        filename: 'bundle.js' // Whatever name you want. Generally called bundle.js
    },
    module: { //    Module system
        rules: [    //  Rules are loaders.
            {
                use: 'babel-loader', // Say which loader to run.
                test: /\.js$/  //  Regular expression. Taken by Webpack and applied to every file. Checks if file ends with .js, then Babel will be applied.
            },
            {
                loader: ExtractTextPlugin.extract({ //  Plugins work outside of Webpack pipeline and takes things out of the webpack bundle.
                    loader: 'css-loader'
                }),  //  Webpack is moving away from using loader, it's more legacy, but the way the plugin is written expects using the loader property. With the current version anyway.
                test: /\.css$/
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                use: [  //  Order matters. The loader on the far right is the first one that's applied.
                    {   //  Expand a loader out into an object to provide it with some additional configuration.
                        loader: 'url-loader',
                        options: { limit: 40000 }   //  Look for any images that are 40k bytes, if it's smaller put it into our bundle.js, otherwise external file.
                    },
                    'image-webpack-loader'
                ]
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('style.css')  //  Anything that the loader caught is going to be grabbed by this plugin and then saved into a file called style.css.
    ]
};

module.exports = config;
