import React, { useReducer, useContext} from 'react';
import { Record, fromJS } from 'immutable';

// 创建 Context 对象
interface ICategoryStateJS {
  category: string;
  alpha: string;
}

const defaultCtx: ICategoryStateJS = {
  category: '',
  alpha: ''
};



export const CategoryDataContext = React.createContext<{data: Record<ICategoryStateJS>, dispatch_1: any}>({data: fromJS(defaultCtx), dispatch_1: () => {}});

// 相当于之前的 constants
export const CHANGE_CATEGORY = 'singers/CHANGE_CATEGORY';
export const CHANGE_ALPHA = 'singers/CHANGE_ALPHA';

interface IAction {
  type: string;
  data: string
}

// interface ITest {
//   data: Record<ICategoryCtxJS>,
//   dispatch: any
// }

// reducer 函数
const reducer = (state: Record<ICategoryStateJS>, action: IAction) => {
  switch(action.type) {
    case CHANGE_CATEGORY: 
      return state.set('category', action.data);
    case CHANGE_ALPHA:
      return state.set('alpha', action.data);
    default:
      return state;
  }
};

export const Data = props => {
  const [data, dispatch] = useReducer(reducer, fromJS(defaultCtx));
  return (
    <CategoryDataContext.Provider value={{data, dispatch_1: dispatch}}>
      {props.children}
    </CategoryDataContext.Provider>
  )
}
