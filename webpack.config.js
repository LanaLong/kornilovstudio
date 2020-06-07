const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const FontminPlugin = require('fontmin-webpack');

const webpack = require('webpack');
const isDev = process.env.NODE_ENV === 'development';

module.exports = {
    entry: {
        index: './src/pages/index/index.js',
        about: './src/pages/about/about.js',
        price: './src/pages/price/price.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[chunkhash].js'
    },
    module: {
        rules: [

            {
                test: /\.js$/,
                use: { loader: 'babel-loader' },
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    (isDev ? 'style-loader' : MiniCssExtractPlugin.loader),
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2
                        }
                    },
                    'postcss-loader'
                ],
            },
            {
                test: /\.(png|jpg|gif|ico|svg)$/,
                use: [
                    'file-loader?name=./images/[name].[ext]',
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            bypassOnDebug: true,
                            disable: true,
                        }
                    },
                ]
            },
            {
                test: /\.(eot|ttf|woff|woff2)$/,
                loader: 'file-loader?name=./vendor/[name].[ext]'
            },

        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: false,
            template: './src/pages/index/index.html',
            filename: 'index.html'
        }),
        new HtmlWebpackPlugin({
            inject: false,
            template: './src/pages/about/about.html',
            filename: 'about.html'
        }),
        new HtmlWebpackPlugin({
            inject: false,
            template: './src/pages/price/price.html',
            filename: 'price.html'
        }),
        new WebpackMd5Hash(),
        new webpack.DefinePlugin({
            'NODE_ENV': JSON.stringify(process.env.NODE_ENV),
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[chunkhash].css'
        }),
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorPluginOptions: {
                preset: ['default'],
            },
            canPrint: true
        }),
        new FontminPlugin({
            autodetect: true,
            glyphs: ['\uf0c8'],
        }),
        new ImageminPlugin({
            disable: process.env.NODE_ENV !== 'production',
            pngquant: {
                quality: '95-100'
            }
        })
    ]
};