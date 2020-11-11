import { fromJS } from 'immutable';
import { actionTypes, IRecommendState, IAction } from './constants';

// 设置默认值
const defaultState = fromJS({
  bannerList: [],
  recommendList: [],
  enterLoading: true,
})

export default (state: IRecommendState = defaultState, action: IAction): IRecommendState => {
  switch (action.type) {
    case actionTypes.CHANGE_BANNER:
      return state.set ('bannerList', action.data);
    case actionTypes.CHANGE_RECOMMEND_LIST:
      return state.set ('recommendList', action.data);
    case actionTypes.CHANGE_ENTER_LOADING:
      return state.set ('enterLoading', action.data);
    default:
      return state;
  }
}