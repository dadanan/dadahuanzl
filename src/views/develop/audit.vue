<template>
  <div class="list-wrapper">
      <!-- <yd-navbar title="成为合作人" bgcolor="#fff" fixed fontsize="14px">
        <router-link to="/people" slot="left">
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
                            <p>资质审查</p>
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
        <div class="zl_img">
            <p><img :src="shz"></p>
        </div>
        <div class="zl_sub">
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
import img2 from "./assets/zizhi.png"
import img3 from "./assets/business.png"
import img1 from "./assets/right_l.png"
import lose from "./assets/lose.png"
import pass from "./assets/pass.png"
import shz from "./assets/shz.png"

export default {
  components: {
  },
  data(){
    return {
        img:img,
        img1:img1,
        img2:img2,
        img3:img3,
        lose:lose,
        pass:pass,
        shz:shz,
        input1:'',
    };
  },
  methods: {
      change(val){
          this.checklist3 = val    
      },
      terms(){
        this.$router.push({
            path: "/terms",
            query: {
            // deviceId: this.deviceId
            }
        });  
      },

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
  .zl_img{
      width: 50%;
      margin: auto;
      text-align: center;
      margin-top: 50px;
      img{
          width: 100%;
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
.yd-checklist:after{
    border-bottom: none !important;
}
input {
  -webkit-user-select: auto;
  /*webkit浏览器*/
}
</style>
