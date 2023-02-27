import './style/style.scss'
import PropTypes, { func } from 'prop-types'
import React, { useState } from 'react'

// 按钮组件
function Button(props) {
    let { children, type, onClick } = props
    return (
        <div className='ml-button' onClick={onClick}>
            <span className={type}>{children}</span>
        </div>
    )
}

Button.propTypes = {
    children: PropTypes.node,
    type: PropTypes.string,
    onClick: PropTypes.func,
}

Button.defaultProps = {
    children: '按钮',
    type: 'default',
    onClick: () => { },
}

//弹框组件的拆分

function MadalHeader(props) {
    let {close,title } = props;
    return (
        <div>
            <div>{title}</div>
            <div style={{ color: 'red' }}>{close && 'X'}</div>
        </div>
    )
}

function MadalFooter(props) {
    let {footer,onOk,onCancel,type} = props;
    // 渲染函数
    let renderFoot = () => {
        let btn = []
        switch (type) {
            case 'confirm':
                btn = [
                    <Button key='1' type='info' onClick={onOk}>确认</Button>,
                    <Button key='2' onClick={onCancel}>取消</Button>
                ]
                break;
            case 'danger':
                btn = [
                    <Button key='1' type='danger' onClick={onOk}>删除</Button>,
                    <Button key='2' onClick={onCancel}>取消</Button>
                ]
                break;
            case 'info':
                btn = [
                    <Button key='1' type='primary' onClick={onOk}>确认</Button>,
                    <Button key='2' onClick={onCancel}>取消</Button>
                ]
                break;
        }
        return btn
    }
    return (
        footer ? footer() : renderFoot()
    )
}



// 弹框组件
function Madal(props) {
    let {children,visiable, width,onCancel } = props;
    let handleClick=(e)=>{
        // 说明点到遮罩层外面了
        if(e.target.dataset.self){
            onCancel()
        }
    }
    return (
        <div
            className='ml-layer'
            data-self='layer'
            style={{ display: visiable ? 'block' : 'none' }}
            onClick={handleClick}
        >
            <div
                className='ml-modal'
                style={{ width: `${width}px`, marginLeft: `-${width / 2}px` }}
            >
                <header>
                    <MadalHeader {...props}/>
                </header>
                <main>
                    {children}
                </main>
                <footer>
                    <MadalFooter {...props}/>
                </footer>
            </div>
        </div>
    )
}
// 封装组件时，我们需要给组件传递非常多的数据，此时，需要对数据进行校验，需要使用一个第三方包，叫prop-types
Madal.propTypes = {
    title: PropTypes.node,
    close: PropTypes.bool,
    children: PropTypes.node,
    type: PropTypes.oneOf(['confirm', 'danger', 'info']),
    visiable: PropTypes.bool,
    onCancel: PropTypes.func,
    onOk: PropTypes.func,
    footer: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
}

Madal.defaultProps = {
    title: '默认标题',
    close: true,
    children: <div>默认内容</div>,
    type: 'info',
    visiable: false,
    onCancel: () => { },
    onOk: () => { },
    footer: false,
    width: 520
}



function PageA() {
    //控制弹框显隐
    let [visiable, setVisiable] = useState(false)
    // 点击提交
    let submit = () => {
        setTimeout(() => {
            console.log('发请求了');
            setVisiable(false)
        }, 100)
    }
    return (
        <div>
            <button onClick={() => setVisiable(true)}>open modal</button>
            {/* 弹框组件 */}
            <Madal
                title={<span style={{ color: 'red' }}>删除用户</span>}
                close={true}
                type='confirm'
                visiable={visiable}
                onCancel={() => setVisiable(false)}
                onOk={submit}
                // 定制按钮组
                // footer={
                //     ()=>{
                //         return [
                //             <Button type='info' key='1' onClick={submit}>确认</Button>,
                //             <Button type='danger' key='2' onClick={()=>setVisiable(false)}>残忍离开</Button>
                //         ]
                //     }
                // }
                width={650}
            >
                <div>
                    <input type="text" />
                    <div>你确定要添加此用户吗</div>
                </div>

            </Madal>
        </div>
    )
}





export default PageA