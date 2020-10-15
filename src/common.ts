import { type } from 'os';
// 类型定义
import React from 'react';
export interface IRoutePath {
  path: string;
  component?: React.FunctionComponent;
  exact?: boolean;
  render?: () => React.Component;
  routes?: Array<IRoutePath>
};

export interface IBanner {
  imageUrl: string
}

export interface IRecommend {
  id: number;
  picUrl: string;
  playCount: number;
  name: string;
}

export type IRoute = Array<IRoutePath>;
