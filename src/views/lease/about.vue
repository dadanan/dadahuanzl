<template>
  <div class="list-wrapper">
    <template>
            <div class="zl">
                <div class="zl_top">
                    <ul class="top_l">
                        <li><img :src="messa.headimgurl"></li>
                    </ul>
                    <div class="top_r" @click="about">
                        <ul class="top_text">
                            <li>{{messa.nickname}}</li>
                            <li style="font-size:12px;margin-top:4px;">{{messa.country}}</li>
                        </ul>
                        <ul class="top_img">
                            <li><img :src="img"></li>
                        </ul>
                    </div>
                    <ul style="clear:both"></ul>
                </div>
            </div>
            <!-- 钱包， -->
            <div class="zl_c">
               <div class="zl_con" @click="balance">
                   <ul>
                       <li>{{messa.currBal}}</li>
                       <li>余额(元)</li>
                   </ul>
               </div>
               <div class="zl_con">
                   <ul>
                       <li>未购买</li>
                       <li>包时套餐</li>
                   </ul>
               </div>
               <div class="zl_con">
                   <ul>
                       <li>0张</li>
                       <li>现金券</li>
                   </ul>
               </div>
               <div class="zl_con" @click="integral">
                   <ul>
                       <li>0</li>
                       <li>积分</li>
                   </ul>
               </div>
               <div class="zl_con" @click="balance">
                   <ul>
                       <li class="imgs"></li>
                       <li>我的钱包</li>
                   </ul>
               </div>
               <div style="clear:both"></div>
            </div>
            <!-- 订单 -->
            <div class="zl_c">
               <div class="zl_con">
                   <ul>
                       <li><img :src="img2" style="width:16px;"></li>
                       <li>净化中</li>
                   </ul>
               </div>
               <div class="zl_con">
                   <ul>
                       <li><img :src="img3" style="width:21px;"></li>
                       <li>已完成</li>
                   </ul>
               </div>
               <div class="zl_con">
                   <ul>
                       <li><img :src="img4" style="width:24px;"></li>
                       <li>取消</li>
                   </ul>
               </div>
               <div class="zl_con">
                   <ul>
                       <li><img :src="img5" style="width:24px;"></li>
                       <li>故障</li>
                   </ul>
               </div>
               <div class="zl_con" @click="order">
                   <ul>
                       <li class="imgl"></li>
                       <li>订单管理</li>
                   </ul>
               </div>
               <div style="clear:both"></div>
            </div>
            <!-- 商家 -->
            <div class="zl_c zl_z">
               <div class="zl_con" @click="management">
                   <ul>
                       <li><img :src="img6" style="width:30px;"></li>
                       <li>运营商</li>
                   </ul>
               </div>
               <div class="zl_con">
                   <ul>
                       <li><img :src="img7" style="width:30px;"></li>
                       <li>物业</li>
                   </ul>
               </div>
               <div class="zl_con">
                   <ul>
                       <li><img :src="img8" style="width:30px;" @click="partner"></li>
                       <li>成为运营商</li>
                   </ul>
               </div>
               <div class="zl_con">
                   <ul>
                       <li><img :src="img9" style="width:30px;"></li>
                       <li>客服</li>
                   </ul>
               </div>
               <div class="zl_con">
                   <ul>
                       <li> <img :src="img10" style="width:30px;" @click="hehuo"></li>
                       <li>代理加盟</li>
                   </ul>
               </div>
               <div style="clear:both"></div>
            </div>
            <!-- 设备 -->
            <div class="zl_c zl_s">
               <div class="zl_con">
                   <ul>
                       <li><img :src="img11" style="width:30px;"></li>
                       <li>附近设备</li>
                   </ul>
               </div>
               <div class="zl_con" @click="collection">
                   <ul>
                       <li><img :src="img12" style="width:30px;"></li>
                       <li>我的收藏</li>
                   </ul>
               </div>
               <div class="zl_con" @click="abous">
                   <ul>
                       <li><img :src="img13" style="width:30px;"></li>
                       <li>关于我们</li>
                   </ul>
               </div>
               <div class="zl_con" @click="opinion">
                   <ul>
                       <li><img :src="img14" style="width:30px;"></li>
                       <li>意见反馈</li>
                   </ul>
               </div>
               <div class="zl_con" @click="fault">
                   <ul>
                       <li> <img :src="img15" style="width:30px;"></li>
                       <li>常见故障</li>
                   </ul>
               </div>
               <div style="clear:both"></div>
            </div>
            <div class="" style="width:100%;height:100px;"></div>
    </template>
  </div>
</template>

<script type="text/ecmascript-6">
import Vue from 'vue';
import {h5Register,login } from "../wenkong/api";
import Store from "../wenkong/store";
import img from "./assets/right_l.png"
import img1 from "./assets/mn.png"

import img2 from "./assets/jinghua.png"
import img3 from "./assets/yiwanc.png"
import img4 from "./assets/quxiao.png"
import img5 from "./assets/guzhang.png"

