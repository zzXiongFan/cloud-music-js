import { fromJS } from 'immutable';
import {actionTypes, IAction, IState } from './constants';



// 默认参数
const defaultState: IState = fromJS({
  alpha: '',
  category: '',
  singerList: [],
  enterLoading: true,     //控制进场Loading
  pullUpLoading: false,   //控制上拉加载动画
  pullDownLoading: false, //控制下拉加载动画
  pageCount: 0,           //这里是当前页数，我们即将实现分页功能
  listOffset: 0,          // 请求列表的偏移不是page，是个数
})



export default (state: IState = defaultState, action: IAction) => {
  switch(action.type) {
    case actionTypes.CHANGE_ALPHA: 
      return state.merge({
        'alpha': action.data,
        enterLoading: true,
        listOffset: 0,
      });
    case actionTypes.CHANGE_CATOGORY:
      return state.merge({
        'category': action.data,
        listOffset: 0,
        enterLoading: true
      });;
    case actionTypes.CHANGE_SINGER_LIST:
      return state.set('singerList', action.data);
    case actionTypes.CHANGE_PAGE_COUNT:
      return state.set('pageCount', action.data);
    case actionTypes.CHANGE_ENTER_LOADING:
      return state.set('enterLoading', action.data);
    case actionTypes.CHANGE_PULLUP_LOADING:
      return state.set('pullUpLoading', action.data);
    case actionTypes.CHANGE_PULLDOWN_LOADING:
      return state.set('pullDownLoading', action.data);
    default:
      return state;
  }
}
