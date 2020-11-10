// 横向组件为一通用组件
import styled from 'styled-components';
import Scroll from '../scroll';
import React, { useRef, useEffect } from 'react';
import style from '../../assets/global-style';

const List = styled.div`
  display: flex;
  align-items: center;
  height: 30px;
  overflow: hidden;
  /* 为标题 span 设置样式 */
  >span:first-of-type {
    display: block;
    flex: 0 0 auto;
    padding: 5px 0px;
    margin-right: 5px;
    font-size: ${style["font-size-m"]};
    color: gray;
    /* vertical-align: middle; */
  }
`
const ListItem = styled.span`
  flex: 0 0 auto;
  font-size: ${style["font-size-m"]};
  padding: 5px 5px;
  border-radius: 10px;
  &.selected {
    color: ${style["theme-color"]};
    border: 1px solid ${style["theme-color"]};
    opacity: 0.8;
  }
`

interface IListItem {
  name: string,
  key: string,
}

interface IProps {
  list: Array<IListItem>,
  oldVal: string,
  title: string,
  handleClick: (params: string) => void;
}

function Horizen (props: IProps) {
  // 使用 ref 设置组件宽度
  const Category = useRef<HTMLDivElement>(null);
  // 获取参数
  const { list, oldVal, title } = props;
  const { handleClick } = props;

  useEffect(() => {
    let catagoryDom = Category.current;
    if(!catagoryDom) return;
    let tagElems = catagoryDom.querySelectorAll('span') as NodeListOf<HTMLSpanElement>;
    let totalWidth = 0;
    Array.from(tagElems).forEach(elem => totalWidth += elem.offsetWidth);
    catagoryDom.style.width = `${totalWidth}px`;
  }, [])

  return (
    <Scroll direction={"horizental"}>
      <div ref={Category}>
        <List>
          <span>{title}</span>
          {
            list.map(item => (
              <ListItem 
                key={item.key} 
                className={oldVal === item.key ? 'selected' : ''}
                onClick={() => handleClick(item.key)}>
                  {item.name}
              </ListItem>
            ))
          }
        </List>
      </div>
    </Scroll>
  )
}

// 首先考虑接受的参数
//list 为接受的列表数据
//oldVal 为当前的 item 值
//title 为列表左边的标题
//handleClick 为点击不同的 item 执行的方法
Horizen.defaultProps = {
  list: [],
  oldVal: '',
  title: '',
  handleClick: null
};

export default React.memo(Horizen);
