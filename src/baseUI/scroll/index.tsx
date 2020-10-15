import React, { forwardRef, useRef, useState, useEffect, useImperativeHandle } from 'react';
import BScroll from 'better-scroll';
import styled from 'styled-components';
// import PropTypes from 'prop-types';

// 创建 styled component
const ScrollContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`

// 关联类型
interface IProps {
  direction?: 'vertical' | 'horizental';
  click?: boolean;
  refresh?: boolean,// 是否刷新
  onScroll?: any,// 滑动触发的回调函数
  pullUp?: any,// 上拉加载逻辑
  pullDown?: any,// 下拉加载逻辑
  pullUpLoading?: boolean,// 是否显示上拉 loading 动画
  pullDownLoading?: boolean,// 是否显示下拉 loading 动画
  bounceTop?: boolean,// 是否支持向上吸顶
  bounceBottom?: boolean,// 是否支持向下吸底
  children?: React.ReactNode, // 继承接口本身属性
}

export interface ScrollHandles {
  refresh: () => void;
  getBScroll: () => BScroll | undefined;
}

const defaultProps:IProps = {
  direction: "vertical",
  click: true,
  refresh: true,
  onScroll:null,
  pullUpLoading: false,
  pullDownLoading: false,
  pullUp: null,
  pullDown: null,
  bounceTop: true,
  bounceBottom: true
};

// 此处类型化的问题: 查看此处类型泛型实现方式
const Scroll = forwardRef<ScrollHandles, IProps>((props, ref) => {
  // 创建BS对象
  // console.log(props);
  const [bScroll, setBScroll] = useState<BScroll | null>();
  // 创建对应的ref
  const scrollContaninerRef = useRef<HTMLDivElement | null> (null);
  // 参数
  const { direction, click, refresh,  bounceTop, bounceBottom } = props;

  const { pullUp, pullDown, onScroll } = props;

  // 创建 BS 对象
  useEffect(() => {
    // 排除为空的情况
    // if(!scrollContaninerRef.current ) return;
    const scroll = new BScroll((scrollContaninerRef.current as HTMLDivElement), {
      scrollX: direction === "horizental",
      scrollY: direction === "vertical",
      probeType: 3,
      click: click,
      bounce:{
        top: bounceTop,
        bottom: bounceBottom
      },
    });
    // 绑定状态
    setBScroll(scroll);
    return () => {
      setBScroll(null);
    }
    //eslint-disable-next-line
  }, [])
  
  // 绑定各类方法
  useEffect(() => {
    if(!bScroll || !onscroll) return;
    bScroll.on ('scroll', (scroll: any) => {
      onScroll (scroll);
    })
    return () => {
      bScroll.off ('scroll');
    }
  }, [onScroll, bScroll]);

  useEffect (() => {
    if (!bScroll || !pullUp) return;
    bScroll.on ('scrollEnd', () => {
      // 判断是否滑动到了底部
      if (bScroll.y <= bScroll.maxScrollY + 100){
        pullUp ();
      }
    });
    return () => {
      bScroll.off ('scrollEnd');
    }
  }, [pullUp, bScroll]);

  useEffect (() => {
    if (!bScroll || !pullDown) return;
    bScroll.on ('touchEnd', (pos: { y: number; }) => {
      // 判断用户的下拉动作
      if (pos.y > 50) {
        pullDown ();
      }
    });
    return () => {
      bScroll.off ('touchEnd');
    }
  }, [pullDown, bScroll]);

  // 重新渲染时更新
  useEffect (() => {
    if (refresh && bScroll){
      bScroll.refresh ();
    }
  });

  useImperativeHandle (ref, () => ({
    refresh () {
      if (bScroll) {
        bScroll.refresh ();
        bScroll.scrollTo (0, 0);
      }
    },
    getBScroll () {
      if (bScroll) {
        return bScroll;
      }
    }
  }));
  
  return (
    <ScrollContainer ref={scrollContaninerRef}>
      {props.children}
    </ScrollContainer>
  );
})

// 函数组件设置默认参数
Scroll.defaultProps = defaultProps;

export default Scroll;
