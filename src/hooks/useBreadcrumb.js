

import { asyncRoutes } from '@/pages/index.jsx'
import {useLocation} from 'react-router-dom'



export default function useBreadcrumb(){
    const routes=[...asyncRoutes];
    const {pathname}=useLocation();
    console.log(pathname);

}