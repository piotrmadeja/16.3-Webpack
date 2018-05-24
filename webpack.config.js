const path = require('path');

module.exports = {
  entry: './src/app.js',  //od tego zaczynamy rocses kompilacji
  output: {  //plik wyjsciowy
    path: path.resolve(__dirname, 'build'),
    filename: 'app.bundle.js'
  }
};