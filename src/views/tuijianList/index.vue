<template>
    <div class="tuijianListPage">
        <div class="top_car">
            <div class="img">
                <img src="https://p1.music.126.net/6QbE9r2JeqBz3j3Kva--4A==/109951163038217098.jpg" >
            </div>
            <div class="top_titel">
                <h1>听！动漫的名场面</h1>
                <p>这里有开口即跪的燃曲、一秒破防的OST；热门新番主题曲、冷门宝藏BGM；配</p>
            </div>
            
        </div>
         
        <div class="musicList_top">
            <span style="margin-left: 50px;">歌曲</span>
            <span style="float: right; margin-right: 50px;">歌手</span>
        </div>
        <div class="musicList">
            <ul>
                <template v-for="(item,index) in list">
                    <li @click="playmusic(item.id)">
                       <!-- <div class="sing_img"> -->
                            <img :src="item.al.picUrl" class="sing_img" style="vertical-align:middle">
                       <!-- </div> -->
                        <span class="music_name">{{item.name}}</span>
                        <span class="sing_name">{{item.ar[0].name}}</span>
                        
                    </li>
                </template>
                
               
            </ul>
             
           <!-- <table border="" cellspacing="" cellpadding="">
                <tr>
                    <th>歌曲</th>
                    <th>歌手</th>
                </tr>
                
                <template v-for="(item,index) in list">
                    <tr @click="playmusic(item.id)">
                        <td>{{item.name}}</td>
                        <td>{{item.ar[0].name}}</td>
                    </tr>
                </template>
               
            </table> -->
        </div>
        <el-button type="primary" plain icon="el-icon-headset
        " style="position: absolute; top: 140px; right: 0px;" @click="playmusic(firstId)">播放全部</el-button>
        
    </div>
</template>

<script>
    import {tuijanDateli} from '@/api/home/index.js'
    import {palymusic1} from '@/api/home/index.js'
    export default {
        data(){
            return {
                list:[],
                firstId:undefined
                
                //跳转带过来的参数
              
                
                
            }
        },
        mounted() {
            tuijanDateli(this.$route.query.q,20).then(res=>{
                console.log(res.data.songs)
                this.list = res.data.songs
                this.firstId = res.data.songs[0].id
            })
            // console.log(this.$route.query.q)  跳转带过来的参数
            
             
            
        },
       
        methods:{
            playmusic(id){
                palymusic1(id).then(res=>{
                     // this.$bus.$emit('player',res.data.data[0].url)
                     
                     this.$store.commit('play',res.data.data[0].url)
                     // console.log(res.data.data[0].url)
                })
            }
        }
        
        
    }
</script>

<style lang="scss" scoped="scoped">
    .tuijianListPage{
        // height: 80vh;
        position: relative;
        .top_car{
            // width: 1100px;
            // height: 100px;
            padding: 15px;
            display: flex;
            background-color: rgb(249,249,249);
            border-radius: 7px;
            margin: 0 auto;
            .img{
                img{
                    width: 160px;
                    height: 160px;
                }
            }
            .top_titel{
                margin-left: 30px;
            }
        }
        .musicList_top{
            // width: 1100px;
            padding: 20px;
            // background-color: green;
            margin-top: 20px;
            color: #808080;
        }
        .musicList{
            // margin-top: 30px;
            margin-bottom: 50px;
            ul{
                li{
                    list-style: none;
                    // width: 1100;
                    padding: 20px;
                    // border: 1px red solid;
                    cursor: pointer;
                    
                    &:hover{
                        background-color: gray;
                    }
                    .sing_img{
                        width: 80px;
                        height: 80px;
                        img{
                            width: 100%;
                            height: 100%;
                        }
                    }
                    .music_name{
                        color: black;
                        font-size: 20px;
                        font-weight: 500;
                    }
                    .sing_name{
                        // margin-left: 100px;
                        display: inline-block;
                        float: right;
                    }
                }
            }
        }
    }
</style>
