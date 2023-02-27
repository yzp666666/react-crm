const bulid=require('./config/bulid')
const config=require('./config/config')
const serve=require('./config/serve')

const {merge}=require('webpack-merge')

//npm run serve                        npm run bulid
//开发环境 config+serve.js 文件生效    生产环境 config+bulid.js文件生效 

module.exports=function ({development}){
    // development为true就是开发环境
    return merge(config,development?serve:bulid)
}