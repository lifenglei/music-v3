import request from './http'
export const getList = params => request({
    method: 'get',
    url: '/personalized?limit=50',
    data: params
})
export const getHotSinger = params => request({
    method: 'get',
    url: '/top/artists?offset=0&limit=120',
    data: params
})
export const getSingerDetail = params => request({
    method: 'get',
    url: '/artist/desc',
    data: params
})