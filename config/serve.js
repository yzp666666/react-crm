//开发配置 development  内存打包
const ESLintPlugin=require('eslint-webpack-plugin')
module.exports={
    mode:'development',
    devtool:'eval-source-map',//控制台中报错和源码位置保持一致
    devServer:{
        port:8000,
        open:true,//内存打包完成自动打开页面
        client:{
            // 模态层的控制
            overlay:{
                errors:true,
                warnings:false
            }
        }
    },
    plugins:[
        // eslint的插件
        new ESLintPlugin({
            eslintPath:'eslint',//指定使用什么对代码进行校验
            extensions:['js','jsx','ts','tsx'],//对哪些模块进行校验
            exclude:['node_modules'],//不对xx进行校验
            fix:false,//关闭自动修复
            formatter:'stylish'
        })
    ]
}