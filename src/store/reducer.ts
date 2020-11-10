import { combineReducers } from 'redux-immutable';
import { Collection } from 'immutable';
import { reducer as recommendReducer, IRecommendState } from '../application/Recommend/store/index';
import { reducer as singgerReducer, ISingersState} from '../application/Singers/store/index';

let rootReducer = combineReducers ({
  recommend: recommendReducer,
  singers: singgerReducer,
});

export default rootReducer;

type IState = IRecommendState | ISingersState;

export interface AppState extends Collection<string, IState> {
  recommend: IRecommendState,
  singers: ISingersState,
};