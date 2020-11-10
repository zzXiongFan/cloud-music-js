import {
  getHotSingerListRequest,
  getSingerListRequest
} from '../../../api/request';
import {
  actionTypes,
  ISinger,
  IAction,
  IState
} from './constants';
import {
  fromJS, Record
} from 'immutable';
// 类型化
import { Dispatch } from 'redux';
// import { IState } from './reducer';
// import { type } from 'os';

// TODO: 完善参数Type

export const changeCategory = (data: string): IAction<string> => ({
  type: actionTypes.CHANGE_CATOGORY,
  data
});

export const changeAlpha = (data: string): IAction<string> => ({
  type: actionTypes.CHANGE_ALPHA,
  data
});

export const changeSingerList = (data: ISinger[]):IAction<Record<ISinger[]>> => ({
  type: actionTypes.CHANGE_SINGER_LIST,
  data: fromJS(data)
})

export const changePageCount = (data: Number):IAction<Number> => ({
  type: actionTypes.CHANGE_PAGE_COUNT,
  data
});

//进场loading
export const changeEnterLoading = (data: Boolean): IAction<Boolean> => ({
  type: actionTypes.CHANGE_ENTER_LOADING,
  data
});

//滑动最底部loading
export const changePullUpLoading = (data: Boolean): IAction<Boolean> => ({
  type: actionTypes.CHANGE_PULLUP_LOADING,
  data
});

//顶部下拉刷新loading
export const changePullDownLoading = (data: Boolean): IAction<Boolean> => ({
  type: actionTypes.CHANGE_PULLDOWN_LOADING,
  data
});

// 第一次加载热门歌手
export const getHotSingerList = () => {
  return (dispatch: Dispatch) => {
    // 首先请求参数
    getHotSingerListRequest(0).then(res => {
      // 获取全部的参数
      const data = res.data.artists;
      dispatch(changeSingerList(data));
      dispatch(changeEnterLoading(false));
      dispatch(changePullDownLoading(false));
    }).catch(() => {
      console.log('热门歌手数据获取失败');
    })
  }
}


type IGetState = () => IState
//加载更多热门歌手
export const refreshMoreHotSingerList = () => {
  return (dispatch: Dispatch, getState: IGetState) => {
    const pageCount = getState().getIn(['singers', 'pageCount']);
    const singerList = getState().getIn(['singers', 'singerList']).toJS();
    getHotSingerListRequest(pageCount).then(res => {
      const data = [...singerList, ...res.data.artists];
      dispatch(changeSingerList(data));
      dispatch(changePullUpLoading(false));
    }).catch(() => {
      console.log('热门歌手数据获取失败');
    });
  }
};

// 第一次加载对应类别的歌手
export const getSingerList = () => {
  return (dispatch: Dispatch, getState: IGetState) => {
    // 请求数据
    const offset = getState().getIn(['singers', 'listOffset']);
    const category = getState().getIn(['singers', 'category']);
    const alpha = getState().getIn(['singers', 'alpha']);
    // console.log(category);
    getSingerListRequest(category, alpha, 0).then(res => {
      // dispatch datas
      const data = res.data.artists;
      // console.log(data);
      dispatch(changeSingerList(data));
      dispatch(changeEnterLoading(false));
      dispatch(changePullDownLoading(false));
    }).catch(() => {
      console.log('歌手数据获取失败');
    })
  }
}

// 加载更多歌手
export const refreshMoreSingerList = () => {
  return (dispatch: Dispatch, getState: IGetState) => {
    // 获取当前的数据列表
    const category = getState().getIn(['singers', 'category']);
    const alpha = getState().getIn(['singers', 'alpha']);
    const pageCount = getState().getIn(['singers', 'pageCount']);
    const singerList = getState().getIn(['singers', 'singerList']).toJS();
    // 发出异步数据请求
    getSingerListRequest(category, alpha, pageCount).then(res => {
      const data = [...singerList, res.data.artists];
      dispatch(changeSingerList(data));
      dispatch(changePullUpLoading(false));
    }).catch(() => {
      console.log('歌手数据获取失败');
    });
  }
}