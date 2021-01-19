import request from './http'
/**
 * 获取每日推荐
 * @param {*} params 
 */
export const getList = params => request({
    method: 'get',
    url: '/personalized?limit=50',
    data: params
})
/**
 * 获取歌手列表 
 * @param {*} params 
 */
export const getHotSinger = params => request({
    method: 'get',
    url: '/top/artists?offset=0&limit=120',
    data: params
})
/**
 * 获取歌手详情 歌手id
 * @param {*} params 
 */
export const getSingerDetail = params => request({
    method: 'get',
    url: '/artist/desc',
    data: params
})