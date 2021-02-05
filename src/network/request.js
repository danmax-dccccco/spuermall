import axios from 'axios'

export function request(config) {
  // 创建config实例
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:7878/api/m5',
    setTimeout: 5000
  })

  // 2.axios拦截器
  // 2.1请求拦截
  instance.interceptors.request.use(config => {
    return config
  }), err => {

  }
  // 2.2响应拦截
  instance.interceptors.response.use(res => {
    return res.data
  },err => {
    console.log(err);
  })

  // 3.请求并发送
  return instance(config)
}
