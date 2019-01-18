<template>
  <div class="list-wrapper">
      <!-- <yd-navbar title="设备合作" bgcolor="#fff" fixed fontsize="14px">
        <router-link to="/equipment" slot="left">
            <yd-navbar-back-icon>返回</yd-navbar-back-icon>
        </router-link>
    </yd-navbar>
    <div class="" style="width:100%;height:50px;"></div> -->
    <template>
        <div class="zl_upgrade">
            <el-row>
                <el-col :span="5">
                    <div class="grid-content">
                        <div class="zl_l">
                            <p><img :src="img" style="width:30px;"></p>
                            <p>提交合作</p>
                        </div>
                    </div>
                </el-col>
                <el-col :span="4">
                    <div class="grid-content">
                         <div class="zl_ll">
                            <p><img :src="img1"></p>
                        </div>
                    </div>
                </el-col>
                <el-col :span="5">
                    <div class="grid-content">
                        <div class="zl_l">
                            <p><img :src="img2" style="margin-top:25px;"></p>
                            <p>设备购买</p>
                        </div>
                    </div>
                </el-col>
                <el-col :span="4">
                    <div class="grid-content">
                        <div class="zl_ll">
                            <p><img :src="img1"></p>
                        </div>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="grid-content">
                        <div class="zl_l zl_ls">
                            <p><img :src="img3" style="margin-left:5px;"></p>
                            <p>签约合作</p>
                        </div>
                    </div>
                </el-col>
            </el-row>
        </div>
        <div class="">
                <yd-list theme="3">
                    <yd-list-item v-for="(item, key) in list" :key="key">
                        <img slot="img" :src="item.img" @click="sub(item,key)">
                        <span slot="title" @click="sub(item,key)">{{item.title}}</span>
                        <yd-list-other slot="other" @click="sub(item,key)">
                            <!-- <div :class=" (bta == key) ? 'bth':'bth1'">
                                <p></p>
                            </div> -->
                            <div class="bth">
                                <yd-checkbox-group v-model="checkbox6">
                                    <yd-checkbox :val="key" shape="circle"></yd-checkbox>
                                    <p></p>
                                </yd-checkbox-group>
                            </div>
                            <div>
                                <span class="demo-list-price"><em>¥</em>{{item.price}}</span>
                            </div>
                            <div>数量：123123</div>
                        </yd-list-other>
                    </yd-list-item>
                </yd-list>
        </div>
        <div class="zl_sub" @click="submits">
            <p>下一步</p>
        </div>
        <div class="" style="width:100%;height:100px;"></div>
    </template>
  </div>
</template>

<script type="text/ecmascript-6">
import Vue from 'vue';
import Store from "../wenkong/store";
import img from "./assets/sub.png"
import img2 from "./assets/shopping.png"
import img3 from "./assets/business.png"
import img1 from "./assets/right_l.png"


export default {
  components: {
  },
  data(){
    return {
        img:img,
        img1:img1,
        img2:img2,
        img3:img3,
        checked:true,
        bta:0,
        checkbox6:[0],
        list: [
            {img: "//img1.shikee.com/try/2016/06/23/14381920926024616259.jpg", title: "A型控制器", price: 156.23},
            {img: "//img1.shikee.com/try/2016/06/21/10172020923917672923.jpg", title: "B型控制器", price: 256.23},
            {img: "//img1.shikee.com/try/2016/06/23/15395220917905380014.jpg", title: "C型控制器", price: 356.23},
            {img: "//img1.shikee.com/try/2016/06/25/14244120933639105658.jpg", title: "D型控制器", price: 456.23}
        ]
    };
  },
  methods: {
      sub(val,key){
        if(this.checkbox6.indexOf(key) == -1){
            this.checkbox6.push(key)
        }else{
            const index = this.checkbox6.indexOf(key)
            this.checkbox6.splice(index,1)
        }
          console.log(val,key)
          
          console.log(this.checkbox6)
      },
      submits(){
          this.$router.push({
                path: "/devebuy",
                query: {
                // deviceId: this.deviceId
                }
            }); 
      },
      sd(val){
          console.log(val)
      },
      cs(val){
          console.log(val)
      }
  },

};
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
@import "src/common/scss/variable.scss";
@import "src/common/scss/mixins.scss";
.list-wrapper {
  position: absolute;
  width: 100%;
  min-height: 100vh;
  background: #fff;
  .zl_upgrade{
      width: 94%;
      margin: auto;
      margin-top: 24px;
      text-align: center;
      border-bottom: 1px solid #f5f5f5;
      padding-bottom: 20px;
      .zl_l{
           p{
               &:first-child{
                   width: 80px;
                   height: 80px;
                   margin: auto;
                   border-radius: 50%;
                   background: #fcb009;
               }
               img{
                   width: 35px;
                   margin-top: 20px;
               }
               &:last-child{
                   font-size: 12px;
                   color: #969696;
                   margin-top: 10px;
               }
           }
      }
      .zl_ls{
           p{
               &:first-child{
                   width: 80px;
                   height: 80px;
                   margin: auto;
                   border-radius: 50%;
                   background: #c5c5c5;
               }
           }
      }      
      .zl_ll{
          img{
              width: 12px;
              margin-top: 40px;
          }
      }
  }
  .bth{
      position: absolute;
      top: 10px;
      right: 12px;
      width: 20px;
      height: 20px;
      overflow: hidden;
      p{
          position: absolute;
          top: 0px;
          left: 0px;
          width: 20px;
          height: 20px;
      }
  }

  .zl_sub{
      width: 94%;
      margin: auto;
      text-align: center;
      margin-top: 50px;
      p{
          padding: 10px 0px;
          font-size: 16px;
          color: #fff;
          background: #fc8c0a;
          width: 70%;
          margin: auto;
          border-radius: 10px;
          font-weight: 700;
      }
  }
}
.yd-checkbox-text{
    opacity: 0 !important;
}
.yd-checklist:after{
    border-bottom: none !important;
}
input {
  -webkit-user-select: auto;
  /*webkit浏览器*/
}
</style>
