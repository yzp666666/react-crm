import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
} from '@ant-design/icons';
import {  Menu } from 'antd';

import logo1 from '@/assets/logo1.jpg'
import logo2 from '@/assets/logo2.jpg'

import {asyncRoutes} from '@/pages/index.jsx'

//动态获取侧边栏的hooks
import useCreateSider from '@/hooks/useCreateSider'

// 默认选中和展开Sider的hook 
import useMeau from '@/hooks/useMeau'

//收缩图标组件
const Toggle = ({value,onChange}) => {
    return (
        <>
            <div className='trigger' onClick={onChange}>
                {value ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </div>
        </>
    )
}

//图片组件
const Logo=({value})=>{
    return(
        <>
            <div className={`logo ${value?'small':''}`}>
                <img src={value?logo1:logo2} alt="" />
            </div>
        </>
    )
}


//Sider组件
export default (props) => {
    const [selectKey,openKey]=useMeau();
    return (
        <>
            <Logo {...props}/>
            <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={selectKey}
                defaultOpenKeys={openKey}
                items={useCreateSider(asyncRoutes)}
            />
            <Toggle {...props}/>
        </>
    )
}