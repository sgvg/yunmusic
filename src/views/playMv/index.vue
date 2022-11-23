<template>
    <div class="playMvPage">
        <h1>{{mvdata.name}}-----{{mvdata.artistName}}</h1>
        <div class="MVItem">
            <div class="vidoe">
               <video width="800" height="" autoplay controls :src="this.mv"></video>
            </div>
            <div class="titel">
                <p></p>
            </div>  
        </div>
        <div class="pinglun">
            <h1>热门评论：</h1>
            <br>
            <ul>
                <template v-for="(item,index) in tip">
                    <li>
                        <div class="img">
                            <img :src="item.user.avatarUrl" >
                        </div>
                        <div class="detail">
                            <div class="username">
                                <span>{{item.user.nickname}}</span>
                                <span style="color: black;">&nbsp;:</span>
                            </div>
                            <div class="tips">
                                
                                <p>{{item.content}}</p>
                            </div>
                            <div class="time">
                                {{item.timeStr}}
                            </div>
                        </div>
                        
                        
                    </li>
                </template>
                
                
            </ul>
        </div>
    </div>
</template>

<script>
    import {playmv1} from '@/api/home/index.js'
    import {tipMv} from '@/api/home/index.js'
    import {mvdedatil} from '@/api/home/index.js'
    export default {
        data(){
            return {
                mv:'',
                tip:[],
                mvdata:{}
            }
        },
        mounted() {
            playmv1(this.$route.query.q).then(res=>{
                // console.log(res.data.data)
                this.mv = res.data.data.url
            })
            
            
            tipMv(this.$route.query.q).then(res=>{
                // console.log(res.data.hotComments)
                this.tip = res.data.hotComments
                
            })
            
            mvdedatil(this.$route.query.q).then(res=>{
                console.log(res.data.data)
                this.mvdata = res.data.data
            })
        }
    }
</script>

<style lang="scss" scoped="scoped">
    .pinglun{
        margin-top: 50px;
        margin-bottom: 50px;
        ul{
            li{
                
                border-top: 1px dotted #ccc;
                display: flex;
                padding: 8px;
                margin-bottom: 10px;
                .img{
                    width: 80px;
                    height: 80px;
                    // border-radius: 50%;
                    // border: 1px red solid;
                    img{
                        width: 80px;
                        height: 80px;
                        border-radius: 50%;
                        
                    }
                }
                .detail{
                    margin-left: 20px;
                    position: relative;
                    .username{
                        color: deepskyblue;
                        font-size: 14px;
                    }
                    .tips{
                        // width: 50%;
                        margin-left: 100px;
                        text-indent:2em;
                        font-size: 15px;
                        p{
                            overflow: hidden;
                            text-overflow:ellipsis;
                           
                            
                        }
                        
                        
                    }
                    .time{
                        position: absolute;
                        bottom: -10px;
                        font-size: 12px;
                        
                    }
                }
                
            }
        }
    }
</style>