import img6 from "./assets/yunying.png"
import img7 from "./assets/wuye.png"
import img8 from "./assets/yunyings.png"
import img9 from "./assets/kefu.png"
import img10 from "./assets/jiameng.png"

import img11 from "./assets/dizhi.png"
import img12 from "./assets/shoucang.png"
import img13 from "./assets/guanyu.png"
import img14 from "./assets/yijian.png"
import img15 from "./assets/changjian.png"

export default {
  components: {
  },
  data(){
    return {
      img:img,
      img1:img1,
      img2:img2,
      img3:img3,
      img4:img4,
      img5:img5,
      img6:img6,
      img7:img7,
      img8:img8,
      img9:img9,
      img10:img10,
      img11:img11,
      img12:img12,
      img13:img13,
      img14:img14,
      img15:img15,
      messa:{},
      lists : {}
    };
  },
  created () {
      this.user()
  },
  methods: {
      user(){
       var outTradeNos = JSON.parse(Store.fetch("userInfo"))
       console.log(outTradeNos.userInfo.headimgurl)
       this.messa = outTradeNos.userInfo
      },
      about(){
        this.$router.push({
            path: "/setup",
            query: {
            // deviceId: this.deviceId
            }
        });
      },
      collection(){
        this.$router.push({
            path: "/collection",
            query: {
            // deviceId: this.deviceId
            }
        });
      },
      order(){
        this.$router.push({
            path: "/order",
            query: {
            // deviceId: this.deviceId
            }
        });
      },
      balance(){
        this.$router.push({
            path: "/balance",
            query: {
            // deviceId: this.deviceId
            }
        });  
      },
      integral(){
        this.$router.push({
            path: "/integral",
            query: {
            // deviceId: this.deviceId
            }
        });  
      },
      abous(){
        this.$router.push({
            path: "/abous",
            query: {
            // deviceId: this.deviceId
            }
        });  
      },
      opinion(){
        this.$router.push({
            path: "/opinion",
            query: {
            // deviceId: this.deviceId
            }
        });  
      },
      fault(){
        this.$router.push({
            path: "/fault",
            query: {
            // deviceId: this.deviceId
            }
        });  
      },
      partner(){
        this.$router.push({
            path: "/partner",
            query: {
            // deviceId: this.deviceId
            }
        });  
      },
      hehuo(){
        this.$router.push({
            path: "/hehuo",
            query: {
            // deviceId: this.deviceId
            }
        });  
      },
      management(){
        if(this.messa.registerNo){
            login({openId:Store.fetch("Ticket"),registerNo:this.messa.registerNo}).then(res=>{
                Store.save("user",JSON.stringify(res.data)),
                this.$router.push({
                    path: "/management",
                    query: {
                    // deviceId: this.deviceId
                    }
                });
            })
        }else{
            this.$router.push({
                path: "/registered",
                query: {
                // deviceId: this.deviceId
                }
            });
        }
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
  height: 100%;
  background: #f5f5f5;
  .zl{
      width: 100%;
      background: #fff;
      .zl_top{
        padding: 10px 0px;
        width: 94%;
        margin: auto;
        .top_l{
            width: 80px;
            height: 80px;
            background: #ccc;
            border-radius: 50%;
            float: left;
            img{
                width: 100%;
            }
        }
        .top_r{
            float: left;
            width: 72%;
            font-size: 16px;   
            line-height: 24px;
            padding-top: 16px;
            padding-left: 8%;
            .top_text{
                float: left;

            }
            .top_img{
                float: right;
                img{
                    width:13px; 
                    margin:13px 0px 0px 10px;
                }
            }
        }
      } 
  }
}
.zl_c{
    width: 94%;
    margin: auto;
    background: #fff;
    margin-top: 16px;
    padding: 18px 0px;
    border-radius: 6px;
    .zl_con{
        width: 20%;
        text-align: center;
        font-size: 12px;
        line-height: 32px;
        float: left;
        li{
            &:first-child{
                color: #808080;
                height: 30px;
            }
            &:last-child{
                font-weight: 600;
            }
        }
        .imgs{
            width: 28px;
            height:28px;
            margin-left: 22px;
            text-align: center;
            background: url(./assets/mn.png) no-repeat center center;
            background-size: 26px;
        }
        .imgl{
            width: 28px;
            height:28px;
            margin-left: 22px;
            text-align: center;
            background: url(./assets/dingdan.png) no-repeat center center;
            background-size: 26px;
        }
        // &:last-child{
        //     background:url(./assets/kohao.png) no-repeat center left;
        // }    
    }
}
.zl_z{
    .zl_con{
        li{
            &:first-child{
                color: #808080;
                height:40px;
            }
        }
    }    
}
.zl_s{
   .zl_con{
       width: 25%;
   } 
}
.yd-grids-5:before{
    border: none;
}

input {
  -webkit-user-select: auto;
  /*webkit浏览器*/
}
</style>
