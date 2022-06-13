/**
 * 用于对cookie的CRUD
 */
import Cookies from "js-cookie";


/** 设置cookie
 * @param {Object} info
 */
function setUserCookie(info: { [s: string]: unknown; } | ArrayLike<unknown>) {
    //返回其可枚举属性的键值对的对象
    for (const [key, value] of Object.entries(info)) {
        Cookies.set(`${key}`,`${value}`)
    }
    return true
}

//获取
function getUserCookie() {
    return {
        appkey: Cookies.get('appkey'),
        email: Cookies.get('email'),
        role: Cookies.get('role'),
        username: Cookies.get('username')
    }
}

//移除
function remUserCookie() {
    Cookies.remove('appkey')
    Cookies.remove('email')
    Cookies.remove('role')
    Cookies.remove('username')
}

export default {
    setUserCookie,
    getUserCookie,
    remUserCookie
}