const path = require('path');

module.exports = {
  // Set the mode to development or production
  mode: 'development', // Or 'production'
  // Entry point of your application
  entry: './js/main.ts',
  // Output configuration
  output: {
    filename: 'bundle.js', // Name of the bundled file
    path: path.resolve(__dirname, 'dist'), // Output directory
  },
  // Module rules for handling different file types
  module: {
    rules: [
      {
        test: /\.ts$/, // Apply this rule to files ending with .ts
        use: 'ts-loader', // Use ts-loader for TypeScript files
        exclude: /node_modules/, // Exclude node_modules directory
      },
    ],
  },
  // Resolve extensions for modules
  resolve: {
    extensions: ['.ts', '.js'], // Resolve .ts and .js extensions
  },
  // Enable source maps for easier debugging
  devtool: 'inline-source-map',
};
