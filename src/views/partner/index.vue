<template>
  <div class="list-wrapper">
    <template>
        <div class="zl_upgrade">
            <p>申请运营商</p>
        </div>
        <div class="">
            <yd-cell-group>
                <yd-cell-item>
                    <span slot="left">  姓名：</span>
                    <yd-input slot="right" required  v-model="input1" type="text" placeholder="请输入用户名" :show-success-icon="false" :show-error-icon="false"></yd-input>
                </yd-cell-item>
                <yd-cell-item>
                    <span slot="left"> 手机号：</span>
                    <yd-input slot="right" required v-model="input1" regex="mobile" placeholder="请输入手机号码" :show-success-icon="false" :show-error-icon="false"></yd-input>
                </yd-cell-item>
                <yd-cell-item>
                    <span slot="left"> 经营区域：</span>
                    <yd-input slot="right" required  v-model="input1" placeholder="请输入经营区域" :show-success-icon="false" :show-error-icon="false"></yd-input>
                </yd-cell-item>
                <yd-cell-item>
                    <span slot="left"> 经营场所：</span>
                    <yd-input slot="right" required  v-model="input1" placeholder="请输入经营场所" :show-success-icon="false" :show-error-icon="false"></yd-input>
                </yd-cell-item>
                <yd-cell-item>
                    <span slot="left">预期数量：</span>
                    <yd-input slot="right" required  v-model="input1" placeholder="请输入预期数量" :show-success-icon="false" :show-error-icon="false"></yd-input>
                </yd-cell-item>
            </yd-cell-group>
        </div>
        <div class="zl_sub">
            <p>提交</p>
        </div>
        <div class="" style="width:100%;height:100px;"></div>
    </template>
  </div>
</template>

<script type="text/ecmascript-6">
import Vue from 'vue';
import Store from "../wenkong/store";
// import img from "./assets/right_l.png"

export default {
  components: {
  },
  data(){
    return {
        input1:'',
    };
  },
  methods: {
    //   fault(){
    //     this.$router.push({
    //         path: "/fault",
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
  background: #ffffff;
  .zl_upgrade{
      width: 100%;
      font-size: 18px;
      text-align: center;
      padding: 15px 0px 15px 50px;
      background: #fda111;
      p{
          width: 52%;
          margin: auto;
          padding: 15px 0px;
          background: url(./assets/loc.png) no-repeat center left;
          background-size: 30px ;
          font-weight: 700;
          color: #fff;
      }
  }
  .zl_sub{
      width: 94%;
      margin: auto;
      text-align: center;
      margin-top: 150px;
      p{
          padding: 10px 0px;
          font-size: 16px;
          color: #fff;
          background: #fda111;
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
