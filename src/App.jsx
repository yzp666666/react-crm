import React from "react";
import Layout from '@/pages/layout'
import Login from '@/pages/login'
import { HashRouter, Routes, Route} from 'react-router-dom'


import { asyncRoutes } from '@/pages/index.jsx'
// 生成动态二级路由的hook
import useRoute from "@/hooks/useRoute";

function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/"  element={<Layout />}>
                    {/* 二级路由 */}
                    {useRoute(asyncRoutes)}
                </Route>
                <Route path="/login" element={<Login />}></Route>
            </Routes>
        </HashRouter>
    )
}


export default App;