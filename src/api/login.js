import request from '@/utils/request'
import { get, post } from '@/utils/request'

const api = process.env.NODE_ENV == "development" ? 'api' : '';

export function login(username, password) {
  return request({
    url: '/user/login',
    method: 'post',
    data: {
      username,
      password
    }
  })
}
// 获取用户信息（权限roles）
export function getInfo(token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}
export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}
//登录
// export function getLogin(params) {
//   return post(`${api}/auth/login`, params);
// }

// 特征来源
// export function getFeatureSource(params) {
//   return get(`${api}/featureconfig/page`, params);
// }

