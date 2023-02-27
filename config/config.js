//生成和开发两种模式公共的配置

//插件用来增强webpack的
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const { ProgressPlugin,ProvidePlugin } = require('webpack')


module.exports = {
    
    // 入口
    entry: {
        // 把第三方包从业务代码 抽离出来,方便对第三方包做CDN优化
        chunk:['react','react-dom/client'],
        app: {
            //import 用来指定业务代码   的入口
            import:path.resolve(__dirname, '../', 'src/main.js'),
            // 我们的业务代码依赖第三方包
            dependOn:'chunk'
        },
        
    },
    // 出口
    output: {
        path: path.resolve(__dirname, '../', 'dist'),
        //文件名称 [name]-格式化字符串  使用格式化可以指定hash值 用于解决浏览器缓存问题
        filename: 'js/[name].[chunkhash:8].js',
        clean: true //每次bulid打包时,删除之前的打包文件
    },
    //配置插件
    plugins: [
        // 打包后的js文件，插入到页面 的插件
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../', 'public/index.html'),
            inject: 'body',//把js脚本注入到body结束标签之前
            filename: 'index.html',//打包成功后页面的名字
            title: 'vue-element-admin',//指定页面中title标题
            favicon: path.resolve(__dirname, '../', 'public/favicon.ico')
        }),
        //进度条的插件
        new ProgressPlugin({
            handler(percentage, message, ...args) {
                if(percentage===1){
                    console.log('100% 打包完成');
                }else{
                    console.log(`${Math.floor(percentage*100)}%正在打包编译`);
                }
            },
        }),
        //全局注册包
        new ProvidePlugin({
            React:path.resolve(__dirname, '../', 'node_modules/react/index.js')
        })
    ],
    //模块
    module:{
        rules:[
            // webpack遇到以.js结尾的模块,使用babel-loader 转成es5
            // exclude 排除第三方包的编译
            {test:/\.(js|jsx)$/,use:'babel-loader',exclude:/node_modules/},
            // loader的顺序是从后往前的 
            {test:/\.(css|scss)$/,use:['style-loader','css-loader','sass-loader']},
            // 图片模块
            {test:/\.(jpg|png|svg|gif|jpeg|webg)$/,type:'asset/resource',generator:{
                filename:'img/[name].[contenthash:8][ext]'
            }},
        ]
    },
    resolve:{
        alias:{
            // 配置路劲别名
            '@':path.resolve(__dirname,'../','src')
        },
        // 配置允许省略哪些后缀
        extensions:['.js','.jsx','.ts','.tsx','.vue']
    }
}