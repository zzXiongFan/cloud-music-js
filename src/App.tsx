import React from 'react';
// 引入全局样式
import { GlobalStyle } from './style';
import { IconStyle }  from './assets/iconfont/iconfont';
// 路由注册
import { renderRoutes, RouteConfig }  from 'react-router-config';
import { HashRouter } from 'react-router-dom';
import route from './routes/index';
// 引入 dedux 
import store from './store/index';
import { Provider } from 'react-redux';


const App: React.FC<{}> = () => {
  return (
    <Provider store = {store}>
      <HashRouter>
        <GlobalStyle />
        <IconStyle />
        {/* 此处类型判断有点问题：TODO：解决 router 类型化的问题 */}
        { renderRoutes(route as RouteConfig[]) }
      </HashRouter>
    </Provider>
  )
}

export default App;
