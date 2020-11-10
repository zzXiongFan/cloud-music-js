import React, { useEffect } from 'react';
import Slider from '../../components/slider';
import RecommendList from '../../components/recommendList';
import { Content } from './style';
import Scroll from '../../baseUI/scroll';
// 设置组件间的关联
import { useSelector, useDispatch } from "react-redux";
import * as actionTypes from './store/actionCreators';
import { IRecommendState } from './store/constants';
import { AppState } from '../../store/reducer';
// 设置懒加载
import { forceCheck } from 'react-lazyload';
// 加入加载页面
import Loading from '../../baseUI/loading';

function Recommend() {
  // 获取状态参数: 此处类型判断有问题
  const { bannerList, recommendList, enterLoading } = useSelector<AppState, IRecommendState>((state) => ({
    bannerList: state.getIn (['recommend', 'bannerList']),
    recommendList: state.getIn (['recommend', 'recommendList']),
    enterLoading: state.getIn (['recommend', 'enterLoading']),
  } as IRecommendState));

  // 获取 dispatch
  const dispatch = useDispatch();

  const bannerListJS = bannerList ? bannerList.toJS () : [];
  const recommendListJS = recommendList ? recommendList.toJS () :[];

  // console.log(bannerList, bannerListJS);

  useEffect (() => {
    dispatch( actionTypes.getBannerList() );
    dispatch( actionTypes.getRecommendList() );
    //eslint-disable-next-line
  }, []);

  // @ts-ignore
  return (
    <Content>
      {enterLoading ? <Loading /> : null}
      <Scroll onScroll={forceCheck}>
        <div> 
          <Slider bannerList={bannerListJS} />
          <RecommendList recommendList={recommendListJS} />
        </div>
      </Scroll>
    </Content>
  )
}

export default React.memo (Recommend);
