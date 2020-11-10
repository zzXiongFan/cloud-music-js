import React, { useRef, useEffect } from 'react';
// 获取 mock 数据
import { categoryTypes, alphaTypes} from '../../api/config';
import Horizen from '../../baseUI/horizen-item';
import { 
  NavContainer,
  List,
  ListItem,
  ListContainer,
} from './style';
import {
  getSingerList,
  getHotSingerList,
  changeAlpha,
  changeCategory,
  changeEnterLoading,
  changePageCount,
  refreshMoreHotSingerList,
  refreshMoreSingerList,
  changePullUpLoading,
  changePullDownLoading
} from './store/actionCreators';
import { IStateJS } from './store/constants';
import Scroll from "../../baseUI/scroll";
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../../store/reducer';
// loading 界面
import Loading from '../../baseUI/loading';

function Singers() {
  
  const scrollRef = useRef(null);
  const dispatch = useDispatch();

  // 获取状态
  const { alpha, category, singerList, enterLoading, pullUpLoading, pullDownLoading, pageCount } = useSelector<AppState, IStateJS>(state => ({
    alpha: state.getIn(['singers', 'alpha']),
    category: state.getIn(['singers', 'category']),
    singerList: state.getIn(['singers', 'singerList']),
    enterLoading: state.getIn(['singers', 'enterLoading']),
    pullUpLoading: state.getIn(['singers', 'pullUpLoading']),
    pullDownLoading: state.getIn(['singers', 'pullDownLoading']),
    pageCount: state.getIn(['singers', 'pageCount']),
  } as IStateJS));

  // 初始化时更新数据
  useEffect(() => {
    if(!singerList.toJS().length) {
      dispatch(getHotSingerList());
    }
  }, [])
  // 捕获类别选项
  const handleUpdateCategory = (newVal) => {
    if(category === newVal) return;
    dispatch(changeCategory(newVal));
    dispatch(getSingerList());
    (scrollRef.current as any).refresh();
  }

  // 捕获首字母选项
  const handleUpdateAlpha = (newVal) => {
    if(alpha === newVal) return;
    dispatch(changeAlpha(newVal));
    dispatch(getSingerList());
    (scrollRef.current as any).refresh();
  };

  const handlePullUp = () => {
    dispatch(changePullUpLoading(true));
    dispatch(changePageCount(pageCount +1));
    if(category === '' && alpha === '') dispatch(refreshMoreHotSingerList());
    else dispatch(refreshMoreSingerList());
  };

  const handlePullDown = () => {
    dispatch(changePullDownLoading(true));
    dispatch(changePageCount(0));
    if(category === '' && alpha === '') dispatch(getHotSingerList());
    else dispatch(getSingerList());
  };

  const renderSingerList = () => {
    return (
      <List>
        {
          singerList.toJS().map((item, index) => (
            <ListItem 
             key={item.accountId +'' + index}
            >
              <div className="img-wrapper">
                <img src={`${item.picUrl}?param=300x300`} width="100%" height="100%" alt="music"/>
              </div>
              <span className='name'>{item.name}</span>
            </ListItem>
          ))
        }
      </List>
    )
  }

  return (
    <div>
      <NavContainer>
        <Horizen list={categoryTypes} title={"分类(默认热门):"} oldVal={category} handleClick={handleUpdateCategory}></Horizen>
        <Horizen list={alphaTypes} title={"首字母"} oldVal={alpha} handleClick={handleUpdateAlpha}></Horizen>
      </NavContainer>
      <ListContainer>
        <Scroll 
         ref={scrollRef}
         pullUp={handlePullUp}
         pullDown={handlePullDown}
         pullUpLoading = {pullUpLoading}
         pullDownLoading = {pullDownLoading}
        >
          { renderSingerList() }
        </Scroll>
      </ListContainer>
      { enterLoading ? <Loading /> : null}
    </div>
  )
}

export default React.memo(Singers);
