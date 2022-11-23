<template>
    <el-container>
        <el-aside>
            <!-- 侧边栏 -->
            <el-menu
                  default-active="2"
                  class="el-menu-vertical-demo"
                  background-color="#545c64"
                  text-color="#fff"
                  active-text-color="#ffd04b"
                  style="height: 100vh;"
                  router
                  >
                 <!-- <el-submenu index="1">
                    <template slot="title">
                      <i class="el-icon-location"></i>
                      <span>导航一</span>
                    </template>
                    <el-menu-item-group>
                      <template slot="title">分组一</template>
                      <el-menu-item index="1-1">选项1</el-menu-item>
                      <el-menu-item index="1-2">选项2</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group title="分组2">
                      <el-menu-item index="1-3">选项3</el-menu-item>
                    </el-menu-item-group>
                    <el-submenu index="1-4">
                      <template slot="title">选项4</template>
                      <el-menu-item index="1-4-1">选项1</el-menu-item>
                    </el-submenu>
                  </el-submenu> -->
                  <el-menu-item index="/home">
                    <i class="el-icon-menu"></i>
                    <span slot="title">发现音乐</span>
                  </el-menu-item>
                  <el-menu-item index="/tuijian">
                    <i class="el-icon-document"></i>
                    <span slot="title">推荐歌单</span>
                  </el-menu-item>
                  <el-menu-item index="/newMusic">
                    <i class="el-icon-setting"></i>
                    <span slot="title">最新音乐</span>
                  </el-menu-item> 
                  <el-menu-item index="/newMV">
                    <i class="el-icon-setting"></i>
                    <span slot="title">最新MV</span>
                  </el-menu-item> 
                  <img src="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80" width="250px" height="200px" style="margin-left: 20px;">
                </el-menu>
        </el-aside>
        <el-container>
            <el-header style="background-color: rgb(249,249,249);">
                <!-- <button type="button" @click="go()" style="padding: 10px; margin-top: 10px; margin-right: 10px;"><</button>
                <button type="button" @click="back()" style="padding: 10px; margin-top: 10px;">></button> -->
                
                <!-- <el-button-group> -->
                  <el-button type="primary" icon="el-icon-arrow-left" @click="go()" style="margin-top: 10px;"></el-button>
                  <el-button type="primary" @click="back()" style="margin-top: 10px;" icon="el-icon-arrow-right"></el-button>
               <!-- </el-button-group> -->
                
                <div class="seach">
                    <!-- <input type="text" name="" id="" value="" v-model="keyword" @keyup.enter="toseach(keyword)"/> -->
                    <el-input v-model="keyword" placeholder="请输入内容"></el-input>
                    <!-- <button type="button" @click="toseach(keyword)" class="btn">搜索</button> -->
                    <el-button type="primary" icon="el-icon-search" @click="toseach(keyword)"></el-button>
                    <!-- <img src="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80"  width="40px" height="40px" style="margin-left: 20px;"> -->
                    
                </div>
                
            </el-header>
            <el-main style="height: 80vh; overflow-x: hidden;">
               <!--layout 路由出口 -->
                <router-view/>
            </el-main>
        </el-container>
        <div class="bofang">
            <audio :src="this.$store.state.musciSrc" controls="controls" autoplay="autoplay" @ended="next()" style="width: 100%;">
                当前浏览器不支持audio
            </audio>
           
        </div>
    </el-container>
  
        
      
</template>

<script>
    export default {
        name:'Layout',
        data(){
            return {
                // musciUrl:'http://music.163.com/song/media/outer/url?id=447925558.mp3',
                keyword:''
                
            }
        },
       /* mounted() {
            this.$bus.$on('player',(data)=>{
                this.musciUrl = data
            })
        }, */
        methods:{
            toseach(keyword){
                if(keyword == ''){
                    
                    this.$message({
                              message: '搜索内容不能为空哦，请输入相应内容',
                              type: 'warning'
                            });
                    
                }else{
                   /* let timer
                    let that = this
                    clearTimeout(timer)
                    timer = setTimeout(function(){
                        
                    },2000) */
                    
                     this.$router.push(`/seach?q=${this.keyword}`)
                   
                }
                
                
            },
            go(){
                // 后退一页
                
               if(this.$route.path == '/home'){
                   
               }else{
                   this.$router.back()
               }
               // console.log(this.$route.path)
            },
            back(){
                //前进一页
                this.$router.forward()
            },
            next(){
                this.$store.commit('nextplay')
                
            }
           
        }
    }
</script>

<style lang="scss" scoped="scoped">
    .bofang{
        width: 100%;
        height: 50px;
        background-color: rgb(241, 243, 244);
        position: fixed;
        bottom: 0px;
        left: 0px;
    }
    .seach{
        float: right;
        position: relative;
        right: 50px;
        top: 10px;
        display: flex;
        .btn{
             
            // padding: 5px;
            padding: 0 10px;
            border: none;
            background-color: white;
            
            
        }
    }
   
</style>
