import axios from 'axios';

// 默认服务器 url
export const baseUrl = 'http://192.168.1.101:3030';

const axiosInstance = axios.create({
  baseURL: baseUrl
});

// 设置拦截器，对公共部分进行抽象
axios.interceptors.response.use(
  res => res.data,
  err => {
    console.log(err, '网络错误')
  }
)

export {
  axiosInstance
};