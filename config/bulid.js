//生成配置 production  硬盘打包
const MiniCssExtractPlugin=require('mini-css-extract-plugin')
module.exports={
    mode:'production',
    devtool:'source-map',
    plugins:[
        new MiniCssExtractPlugin({
            filename:'css/[name].[contenthash:8].css'
        })
    ],
    module:{
        rules:[
            {test:/\.css$/,use:[MiniCssExtractPlugin.loader,'css-loader']}
        ]
    }
}