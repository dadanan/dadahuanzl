<template>
  <div class="list-wrapper">
      <!-- <yd-navbar title="场地合作条款" bgcolor="#fff" fixed fontsize="14px">
        <router-link to="/audit" slot="left">
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
                            <p>场地审查</p>
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
                        <div class="zl_l">
                            <p><img :src="img3"></p>
                            <p>签约合作</p>
                        </div>
                    </div>
                </el-col>
            </el-row>
        </div>
         <div class="zl_img">
             <p></p>
             <p></p>
            <p>这是一个很长的条款Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.</p>
        </div>
        <div class="zl_sub">
            <p>同意</p>
        </div>
        <div class="" style="width:100%;height:100px;"></div>
    </template>
  </div>
</template>

<script type="text/ecmascript-6">
import Vue from 'vue';
import Store from "../wenkong/store";
import img from "./assets/sub.png"
import img2 from "./assets/shenhe.png"
import img3 from "./assets/results.png"
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
        input1:'',
    };
  },
  methods: {
      change(val){
          this.checklist3 = val    
      },
    //   terms(){
    //     this.$router.push({
    //         path: "/terms",
    //         query: {
    //         // deviceId: this.deviceId
    //         }
    //     });  
    //   },

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
      width: 94%;
      margin: auto;
      margin-top: 20px;
        img{
            width: 100%;
        }
        p{
            font-size: 12px;
            color: #969696;
            line-height: 18px;
            &:nth-child(2){
                font-size: 14px;
                color: #323232;
                font-weight: 700;
                padding: 10px 0px;
            }
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
