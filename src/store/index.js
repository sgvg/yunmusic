import Vue from 'vue'
import Vuex from 'vuex'
import {tuijanDateli} from '@/api/home/index.js'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      musciSrc:'http://m701.music.126.net/20221013200112/faa6cd2616541c84b0694931b2bc99ef/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/14096409484/9dfd/64ef/1db0/4b06141859832cac0e3cc4d3c6a4aef1.mp3',
      index:0
      
  },
  getters: {
  },
  mutations: {
      play(state,src){
          state.musciSrc = src
      },
      nextplay(state){
          state.index ++
      }
     
      
  },
  actions: {
  },
  modules: {
  }
})
