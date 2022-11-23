import request from "@/utils/request.js"


export  function tuijian(data){
    return request({
        url:'/personalized',
        method:'get',
        params:{
            limit:data
        }
    })
        
    
}


export function lunbotu(){
    return request({
        url:'/banner',
        method:'get',
        
    })
}


export function newList(data){
    return request({
        url:'/api/personalized/newsong',
        method:'get',
        params:{
            limit:data
        }
    })
}

export function tuijianMv(){
    return request({
        url:'/api/personalized/mv',
        method:'get'
    })
}


//播放音乐
export function palymusic1(data){
    return request({
        url:'/api/song/url',
        method:'get',
        params:{
            id:data
        }
    })
}


//推荐歌单详情

export function tuijanDateli(data,data2){
    return request({
        url:'/api/playlist/track/all',
        method:'get',
        params:{
            id:data,
            limit:data2
        }
    })
}

//搜索请求
export function Seach(data,data2){
   return request({
       url:'/api/cloudsearch',
       method:'get',
       params:{
           keywords:data,
           type:data2
           
       }
   })
    
    
}


//分类歌单头部
export function fenlei(data){
    return request({
        url:'/api/top/playlist/highquality',
        method:'get',
        params:{
            limit:1,
            cat: data
        }
    })
}

//分类歌单列表
export function fenleiGedan(data,data2,data3){
    return request({
        url:'/api/top/playlist',
        method:'get',
        params:{
            
            cat:data,
            limit:data2,
            offset:data3
            
        }
        
    })
}

//播放Mv
export function playmv1(data){
    return request({
        url:'/api/mv/url',
        method:'get',
        params:{
            id:data
            
        }
    })
}


//全部Mv 
export function allMv(data,data2,data3,data4){
    return request({
        url:'/api/mv/all',
        method:'get',
        params:{
            area:data,
            type:data2,
            limit:data3,
            offset:data4
        }
    })
}

//评论
export function tipMv(data){
    return request({
        url:'/api/comment/mv',
        method:'get',
        params:{
            id:data
        }
    })
}

//MV信息
export function mvdedatil(data){
    return request({
        url:'/api/mv/detail',
        method:'get',
        params:{
            mvid:data
        }
    })
}
