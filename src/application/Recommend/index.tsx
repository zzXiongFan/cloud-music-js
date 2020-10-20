import React, { useEffect } from 'react';
import Slider, { IBanner } from '../../components/slider';
import RecommendList, { IRecommend } from '../../components/recommendList';
import { Content } from './style';
import Scroll from '../../baseUI/scroll';
// 设置组件间的关联
import { connect } from "react-redux";
import * as actionTypes from './store/actionCreators';
import { List } from 'immutable';

interface IProps {
  bannerList: List<IBanner>,
  recommendList: List<IRecommend>,
  enterLoading: boolean,
  getBannerDataDispatch: () => void,
  getRecommendListDataDispatch: () => void;
}

function Recommend(props: IProps) {
  const { bannerList, recommendList, enterLoading } = props;

  const { getBannerDataDispatch, getRecommendListDataDispatch } = props;

  const bannerListJS = bannerList ? bannerList.toJS () : [];
  const recommendListJS = recommendList ? recommendList.toJS () :[];

  useEffect (() => {
    getBannerDataDispatch ();
    getRecommendListDataDispatch ();
    //eslint-disable-next-line
  }, []);

  // @ts-ignore
  return (
    <Content>
      <Scroll>
        <div> 
          <Slider bannerList={bannerListJS} />
          <RecommendList recommendList={recommendListJS} />
        </div>
      </Scroll>
    </Content>
  )
}

// 映射 Redux 全局的 state 到组件的 props 上
const mapStateToProps = (state: any) => ({
  // 不要在这里将数据 toJS
  // 不然每次 diff 比对 props 的时候都是不一样的引用，还是导致不必要的重渲染，属于滥用 immutable
  // 使用普通的数据类型如何写?
  bannerList: state.getIn (['recommend', 'bannerList']),
  recommendList: state.getIn (['recommend', 'recommendList']),
  enterLoading: state.getIn (['recommend', 'enterLoading']),
});
// 映射 dispatch 到 props 上
// 此处 dispatch 的用法？
const mapDispatchToProps = (dispatch) => {
  return {
    getBannerDataDispatch () {
      dispatch (actionTypes.getBannerList ());
    },
    getRecommendListDataDispatch () {
      dispatch (actionTypes.getRecommendList ());
    },
  }
};

// 将 ui 组件包装成容器组件
// 使用 useSelect？
export default connect (mapStateToProps, mapDispatchToProps)(React.memo (Recommend));
