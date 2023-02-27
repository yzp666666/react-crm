

module.exports = {
    // 预设
    presets: [
        // 写成数组形式可以传参
        ['@babel/preset-env',{}],//编辑es6语法
        ["@babel/preset-react",{}]//编辑jsx语法
    ],
    // 插件
    plugins: [
        //两个插件 编译装饰器语法
        ["@babel/plugin-proposal-decorators", { "version": "legacy" }],
        "@babel/plugin-proposal-class-properties"
    ]
}