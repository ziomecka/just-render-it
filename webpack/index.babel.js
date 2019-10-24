require('dotenv').config();
import * as path from 'path';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';

const cleanWebpackPlugin = new CleanWebpackPlugin({
  cleanOnceBeforeBuildPatterns: [
    '**/*.js',
  ],
});

const isProduction = process.env.NODE_ENV === 'production';
const outputDir = isProduction ? 'prodBundle' : 'devBundle';

module.exports = {
  mode: isProduction ? 'production' : 'development',
  devtool: !isProduction ? 'source-map' : false,
  output: {
    path: path.resolve( __dirname, '../', outputDir),
    filename: '[name].js',
    libraryTarget: 'commonjs',
  },
  entry: {
    'client/index': path.resolve( __dirname, '../src/client.ts'),
    'server/index': path.resolve( __dirname, '../src/server.ts'),
  },
  resolve: {
    mainFiles: ['index'],
    extensions: [ '.js', '.ts' ],
    modules: [ 'node_modules' ],
  },
  node: {
    fs: 'empty',
  },
  plugins: [
    cleanWebpackPlugin,
  ],
  module: {
    rules: [
      {
        test: /.*(tsx?)$/,
        use: [
          'babel-loader',
          {
            loader: 'ts-loader',
            options: {
              compilerOptions: {
                outDir: outputDir,
              },
            },
          },
        ],
      },
    ]
  },
};
