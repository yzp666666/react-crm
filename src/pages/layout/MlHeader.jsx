
import { Breadcrumb } from 'antd';
import useBreadcrumb from '@/hooks/useBreadcrumb'



export default () => {
    useBreadcrumb()
    return (
        <div className='my-header'>
            <div className='bread'>
                <Breadcrumb>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <a href="">Application Center</a>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <a href="">Application List</a>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>An Application</Breadcrumb.Item>
                </Breadcrumb>
            </div>
        </div>
    )
}