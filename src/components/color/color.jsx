// 上下文
import React, { useState, PureComponent,useContext} from 'react'

const ThemeContext = React.createContext();
const { Provider, Consumer } = ThemeContext


function Child(){
    const ctx=useContext(ThemeContext)
    return (
            <div style={ctx}>
                <h3>我是孩子组件</h3>
            </div>
        )
}



function Color() {
    let [theme, setTheme] = useState({ color: "#000000", background: "#ffffff" });
    let change = (key, e) => {
        setTheme({ ...theme, [key]: e.target.value })
    }
    return (
        <Provider value={theme}>
            <div>
                <Child />
                <hr />
                前景色: <input type="color" value={theme.color} onChange={(e) => change('color', e)} />
                背景色: <input type="color" value={theme.background} onChange={(e) => change('background', e)} />
            </div>
        </Provider>
    )
}


export default Color