
import { asyncRoutes } from '@/pages/index.jsx'
import {useLocation} from 'react-router-dom'
import {useMemo} from 'react'

export default function useMeau(){
    let selectedKey='';
    let openKey='';
    //路由跳转  当前路由的path
    let {pathname}=useLocation();
    useMemo(()=>{
        asyncRoutes.forEach(route=>{
            if(!route.children){
                //没有children
                if(route.path==pathname){
                    selectedKey=route.key+'';
                }
            }else{
                route.children.forEach(ele=>{
                    if(ele.path==pathname){
                        selectedKey=ele.key+'';
                    }
                    openKey=route.key+'' //有chilren 的openKey
                })
            }
        })
    },[pathname])
    return [[selectedKey],[openKey]]
}   