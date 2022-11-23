<template>
    <div class="newMvPage">
            <h1>最新Mv</h1>
        
            <div class="typetop">
                <span>地区：</span>
                            
                            
                <span @click="tag = '全部'" :class="{ active: tag == '全部' }">全部</span>
                            
                            
                <span @click="tag = '内地'" :class="{ active: tag == '内地' }">内地</span>
                            
                            
                <span @click="tag = '港台'" :class="{ active: tag == '港台' }">港台</span>
                            
                            
                <span @click="tag = '欧美'" :class="{ active: tag == '欧美' }">欧美</span>
                            
                            
                <span @click="tag = '日本'" :class="{ active: tag == '日本' }">日本</span>
                            
                            
                <span @click="tag = '韩国'" :class="{ active: tag == '韩国' }">韩国</span>
            </div>
            <div class="typetop">
                <span>类型：</span>
                            
                            
                <span @click="tag2 = '全部'" :class="{ active: tag2 == '全部' }">全部</span>
                            
                            
                <span @click="tag2 = '官方版'" :class="{ active: tag2 == '官方版' }">官方版</span>
                            
                            
                <span @click="tag2 = '原生'" :class="{ active: tag2 == '原生' }">原生</span>
                            
                            
                <span @click="tag2 = '现场版'" :class="{ active: tag2 == '现场版' }">现场版</span>
                            
                            
                <span @click="tag2 = '网易出品'" :class="{ active: tag2 == '网易出品' }">网易出品</span>
                            
                            
               
            </div>
            
            
            <div class="MVList">
                
                <template v-for="(item,index) in mvlist">
                    <div class="MVItem" @click="playmv(item.id)">
                        <div class="vidoe_img">
                            <img :src="item.cover" >
                        </div>
                        <div class="titel">
                            <p>{{item.name}}</p>
                            <p>{{item.artistName}}</p>
                        </div>
                    </div>
                </template>
                
                
            </div>
            
            
            <el-pagination
                  background
                  layout="prev, pager, next"
                  :total="total"
                  :page-size="12"
                  :current-page="size"
                  @current-change="changePage"
             ></el-pagination>
                
            <br>
            <br>
            <br>
            <br>
            
    
    </div>
</template>

<script>
    import {allMv} from '@/api/home/index.js'
    export default {
        data(){
            return {
                mvlist:[],
                tag:'全部',
                tag2:'全部',
                total:1,
                size:1
            }
        },
        mounted() {
            allMv(this.tag,this.tag2,12,(this.size-1)*10).then(res=>{
                // console.log(res.data)
                 this.mvlist = res.data.data
                 this.total = res.data.count
                // console.log(res.data.count)
            })
        },
        methods:{
            playmv(id){
                this.$router.push(`/playmv?q=${id}`)
            },
            changePage(val){
                this.size = val
                allMv(this.tag,this.tag2,12,(this.size-1)*10).then(res=>{
                    // console.log(res.data.data)
                     this.mvlist = res.data.data
                })
                
            }
        },
        watch:{
            tag(){
                allMv(this.tag,this.tag2,12,(this.size-1)*10).then(res=>{
                    // console.log(res.data.data)
                     this.mvlist = res.data.data
                })
                 this.size = 1
            },
            tag2(){
                allMv(this.tag,this.tag2,12,(this.size-1)*10).then(res=>{
                    // console.log(res.data.data)
                    this.mvlist = res.data.data
                })
                 this.size = 1
            } 
        }
        
    }
</script>

<style lang="scss" scoped="scoped">
    .newMvPage{
        .typetop{
            margin-top: 10px;
            span{
                margin-right: 10px;
            }
        }
        .MVList{
            display: flex;
            justify-content: space-between; 
            flex-wrap: wrap;
            margin-top: 30px;
            // padding: 10px;
            .MVItem{
                // padding: 10px;
                
                margin-bottom: 25px;
                width: 250px;
                // border: 1px red solid;
                
                .vidoe_img{
                    width: 250px;
                    height: 150px;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
                .titel{
                    p{
                        overflow: hidden;
                        text-overflow:ellipsis;
                        white-space: nowrap;
                        font-size: 16px;
                    }
                }
            }
        }
    }
    
    .active{
        color: red;
        
    }
</style>
