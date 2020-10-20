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

export type IRoute = Array<IRoutePath>;
