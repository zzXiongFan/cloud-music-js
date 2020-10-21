import { combineReducers } from 'redux-immutable';
import { Collection } from 'immutable';
import { reducer as recommendReducer, IRecommendState } from '../application/Recommend/store/index';

let rootReducer = combineReducers ({
  recommend: recommendReducer,
});

export default rootReducer;

type IState = IRecommendState;

export interface AppState extends Collection<string, IState> {
  recommend: IRecommendState
};