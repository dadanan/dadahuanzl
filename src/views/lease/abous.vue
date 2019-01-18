<template>
  <div class="list-wrapper">
    <!-- <yd-navbar title="关于我们" bgcolor="#fff" fixed fontsize="14px">
        <router-link to="/about" slot="left">
            <yd-navbar-back-icon>返回</yd-navbar-back-icon>
        </router-link>
    </yd-navbar>
    <div class="" style="width:100%;height:50px;"></div> -->
    <div class="zl_dd">
       <p>关于我们</p>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Vue from 'vue';
import Store from "../wenkong/store";

export default {
  components: {
  },
  data(){
    return {
    };
  },
  methods: {
  },

};
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
@import "src/common/scss/variable.scss";
@import "src/common/scss/mixins.scss";
.list-wrapper {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  min-height:100vh;
  background: #fff;
  .zl_dd{
      width: 94%;
      margin: auto;
      span{
          font-size: 14px;
          &:first-child{
              float: left;
              line-height: 44px;
          }
          &:nth-child(2){
              float: right;
          }
      }
  }
  .zl_ddt{
    //   padding: 10px 0px;
      font-size: 14px;
      color: #323232;
  }
  .zl_tab{
    margin-bottom: 80px;
  }
}

input {
  -webkit-user-select: auto;
  /*webkit浏览器*/
}
</style>
