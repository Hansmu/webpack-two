const path = require('path'); // path comes from NodeJS. Helper to give absolute path.

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
            }
        ]
    }
};

module.exports = config;
