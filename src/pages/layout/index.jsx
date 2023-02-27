
import { Layout } from 'antd';
import React, { useState } from 'react';
import './style/style.scss'

// 二级路由出口
import {Outlet} from 'react-router-dom'


//引入组件
import MlSider from './MlSider';
import MlHeader from './MlHeader'


const { Header, Sider, Content } = Layout;






export default () => {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <div className='my-layout'>
            <Layout>
                <Sider trigger={null} collapsible collapsed={collapsed}>
                    {/* 侧边栏 */}
                   <MlSider value={collapsed} onChange={() => setCollapsed(!collapsed)}/>
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{ padding: 0 }}>
                        {/* {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: 'trigger',
                            onClick: () => setCollapsed(!collapsed),
                        })} */}
                        {/* 面包屑 */}
                        <MlHeader/>
                    </Header>
                    <Content
                        className="site-layout-background"
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: 280,
                        }}
                    >
                        {/* 二级路由出口 */}
                        <Outlet/>
                    </Content>
                </Layout>
            </Layout>
        </div>
    )
}