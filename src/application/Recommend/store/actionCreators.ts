import * as actionTypes from './constants';
// 导入 immutable 数据操作API
import { fromJS } from 'immutable';
import { getBannerRequest, getRecommendListRequest } from '../../../api/request';
// 导入类型定义文件
import { IBanner, IRecommend} from '../store/constants';
// 引入 dispatch 定义类型
import { Dispatch } from 'redux';

export const changeBannerList = (data: IBanner[]) => ({
  type: actionTypes.CHANGE_BANNER,
  data: fromJS (data)
});

export const changeRecommendList = (data: IRecommend[]) => ({
  type: actionTypes.CHANGE_RECOMMEND_LIST,
  data: fromJS (data)
});

export const changeEnterLoading = (data: boolean) => ({
  type: actionTypes.CHANGE_ENTER_LOADING,
  data
});

// 注意此处触发 异步请求与 dispatch 的步骤
export const getBannerList = () => {
  // 此处的类型问题?
  return (dispatch: Dispatch) => {
    getBannerRequest ().then (res => {
      dispatch (changeBannerList (res.data.banners));
    }).catch (() => {
      console.log ("轮播图数据传输错误");
    }) 
  }
};

export const getRecommendList = () => {
  return (dispatch: Dispatch) => {
    getRecommendListRequest ().then (res => {
      dispatch (changeRecommendList (res.data.result));
      dispatch (changeEnterLoading (false));// 改变 loading
    }).catch (() => {
      console.log ("推荐歌单数据传输错误");
    });
  }
};