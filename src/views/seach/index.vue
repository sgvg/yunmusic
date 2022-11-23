<template>
    <div class="seachPage">
        <h1>搜索结果如下:</h1>
        <div class="top_tab">
            <span @click="tag = '歌曲'" :class="{ active: tag == '歌曲' }">歌曲</span>
            <span @click="tag = 'mv'" :class="{ active: tag == 'mv' }">Mv</span>
        </div> 
        <div class="musicList_top">
            <span style="margin-left: 50px;">歌曲</span>
            <span style="float: right; margin-right: 10px;">歌手</span>
        </div>
        <ul v-show="tag == '歌曲'">
            <template v-for="(item,index) in list">
                <li @click="playmusic(item.id)">
                    <img :src="item.al.picUrl"  style="width: 80px;
                    height: 80px; vertical-align: middle;">
                    <span class="name">{{item.name}}</span>
                    <span class="sing_name">{{item.ar[0].name}}</span>
                </li>
            </template>
            
        </ul>
        
        <div class="MVList" v-show="tag == 'mv'">
            <template v-for="(item,index) in mvlist">
                <div class="MVItem" @click="playmv(item.id)">
                    <div class="mv_img">
                        <img :src="item.cover" >
                    </div> 
                    <p>{{item.name}}</p>
                </div>
            </template>
            
        </div> 
    </div>
</template>

<script>
    import {Seach} from '@/api/home/index.js'
    import {palymusic1} from '@/api/home/index.js'
    export default {
        data(){
            return {
                list:[],
                mvlist:[],
                tag:'歌曲'
               
            }
        },
        mounted(){
            //1表示歌曲 1004 表示mv
            Seach(this.$route.query.q,1).then(res=>{
                // console.log(res.data.result.songs)
                this.list = res.data.result.songs
            })
            Seach(this.$route.query.q,1004).then(res=>{
                 console.log(res.data.result.mvs)
                
                this.mvlist = res.data.result.mvs
            })
            
        },
        methods:{
            playmusic(id){
                palymusic1(id).then(res=>{
                     this.$bus.$emit('player',res.data.data[0].url)
                     // console.log(res.data.data[0].url)
                })
            },
            playmv(id){
                this.$router.push(`/playmv?q=${id}`)
            }
        },
        watch:{
           tag(){
               
           }
        }
    }
</script>

<style lang="scss" scoped="scoped">
    .seachPage{
        .top_tab{
            span{
                font-size: 25px;
                padding: 30px;
                cursor: pointer;
            }
        }
        .musicList_top{
            // width: 1100px;
            padding: 20px;
            // background-color: green;
            margin-top: 20px;
            color: #808080;
        }
        ul{
            margin-bottom: 40px;
            li{
                list-style: none;
                padding: 20px;
                // border: 1px red solid;
                cursor: pointer;
                &:hover{
                    background-color: gray;
                }
                .name{
                    color: black;
                    font-size: 20px;
                    font-size: 500;
                }
                .sing_name{
                    float: right;
                }
            }
        }
        .MVList{
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            .MVItem{
                width: 250px;
                // height: 150px;
                .mv_img{
                    width: 250px;
                    height: 150px;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
            }
        }
    }
    .active{
        color: red;
    }
</style>
