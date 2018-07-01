/*global module*/
var webpack = require('webpack');
var path = require('path');
var glob = require('glob');
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');

var entryMap = getEntrys();

/**
 * [getEntrys 获取入口文件]
 * @return {Object} [入口名称及路径]
 */
function getEntrys() {
    var rootPath = './app/scripts';
    var entry = {};
    var files = glob.sync('./app/scripts/**/*Main.js');

    files.forEach(function(item, index) {
        entry[item.substring(rootPath.length, item.lastIndexOf('.js'))] = item;
    });

    return entry;
}


module.exports = env => {
    var isProdEnv = env && env.prod;

    return {
        entry: entryMap,
        resolve: {
            modules: [
                './app/scripts',
                'node_modules'
            ],
            alias: {
                'vue': 'vue/dist/vue'
            },
            extensions: [".ts", ".tsx", ".js", ".json",'.vue']
        },
        resolveLoader: {
            alias: {
                'text': 'text-loader'
            }
        },
        devServer: {
            contentBase: path.join(__dirname, "./"),
            port: 9000,
            open:true,
            index:'./site/.html',
            inline:true,
            hot:false,
            compress:true
        },
        externals: {
            jquery: 'jQuery'
        },
        module: {
            rules: [{
                test: /\.html$/,
                loader: 'text-loader'
            }, {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.tsx?$/,
                loader: "ts-loader"
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }, {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: [{
                    loader:'source-map-loader',
                    options:{
                        enforce: "pre"
                    }
                },{
                    loader: 'babel-loader',
                }]
            }]
        },
        devtool: isProdEnv ? 'hidden-source-map' : 'source-map',
        plugins: ((function() {
            var _plugins = [];

            return _plugins;
        })()),
        output: {
            path: path.resolve(__dirname, './app/scripts-build'),
            filename: '[name].js'
        }
    };
};