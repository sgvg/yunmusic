<template>
    <div class="homePage">
        
       <!-- 轮播图 -->
        <el-carousel :interval="4000" type="card" height="200px">
            <el-carousel-item v-for="(item,index) in lunboList" :key="index">
                <img :src="item.imageUrl"  style="width: 100%; height: 100%;">
            </el-carousel-item>
        </el-carousel>
       <!-- 推荐歌单列表 -->
        <tuijianList :limit="10"></tuijianList>
        
        <!-- 最新歌单列表 -->
        <newList></newList>
        
        <!-- 推荐MV -->
        <tuijianMv></tuijianMv>
        
    </div>
</template>

<script>
    import tuijianList from '@/components/tuijianList/index.vue'
    import newList from '@/components/newList/index.vue'
    import tuijianMv from '@/components/tuijianMv/index.vue'
    import {lunbotu} from '@/api/home/index.js'
    let home = {
         data(){
             return {
                 lunboList:[]
             }
         },
         components:{
             tuijianList,
             newList,
             tuijianMv
         },
         created(){
             lunbotu().then((res)=>{
                 // console.log(res.data.banners)
                 this.lunboList = res.data.banners
             })
         }
         
    }
    
    export default home
</script>

<style scoped="scoped" lang="scss">
    .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 200px;
        margin: 0;
      }
      
      .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
      }
      
      .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
      }
      .homePage{
          height: 80vh;
          // overflow-y: scroll;
         
      }
</style>
