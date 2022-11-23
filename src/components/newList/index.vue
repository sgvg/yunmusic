<template>
     <div class="newList_wrap">
         <h3>最新音乐</h3>
         
         <div class="newList">
             <template v-for="(item,index) in newList">
                 <div class="item" @click="palyMusic(item.id)">
                     <div class="item_img">
                         <img :src="item.picUrl" >
                     </div>
                     <div class="item_titel">
                         <p class="musi_name">{{item.name}}</p>
                         <p class="singer">{{item.song.artists[0].name}}</p>
                     </div>
                 </div>
             </template>
             
             
           
            
         </div>
     </div>
</template>

<script>
    import {newList} from '@/api/home/index.js'
    import {palymusic1} from '@/api/home/index.js'
    export default {
        data(){
            return {
                newList:[]
            }
        },
        // props:['size'],
        mounted(){
            newList().then(res=>{
                   // console.log(res.data.result)
                this.newList = res.data.result
            })
        },
        methods:{
            palyMusic(id){
                console.log(id)
                palymusic1(id).then(res=>{
                    // console.log(res.data.data[0].url)
                    // console.log(this.$parent.$parent.$parent.$parent.$parent)
                    
                    // this.$bus.$emit('player',res.data.data[0].url)  //全局事件总线方式传递参数
                    this.$store.commit('play',res.data.data[0].url)  //通过vuex数据共享实现组件间共享数据
                    
                })
            }
        }
    }
</script>

<style lang="scss" scoped="scoped">
    .newList_wrap{
        margin-top: 25px;
        h3{
            text-align: left;
            margin: 15px 0;
        }
        .newList{
             
             height: 500px;
             display: flex;
             flex-direction: column;
             flex-wrap: wrap;
             
            .item{
                display: flex;
                height: 100px;
                align-items: center;
                width: 50%;
                // border: 1px red solid;
                cursor: pointer;
                &:hover{
                    background-color: gray;
                }
                .item_img{
                    width: 80px;
                    height: 80px;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
                .item_titel{
                    padding: 10px;
                    .musi_name{
                        font-size: 16px;
                        margin-bottom: 10px;
                    }
                    .singer{
                        font-size: 14px;
                        color: #808080;
                    }
                }
            }
            
        }
    }
    
</style>
