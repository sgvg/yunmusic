import Vue from 'vue'
import VueRouter from 'vue-router'

import home from '@/views/home/index.vue'
import tuijian from '@/views/tuijian/index.vue'
import newMusic from '@/views/newMusic/index.vue'
import newMV from  '@/views/newMV/index.vue'
import tuijianList from  '@/views/tuijianList/index.vue'
import seach from  '@/views/seach/index.vue'
import playmv from '@/views/playMv/index.vue'



const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}




Vue.use(VueRouter)



const routes = [
    {
        path:'/',
        redirect:'/home',
        component:()=>import('@/layout'),
        children:[
            {
                path:'home',
                name:'Home',
                component:home
            },
            {
                path:'tuijian',
                name:'Tuijian',
                component:tuijian
            },
            {
                path:'newMusic',
                name:'Newmusic',
                component:newMusic
            },
            {
                path:'newMV',
                name:'Newmv',
                component:newMV
            },
            {
                path:'tuijianList',
                name:'TuijianList',
                component:tuijianList
                
            },
            {
                path:'seach',
                name:'Seach',
                component:seach,
                
                
            },
            {
                path:'playmv',
                name:'Playmv',
                component:playmv
            }
        ]
    },
    
    
]

const router = new VueRouter({
  routes
})

export default router
