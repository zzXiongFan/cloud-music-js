import React from 'react';
// 重定向 DOM
import { Redirect } from 'react-router-dom';
// 导入配置类型
// import { RouteConfig } from 'react-router-config';
// 导入组件
import Home from '../application/Home';
import Recommend from '../application/Recommend';
import Singers from '../application/Singers';
import Rank from '../application/Rank';

const routeConfig = [
  {
    path: "/",
    component: Home,
    // 二级路由
    routes: [
      {
        path: "/",
        exact: true,
        render: () => <Redirect to={"/recommend"} />
        
      },
      {
        path: "/recommend",
        component: Recommend
      },
      {
        path: "/singers",
        component: Singers
      },
      {
        path: "/rank",
        component: Rank
      }
    ]
  }
]

export default routeConfig;
