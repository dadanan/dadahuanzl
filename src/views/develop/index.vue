<template>
  <div class="list-wrapper">
    <!-- <yd-navbar title="设备合作" bgcolor="#fff" fixed fontsize="14px">
        <router-link to="/equipment" slot="left">
            <yd-navbar-back-icon>返回</yd-navbar-back-icon>
        </router-link>
    </yd-navbar>
    <div class="" style="width:100%;height:50px;"></div> -->
    <template>
        <div class="zl_img">
            <p></p>
            <p>《设备合作合作条款》</p>
            <p>这是一个很长的条款Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.</p>
        </div>
        <div class="" style="width:100%;height:100px;"></div>
    </template>
  </div>
</template>

<script type="text/ecmascript-6">
import Vue from 'vue';
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
  width: 100%;
  min-height: 100vh;
  background: #fff;
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
}
.yd-checklist:after{
    border-bottom: none !important;
}
input {
  -webkit-user-select: auto;
  /*webkit浏览器*/
}
</style>
