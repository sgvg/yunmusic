<template>
    <div class="tujianMv">
        <h3>推荐MV</h3>
        <div class="MVList">
            <template v-for="(item,index) in MVList">
                <div class="Mv_item" @click="playMv(item.id)">
                    <div class="mv_img">
                        <img :src="item.picUrl" >
                    </div>
                    <p>{{item.name}}</p>
                    <p class="sing_name">{{item.artistName}}</p>
                </div>
            </template>
            
            
        </div>
    </div>
</template>

<script>
    import {tuijianMv} from '@/api/home/index.js'
    export default {
        data(){
            return {
                MVList:[]
            }
        },
        created() {
            tuijianMv().then(res=>{
                // console.log(res.data.result)
                this.MVList  = res.data.result
            })
        },
        methods:{
            playMv(id){
                this.$router.push(`/playMv?q=${id}`)
            }
        }
        
    }
</script>

<style lang="scss" scoped="scoped">
    .tujianMv{
        h3{
            margin: 15px 0;
        }
        .MVList{
            display: flex;
            justify-content: space-between;
            .Mv_item{
                width: 250px;
                .mv_img{
                    width: 100%;
                    img{
                        width: 100%;
                    }
                }
                .sing_name{
                    color: #808080;
                }
            }
        }
    }
    
</style>
