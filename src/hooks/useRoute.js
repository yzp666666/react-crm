import { Route } from 'react-router-dom'
//获取动态路由的方法  hook
export default function useRoute(assessRoute){
    let res = [];
    assessRoute.forEach(route => {
        if (route.path && route.element) {
            res.push(
                <Route key={route.key} path={route.path} element={route.element}></Route>
            )
        }
        if (route.children) {
            route.children.forEach(ele => {
                res.push(
                    <Route key={ele.key} path={ele.path} element={ele.element}></Route>
                )
            })
        }

    })
    return res
}