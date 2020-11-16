// 导入底层类型定义
import { IRankList } from '../index';
import { fromJS, Record, List } from 'immutable'; 
import { getRankListRequest } from '../../../api/request';
import { Dispatch } from 'redux';

export const actionsType = {
  CHANGE_RANK_LIST: 'home/rank/CHANGE_RANK_LIST',
  CHANGE_LOADING: 'home/rank/CHANGE_LOADING',
}

type IAction<T extends any = any> = {
  type: string;
  data: T
};
// Action 生成器
export const changeRankList = (data: IRankList[]): IAction<IRankList[]> => ({
  type: actionsType.CHANGE_RANK_LIST,
  data: fromJS(data)
});

export const changeLoading = (data: boolean): IAction<boolean> => ({
  type: actionsType.CHANGE_LOADING,
  data
});

export const getRankList = () => {
  return (dispatch: Dispatch) => {
    // 发送异步请求
    getRankListRequest().then(data => {
      let list = data.data.list;
      console.log('请求数据：', list);
      dispatch(changeRankList(list));
      dispatch(changeLoading(false));
    }).catch(() => {
      console.log('111热门歌手数据获取失败');
    })
  }
}

export type IRankStateJS = {
  rankList: List<IRankList[]>;
  enterLoading: boolean;
}

export type IRankState = Record<IRankStateJS>;

// 默认参数
const defaultState: IRankState = fromJS({
  rankList: [],
  enterLoading: true
});

// 定义 reducer 
export const reducer = (state: IRankState = defaultState, action: IAction) => {
  switch(action.type) {
    case actionsType.CHANGE_RANK_LIST:
      return state.set('rankList', action.data);
    case actionsType.CHANGE_LOADING:
      return state.set('enterLoading', action.data);
    default: 
      return state;
  }
}