<template>
    <div class="newMusicPage">
         <h1>最新音乐</h1> 
        <!-- <newList></newList> -->
        <div class="newList">
            <template v-for="(item,index) in list">
                <div class="item" @click="player(item.id)">
                    <div class="img">
                        <img :src="item.picUrl" >                   
                    </div>
                    <div class="titel">
                        <p>{{item.name}}</p>
                    </div>
                </div>               
            </template>
            
            
        </div>
        
        
    </div>
</template>

<script>
    // import newList from '@/components/newList/index.vue'
    import {newList} from '@/api/home/index.js'
    import {palymusic1} from '@/api/home/index.js'
    export default {
        data(){
            return {
                list:[]
            }
        },
        components:{
            // newList
        },
        created() {
            newList(10).then(res=>{
                this.list = res.data.result
            })
        },
        methods:{
            player(id){
                palymusic1(id).then(res=>{
                 
                    this.$bus.$emit('player',res.data.data[0].url)
                    
                })
            }
        }
    }
</script>

<style lang="scss" scoped="scoped">
    .newMusicPage{
        .newList{
            // height: 100px;
            // display: flex;
            margin: 0 auto;
            .item{
                width: 70%;
                height: 100px;
                border: 1px red solid;
                display: flex;
                align-items: center;
                .img{
                    width: 80px;
                    height: 80px;
                    
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
                .titel{
                    margin-left: 30px;
                }
            }
        }
    }
</style>
