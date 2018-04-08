const webpack = require('webpack'); //引入webpack
const opn = require('opn'); // 打开浏览器
const merge = require('webpack-merge');// webpack配置文件合并
const path = require('path');
const baseWebpackConfig = require('./webpack.base.conf');//基础配置
const webpackFile = require('./webpack.file.conf');//路径配置
const eslintFormatter = require('react-dev-utils/eslintFormatter');

let config = merge(baseWebpackConfig,{
    output: {
             path: path.resolve(webpackFile.devDirectory),
             filename: 'js/[name].js',
             chunkFilename:'js/[name]-[id].js',
             publicPath:''
    },
    plugins: [
        /**设置开发环境 */
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('development'),
            }
        }),
        /**设置热更新 */
        new webpack.HotModuleReplacementPlugin(),
        /** common 业务公共代码, wendor 引入第三方 */
        new webpack.optimize.CommonsChunkPlugin({
            name: ['common', 'vendor'],
        }),
        /***防止 wendor hash变化 */
        new webpack.optimize.CommonsChunkPlugin({
            name: 'manifest',
            chunks: ['vendor']
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: [
                    'cache-loader',
                    'babel-loader',
                ],
                include: [
                    path.resolve(__dirname, '../../app'),
                    path.resolve(__dirname, '../../entryBuild')
                ],
                exclude: [
                    path.resolve(__dirname,'../../node_modules')
                ],
            },{
                test: /\.(css|pcss)$/,
                loader:'style-loader?sourceMap!css-loader?sourceMap!postcss-loader?sourceMap',
                exclude: /node_modules/
            },{
                test: /\.(png|jpg|gif|ttf|eot|woff|woff2|svg|swf)$/,
                loader:'file-loader?name=[name].[ext]&outputPath=' + webpackFile.resource +'/'
            },{
                test: /\.(js|jsx)/,
                enforce: 'pre',
                use: [
                    {
                        options: {
                            formatter: eslintFormatter,
                            eslintPath: require.resolve('eslint'),
                            baseConfig: {
                                extends: [require.resolve('eslint-config-react-app')],
                            },
                            useEslintrc: false,
                        },
                        loader: require.resolve('eslint-loader'),
                    },
                ], 
                include: [
                    path.resolve(__dirname, '../../app')
                ], 
                exclude: [
                    path.resolve(__dirname, '../../node_modules')
                ]
            },
           
        ]
    },
    /**设置api转发 */
    devServer: {
        host: '0.0.0.0',
        port: 8080,
        hot: true,
        inline: true,
        contentBase: path.resolve(webpackFile.devDirectory),
        historyApiFallback: true,
        disableHostCheck: true,
        proxy:[
            {
                context: ['/api/**','/u/**'],
                target:'http://192.168.10.181:8080',
                secure: false
            }
        ],
        /***打开浏览器 并打开本项目网址 */
        after() {
            opn('http://localhost:'+this.port);
        }
    }
});
module.exports = config;