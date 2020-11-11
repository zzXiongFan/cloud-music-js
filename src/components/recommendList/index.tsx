import React from 'react';
import { 
  ListWrapper,
  List,
  ListItem
} from './style';
import { getCount } from "../../api/utils";
import { } from 'immutable';
// 加入懒加载
import LazyLoad from 'react-lazyload'
// 引入顶级 api 类型
import { Pick, IPersonalized} from '../../api/constants';

export type ICRecommend = Pick<IPersonalized, 'id' | 'picUrl' | 'playCount' | 'name'>;

interface IProps {
  recommendList: Array<ICRecommend>;
}

function RecommendList({recommendList}: IProps) {
  // console.log(recommendList);
  return (
    <ListWrapper>
      <h1 className="title"> 推荐歌单 </h1>
      <List>
        {
          recommendList.map((item, index) => {
            // console.log(item);
            return (
              <ListItem key={index}>
                <div className="img_wrapper">
                  <div className="decorate"></div>
                  <LazyLoad placeholder={<img width="100%" height="100%" src={require ('./music.png')} alt="music"/>}>
                    <img src={item.picUrl + "?param=300x300"} width="100%" height="100%" alt="music"/>
                  </LazyLoad>
                  <div className="play_count">
                    <i className="iconfont play">&#xe885;</i>
                    <span className="count">{getCount(item.playCount)}</span>
                  </div>
                </div>
                <div className="desc">{item.name}</div>
              </ListItem>
            )
          })
        }
      </List>
    </ListWrapper>
  )
}

export default React.memo(RecommendList);