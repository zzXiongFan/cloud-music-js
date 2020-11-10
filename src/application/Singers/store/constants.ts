import { List, Record } from 'immutable';

export const actionTypes = {
  CHANGE_CATOGORY: 'home/singers/CHANGE_CATEGORY',
  CHANGE_ALPHA: 'home/singers/CHANGE_ALPHA',
  CHANGE_SINGER_LIST : 'singers/CHANGE_SINGER_LIST',
  CHANGE_PAGE_COUNT : 'singers/PAGE_COUNT',
  CHANGE_ENTER_LOADING : 'singers/ENTER_LOADING',
  CHANGE_PULLUP_LOADING : 'singers/PULLUP_LOADING',
  CHANGE_PULLDOWN_LOADING : 'singers/PULLDOWN_LOADING',
}

// export const CHANGE_SINGER_LIST = 'singers/CHANGE_SINGER_LIST';
// export const CHANGE_PAGE_COUNT = 'singers/PAGE_COUNT';
// export const CHANGE_ENTER_LOADING = 'singers/ENTER_LOADING';
// export const CHANGE_PULLUP_LOADING = 'singers/PULLUP_LOADING';
// export const CHANGE_PULLDOWN_LOADING = 'singers/PULLDOWN_LOADING';

// 本页面状态
export interface ISinger {
  picUrl: string,
  name: string,
  accountId: Number,
}

export interface IStateJS {
  alpha: string,
  category: string,
  singerList: List<ISinger>,
  enterLoading: boolean,
  pullUpLoading: boolean,
  pullDownLoading: boolean,
  pageCount: number,
  listOffset: number,
}

export interface IAction<T extends unknown = any> {
  type: string,
  data: T
}

export type IState = Record<IStateJS>;
