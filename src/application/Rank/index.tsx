import React, { useEffect, useMemo } from 'react';
import { ListItem, Container, ListContainer } from './style';
import Scroll from '../../baseUI/scroll';
import { useSelector, useDispatch } from 'react-redux';
import { IRankStateJS, getRankList } from './store';
import { AppState } from '../../store/reducer';

interface ITrack {
  first: string;
  second: string
}

export interface IRankList {
  tracks: ITrack[];
  updateFrequency: string;
  coverImgUrl: string;
}

const OfficalList = (props: {rankList: IRankList[], title: string}) => {
  const { rankList, title } = props;
  return (
    <Container>
      <h1>{title}</h1>
      <ul>
        { rankList.map((item, index) => (
          <ListItem key={index} global={item.tracks.length === 0}>
            <div className='image-wrapper'>
              <img src={item.coverImgUrl} alt="coverImg"/>
              <div className="decorate"></div>
              <span className="update-frequency">{item.updateFrequency}</span>
            </div>
            { item.tracks.length > 0 ? renderSongList(item.tracks) : null}
          </ListItem>
        )) }
      </ul>
    </Container>
    
  )
}

const renderSongList = (lists: ITrack[]) => {
  return (
    <ul>
      { lists.map((item, index) => (
        <li key={index}>{index+1}. {item.first} - {item.second}</li>
      )) }
    </ul>
  )
}

function Rank() {
  // 获取参数
  let { rankList, enterLoading} = useSelector<AppState, IRankStateJS>(state => ({
    rankList: state.getIn(['rank', 'rankList']),
    enterLoading: state.getIn(['rank', 'enterLoading'])
  } as IRankStateJS));
  
  let rankListJS = rankList.toJS();

  let [ officalList, globalList ] = useMemo(() => {
    // 找到失效的indexs
    let index = 0;
    rankListJS.every(item => {
      index += 1;
      return item.tracks.length > 0;
    })
    return [ rankListJS.slice(0, index-1), rankListJS.slice(index-1)];
  }, [rankListJS])

  let dispatch = useDispatch();
  
  // 初始化更新
  useEffect(() => {
    console.log(rankListJS.length);
    if(rankListJS.length === 0) {
      dispatch(getRankList());
    }
  }, [])

  return (
    <ListContainer>
      <Scroll>
        <div>
          <OfficalList rankList={officalList} title="官方榜"></OfficalList>
          <OfficalList rankList={globalList} title="全球榜"></OfficalList>
        </div>
      </Scroll>
    </ListContainer>
    
  )
}

export default Rank;
