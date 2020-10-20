import React, { useState, useEffect } from 'react';
import { SliderContainer } from './style';
import "swiper/dist/css/swiper.css";
import Swiper from 'swiper';

export interface IBanner {
  imageUrl: string
}

interface IProps {
  bannerList: Array<IBanner>
}

function Slider({bannerList}: IProps) {
  // 创建 Swiper 实例
  const [ slideSwiper, setSlideSwiper ] = useState<Swiper | null>(null);
  // 获取 bannerList 实例
  // const { bannerList } = props;
  useEffect(() => {
    // 当 有数据时 渲染列表
    if(!bannerList.length || slideSwiper) return;
    const newSliderSwiper = new Swiper(".slider-container", {
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {el:'.swiper-pagination'},
    });
    setSlideSwiper(newSliderSwiper);
  }, [bannerList.length, slideSwiper])
  return (
    <SliderContainer>
      <div className="before"></div>
      <div className="slider-container">
        <div className="swiper-wrapper">
          {
            bannerList.map((item, index) => {
              return (
                <div className="swiper-slide" key={item.imageUrl + index}>
                  <div className="slider-nav">
                    <img src={item.imageUrl} width="100%" height="100%" alt="推荐" />
                  </div>
                </div>
              )
            })
          }
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </SliderContainer>
  )
}

export default React.memo(Slider);
