import { axiosInstance } from './config';
import * as respType from './constants'

// 请求推荐列表: 进阶： 加入了类型参数
export const getBannerRequest = () => {
  return axiosInstance.get<{banners: respType.IBanners[]}>('/banner');
}

export const getRecommendListRequest = () => {
  return axiosInstance.get<{result: respType.IPersonalized[]}>('/personalized');
}

export const getHotSingerListRequest = (count: Number) => {
  return axiosInstance.get<{artists: respType.IArtists[]}>(`/top/artists?offset=${count}`);
}

export const getSingerListRequest= (category: String, alpha: String, count: Number) => {
  return axiosInstance.get<{artists: respType.IArtists[]}>(`/artist/list?cat=${category}&initial=${alpha.toLowerCase()}&offset=${count}`);
}
