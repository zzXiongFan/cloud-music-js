import { axiosInstance } from './config';
import { IBanner, IRecommend } from '../application/Recommend/store/constants';

// 请求推荐列表: 进阶： 加入了类型参数
export const getBannerRequest = () => {
  return axiosInstance.get<{banners: IBanner[]}>('/banner');
}

export const getRecommendListRequest = () => {
  return axiosInstance.get<{result: IRecommend[]}>('/personalized');
}