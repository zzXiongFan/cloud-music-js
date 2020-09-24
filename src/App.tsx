import React from 'react';
// 引入全局样式
import { GlobalStyle } from './style';
import { IconStyle }  from './assets/iconfont/iconfont';

function App() {
  return (
    <div>
      <GlobalStyle />
      <IconStyle />
      <span className="iconfont">&#xe8ef;</span>
    </div>
  )
}

export default App;
