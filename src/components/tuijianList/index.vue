<template>
    <div class="tui">
        <h3>推荐歌单</h3>
        <div class="musicList">
            <template v-for="(item,index) in musicList">
                <div class="music_item" @click="todaitl(item.id)">
                    <div class="Musc_img">
                        <img :src='item.picUrl' >
                    </div>
                    <p>{{item.name}}</p>
                </div>
            </template>
            
           
           
        </div>
    </div>
</template>

<script>
    import {tuijian} from '@/api/home/index.js'
   
  
    export default {
        data(){
            return {
                musicList:[]
            }
        },
        props:['limit'],
        created(){
            /* this.axios.get('https://autumnfish.cn/personalized?limit=10').then((res)=>{
                console.log(res)
            }) */
            
            
           
                tuijian(this.limit).then((res)=>{
                    
                    this.musicList = res.data.result
                })
            
          
          
        },
        methods:{
            todaitl(id){
                this.$router.push(`/tuijianList?q=${id}`)
            }
        }
    }
</script>

<style lang="scss" scoped="scoped">
    .tui{
        margin-top: 20px;
        h3{
            text-align: left;
            margin: 15px 0;
        }
       .musicList {
           
          
           display: flex;
           flex-wrap: wrap;
           justify-content: space-between;
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
</style>
