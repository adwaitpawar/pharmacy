const path = require('path');

module.exports = {
  mode: 'development', // Corrected typo
  target: 'node', // Specify the target environment as node
  entry: './app.js', // Entry point of your Node.js application
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory
    filename: 'bundle.js', // Output filename
    libraryTarget: 'commonjs2' // Specify the module system
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Apply this rule to files ending in .js
        exclude: /node_modules/, // Don't apply to files residing in node_modules
        use: {
          loader: 'babel-loader', // Use babel-loader for transpiling JavaScript files
          options: {
            presets: ['@babel/preset-env'] // Use @babel/preset-env for configuring which JavaScript features to transpile
          }
        }
      }
    ]
  }
};
