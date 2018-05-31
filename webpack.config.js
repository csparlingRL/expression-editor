module.exports = {
    devtool: 'inline-source-map',
    entry: './src/index.tsx',
    output: {
      filename: 'index.js'
    },
    devServer: {
      port: 3000
  },
    resolve: {
      extensions: ['.ts', '.tsx', '.js']
    },
    module: {
      rules: [
        {
          test: /(\.js$|\.ts(x?)$)/,
          exclude: /node_modules/,
          use: [
            { loader: 'babel-loader' },
            { loader: 'ts-loader' }
          ]
        },
        {
          test: /\.css$/,
          use: [
            require.resolve('style-loader'),
            {
              loader: require.resolve('css-loader'),
              options: {
                importLoaders: 1,
              },
            },
            'sass-loader'
          ],
        }
      ]
    }
  }
  
  