// 从根组件导入类型定义 
import { List, Record } from 'immutable';
// 导入组件类型
import { ICRecommend as ICRecommend_ } from '../../../components/recommendList';
import { ICBanner as ICBanner_ } from '../../../components/slider';

export const actionTypes = {
  CHANGE_BANNER: 'recommend/CHANGE_BANNER',
  CHANGE_RECOMMEND_LIST: 'recommend/RECOMMEND_LIST',
  CHANGE_ENTER_LOADING: 'recommend/CHANGE_ENTER_LOADING',
}

// 类型导出
export type ICRecommend = ICRecommend_;
export type ICBanner = ICBanner_;

export interface IRecommendStateJS {
  bannerList: List<ICRecommend>,
  recommendList: List<ICRecommend>,
  enterLoading: boolean,
}

export type IRecommendState = Record<IRecommendStateJS>;

export interface IAction<T extends unknown = any>{
  type: string,
  data: T
}