import React from 'react';
import { 
  ListWrapper,
  List,
  ListItem
} from './style';
import { IRecommend } from '../../common';
import { getCount } from "../../api/utils";

interface IProps {
  recommendList: Array<IRecommend>;
}

function RecommendList({recommendList}: IProps) {

  return (
    <ListWrapper>
      <h1 className="title"> 推荐歌单 </h1>
      <List>
        {
          recommendList.map((item, index) => {
            return (
              <ListItem key={index}>
                <div className="img_wrapper">
                  <div className="decorate"></div>
                  <img src={item.picUrl + "?param=300x300"} alt=""/>
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