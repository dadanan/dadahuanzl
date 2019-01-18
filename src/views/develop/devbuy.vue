<template>
  <div class="list-wrapper">
      <!-- <yd-navbar title="设备购买" bgcolor="#fff" fixed fontsize="14px">
        <router-link to="/devesub" slot="left">
            <yd-navbar-back-icon>返回</yd-navbar-back-icon>
        </router-link>
    </yd-navbar>
    <div class="" style="width:100%;height:60px;"></div> -->
    <template>
        <div class="">
                <yd-list theme="4">
                    <yd-list-item v-for="(item, key) in list" :key="key">
                        <img slot="img" :src="item.img" @click="sub(item,key)">
                        <span slot="title" @click="sub(item,key)">{{item.title}}</span>
                        <yd-list-other slot="other" @click="sub(item,key)">
                            <div>
                                <span class="demo-list-price"><em>¥</em>{{item.price}}</span>
                            </div>
                            <div>数量：123123</div>
                            <div class="bth">
                                <yd-spinner width="100px" height="35px" v-model="item.its"></yd-spinner>
                                <!-- <span>[model: spinner7 = {{spinner7}}]</span> -->
                            </div>
                        </yd-list-other>
                    </yd-list-item>
                </yd-list>
        </div>
        <div class="zl_total">
            <p>总价为：<span>23131231</span></p>
        </div>
        <div class="zl_sub" @click="sd">
            <p>提交订单</p>
        </div>
        <yd-actionsheet :items="myItems1" v-model="show1" cancel="取消"></yd-actionsheet>
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
         show1: false,
        myItems1: [
            {
                label: '余额支付',
                callback: () => {
                    this.$dialog.toast({mes: '支付成功'});
                    /* 注意： callback: function() {} 和 callback() {}  这样是无法正常使用当前this的 */
                }
            },
            {
                label: '微信支付',
                callback: () => {
                    this.$dialog.toast({mes: '支付成功'});
                }
            }
        ],
        img:img,
        img1:img1,
        img2:img2,
        img3:img3,
        checked:true,
        bta:0,
        spinner7:2,
        checkbox6:[0],
        list: [
            {img: "//img1.shikee.com/try/2016/06/23/14381920926024616259.jpg", title: "A型控制器", price: 156.23,its:0},
            {img: "//img1.shikee.com/try/2016/06/21/10172020923917672923.jpg", title: "B型控制器", price: 256.23,its:0},
            {img: "//img1.shikee.com/try/2016/06/23/15395220917905380014.jpg", title: "C型控制器", price: 356.23,its:0},
            {img: "//img1.shikee.com/try/2016/06/25/14244120933639105658.jpg", title: "D型控制器", price: 456.23,its:0}
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
      sd(){
          console.log(this.list)
          this.show1 = true
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
  .bth{
      position: absolute;
      bottom: 10px;
      right: 0px;
      p{
          position: absolute;
          top: 0px;
          left: 0px;
          width: 20px;
          height: 20px;
      }
  }
  .zl_total{
      width: 94%;
      margin: auto;
      text-align: right;
      margin-top: 20px;
      padding-top: 10px;
      border-top:1px solid #ccc;
      font-size: 14px;
      font-weight: 700;
      span{
          color: #fc8c0a;
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
input {
  -webkit-user-select: auto;
  /*webkit浏览器*/
}
</style>
