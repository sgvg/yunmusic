<template>
    <div class="tuijianPage">
        <h1>推荐页面</h1>
        <div class="top_car">
            <div class="top_car_img">
                <img :src="this.topdaetal.coverImgUrl" >
                
            </div>
            <div class="top_car_titel">
                <p>{{topdaetal.name}}</p>
                <p class="info">
                {{topdaetal.description}}
                </p>
            </div>
        </div>
        <div class="tab_top">
            <span
              class="item"
              :class="{ active: tag == '全部' }"
              @click="tag = '全部'"
            >
              全部
            </span>
            <span
              class="item"
              :class="{ active: tag == '欧美' }"
              @click="tag = '欧美'"
            >
              欧美
            </span>
            <span
              class="item"
              :class="{ active: tag == '华语' }"
              @click="tag = '华语'"
            >
              华语
            </span>
            <span
              class="item"
              :class="{ active: tag == '流行' }"
              @click="tag = '流行'"
            >
              流行
            </span>
            <span
              class="item"
              :class="{ active: tag == '说唱' }"
              @click="tag = '说唱'"
            >
              说唱
            </span>
            <span
              class="item"
              :class="{ active: tag == '摇滚' }"
              @click="tag = '摇滚'"
            >
              摇滚
            </span>
            <span
              class="item"
              :class="{ active: tag == '民谣' }"
              @click="tag = '民谣'"
            >
              民谣
            </span>
            <span
              class="item"
              :class="{ active: tag == '电子' }"
              @click="tag = '电子'"
            >
              电子
            </span>
            <span
              class="item"
              :class="{ active: tag == '轻音乐' }"
              @click="tag = '轻音乐'"
            >
              轻音乐
            </span>
            <span
              class="item"
              :class="{ active: tag == '影视原声' }"
              @click="tag = '影视原声'"
            >
              影视原声
            </span>
            <span
              class="item"
              :class="{ active: tag == 'ACG' }"
              @click="tag = 'ACG'"
            >
              ACG
            </span>
            <span
              class="item"
              :class="{ active: tag == '怀旧' }"
              @click="tag = '怀旧'"
            >
              怀旧
            </span>
            <span
              class="item"
              :class="{ active: tag == '治愈' }"
              @click="tag = '治愈'"
            >
              治愈
            </span>
            <span
              class="item"
              :class="{ active: tag == '旅行' }"
              @click="tag = '旅行'"
            >
              旅行
            </span>
        </div>
        
        
      <!--  <div class="tab_banner">
            <div class="list_musci">
                <div class="item_music">
                    <div class="img_music">
                        <img src="https://p2.music.126.net/wRiwy65LSxv9X43B-zlBMA==/109951163550232716.jpg" >
                    </div>
                    <p></p>
                    <p></p>
                </div>
            </div>
        </div> -->
        <!-- <tuijianList :limit="30"></tuijianList> -->
        <!-- <fenleigedan :tag="this.tag"></fenleigedan> -->
        
            <div class="musicList">
                <template v-for="(item,index) in musicList">
                    <div class="music_item" @click="todaitl(item.id)">
                        <div class="Musc_img">
                            <img :src='item.coverImgUrl' >
                        </div>
                        <p>{{item.name}}</p>
                    </div>
                </template>
                
               
               
            </div>
            
            <el-pagination
                  background
                  layout="prev, pager, next"
                  :total="total"
                  :page-size="10"
                  :current-page="size"
                  @current-change="changePage"
             ></el-pagination>
           
        
        <br>
        <br>
        <br>
        <br>
        <br>
    </div>
</template>

<script>
    import tuijianList from '@/components/tuijianList/index.vue'
    
    import {fenlei} from '@/api/home/index.js'
    import {fenleiGedan} from '@/api/home/index.js'
    export default {
        data(){
            return {
                tag:'全部',
                topdaetal:{},
                musicList:[],
                
                total:1,
                size:1
            }
        },
        components:{
            tuijianList
            
        },
        mounted(){
            fenlei(this.tag).then(res=>{
                // console.log(res.data.playlists[0])
                this.topdaetal = res.data.playlists[0]
            })
            fenleiGedan(this.tag,10,(this.size-1)*10).then(res=>{
                this.musicList = res.data.playlists
                
                this.total = res.data.total
            })
        },
        watch:{
            tag(){
                fenlei(this.tag).then(res=>{
                    // console.log(res.data.playlists[0])
                    this.topdaetal = res.data.playlists[0]
                })
                
                fenleiGedan(this.tag,10,(this.size-1)*10).then(res=>{
                    this.musicList = res.data.playlists
                })
                
                this.size = 1
                
            }
        },
        methods:{
            todaitl(id){
                this.$router.push(`/tuijianList?q=${id}`)
            },
            changePage(val){
                this.size = val
                fenleiGedan(this.tag,10,(this.size-1)*10).then(res=>{
                    this.musicList = res.data.playlists
                })
            }
            
        }
        
        
    }
</script>

<style lang="scss" scoped="scoped">
    .tuijianPage{
        height: 80vh;
      
        .top_car{
            
            width: 1100px;
            margin: 0 auto;
            padding: 20px;
            background: skyblue;
           
            border-radius: 7px;
            display: flex;
            
            
            .top_car_img{
                
                img{
                    width: 160px;
                    height: 160px;
                }
            }
           .top_car_titel{
               .info{
                       color: #888482;
                       font-size: 14px;
                       padding-top: 5px;
                       // 多行省略
                       overflow: hidden;
                       text-overflow: ellipsis;
                       display: -webkit-box;
                       -webkit-box-orient: vertical;
                       -webkit-line-clamp: 5;
               }
           }
        }
        .tab_top{
            position: relative;
            left: 325px;
            top: 5px;
            span{
                cursor: pointer;
                padding: 10px;
            }
        }
        
        .musicList {
             
             
             display: flex;
             flex-wrap: wrap;
             justify-content: space-between;
             margin-top: 30px;
             // border: 1px red solid;
             .music_item{
                 width: 200px;
                 margin-bottom: 20px;
                 font-size: 14px;
                 
                 .Musc_img{
                     width: 200px;
                     height: 200px;
                     transition: all 0.5s; 
                    
                     &:hover{
                         margin-top: -10px;
                     }
                     img{
                         width: 100%;
                         height: 100%;
                         border-radius: 10px;
                     }
                 }
                 p{
                        
                         /* 多行省略
                        
                         display: -webkit-box;
                          -webkit-box-orient: vertical;
                         -webkit-line-clamp: 1; */ 
                         
                         
                         overflow: hidden;
                         text-overflow:ellipsis;
                         white-space: nowrap;
                         font-size: 16px;
                 }
             }
          
        }
    }
    .active{
        color: red;
    }
</style>
