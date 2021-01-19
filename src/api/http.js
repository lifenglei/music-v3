import axios from 'axios';
import qs from 'qs';
import {
    Toast
} from 'vant';

let instance = axios.create({
    baseURL: 'http://music.eleuu.com',
    timeout: 60000,
})

instance.interceptors.request.use(req => {
    return req;
})
instance.interceptors.response.use(({
    data
}) => {
    if (data.code != 200) { // 这个不是res.code， 而是后端人员自定义的，根据自己项目实际情况来决定
        Toast({
            message: data.msg,
            timeout: 1500,
            icon: 'fail',
        })
    }
    return data
}, err => {
    Toast({
        message: `请求失败：错误信息 \n${err.message}`,
        timeout: 1500,
    })
})
export default ({
    method,
    url,
    data = null
}) => {
    method = method.toLowerCase();
    if (method == 'post') {
        return instance.post(url, qs.stringify(data))
    } else if (method == 'get') {
        return instance.get(url, {
            params: data
        })
    }
}