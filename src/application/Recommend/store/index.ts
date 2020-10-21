//index.js
import reducer from './reducer'
import * as actionCreators from './actionCreators'
import { IRecommendState as IRecommendState_ } from './constants';

export { reducer, actionCreators };
export type IRecommendState = IRecommendState_;