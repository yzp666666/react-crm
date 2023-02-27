
import { Link } from 'react-router-dom';

function getItem(label,key,icon,children,path){
    return {
        label:path?<Link to={path}>{label}</Link>:label,
        key,
        icon,
        children,
      }
}

// 动态获取侧边导航的方法
export default function useCreateSider(asyncRoutes){
    let res=[];
    asyncRoutes.forEach(route=>{
        if(!route.hidden){
            //route的hidden为false
            if(!route.children){
                //没有children
                res.push(
                    getItem(route.label,route.key,route.icon,null,route.path)
                )
            }else{
                res.push(
                    getItem(route.label,route.key,route.icon,useCreateSider(route.children),route.path)
                )
            }
        }
    })
    return res
}