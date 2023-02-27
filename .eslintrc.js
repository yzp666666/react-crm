

module.exports={
    // 对es6+新特性做更好的代码校验
    parser:'@babel/eslint-parser',
    parserOptions: {
        "ecmaVersion": 6, //es6+
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true //开启jsx校验
        }
    },
    // 集成airbn对React代码校验
    extends:['airbnb','airbnb/hooks'],
    // 自定义eslint校验规则
    rules: {
        // 分号
        "semi": "off",
        "no-console":"warn"
    }
}