// 从根组件导入类型定义 
import { List } from 'immutable';

export const CHANGE_BANNER = 'recommend/CHANGE_BANNER';

export const CHANGE_RECOMMEND_LIST = 'recommend/RECOMMEND_LIST';

export const CHANGE_ENTER_LOADING = 'recommend/CHANGE_ENTER_LOADING';


// 内部类型定义
export interface IBanner {
  imageUrl: string
}

export interface IRecommend {
  id: number;
  picUrl: string;
  playCount: number;
  name: string;
}

export interface IRecommendState extends Map<string, any> {
  bannerList: List<IBanner>,
  recommendList: List<IRecommend>,
  enterLoading: boolean,
}

export interface IAction {
  type: string,
  data: any
}