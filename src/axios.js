/**
 * 用于引入axios模块 拦截请求信息
 */
//引入封装好拦截器的axios请求
import axios from "axios";
//导入store
import store from './store/index'
//创建实例
const instance = axios.create({
    baseURL: 'https://mallapi.duyiedu.com/'
})
//请求拦截 成功 返回配置信息 失败返回失败信息
instance.interceptors.request.use((config) => {
    if (config.url.includes('/passport')) {
        return config
    } else {
        return {
            ...config,
            params: {
                ...config.params,
                appkey: store.state.userInfo.appkey
            }
        }
    }
}, (error) => {
    return Promise.reject(error)
})
//响应拦截
instance.interceptors.response.use((response) => {
    /* console.log("response", response) */
    if (response.data.status === "fail") {
        return Promise.reject(response.data.msg)
    } else {
        return response.data.data
    }
}, (error) => {
    return Promise.reject(error)
})
export default instance