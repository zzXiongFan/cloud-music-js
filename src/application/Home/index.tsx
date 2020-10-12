import React from 'react';
import { renderRoutes, RouteConfig } from 'react-router-config';
import { NavLink } from 'react-router-dom';
// 引入参数类型
// import { IRoutePath } from '../../common'; // 直接使用package类型

// 引入 styled DIV
import { Top, Tab, TableItem } from './style';

interface IProps {
  route: RouteConfig
};

const Home: React.FC<IProps> = (props) => {
  const { route } = props;
  return (
    <div>
      <Top>
        <span className="iconfont menu">&#xe65c;</span>
        <span className="iconfont menu">Web App</span>
        <span className="iconfont search">&#xe62b;</span>
      </Top>
      <Tab>
        <NavLink to="/recommend" activeClassName="selected"><TableItem><span>推荐</span></TableItem></NavLink>
        <NavLink to="/singers" activeClassName="selected"><TableItem><span>歌手</span></TableItem></NavLink>
        <NavLink to="/rank" activeClassName="selected"><TableItem><span>排行榜</span></TableItem></NavLink>
      </Tab>
      { renderRoutes(route.routes) }
    </div>
  )
}

export default Home;
