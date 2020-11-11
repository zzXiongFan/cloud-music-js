//index.js
import reducer from './reducer'
import * as actionCreators from './actionCreators'
import { IRecommendState as IRecommendState_, IRecommendStateJS as IRecommendStateJS_ } from './constants';

export { reducer, actionCreators };
export type IRecommendState = IRecommendState_;
export type IRecommendStateJS = IRecommendStateJS_;