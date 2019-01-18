<template>
  <div class="list-wrapper">
    <div class="zl_mess">
        <p>恭喜您成为我们的贵宾用户，我们可以给您提供最佳的用户方式恭喜您成为我们的贵宾用户，我们可以给您提供最佳的用户方式</p>
        <p>2017-12-12</p>
    </div>
    <div class="zl_mess">
        <p>恭喜您成为我们的贵宾用户，我们可以给您提供最佳的用户方式恭喜您成为我们的贵宾用户，我们可以给您提供最佳的用户方式</p>
        <p>2017-12-12</p>
    </div>
    <div class="zl_mess">
        <p>恭喜您成为我们的贵宾用户，我们可以给您提供最佳的用户方式恭喜您成为我们的贵宾用户，我们可以给您提供最佳的用户方式</p>
        <p>2017-12-12</p>
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
    padding-top: 20px;
 .zl_mess{
     width: 94%;
     margin: auto;
     padding: 10px 20px;
     margin-top: 20px;
     border-radius: 4px;
     font-size: 14px;
     background: #fff;
     color: #323232;
     p{
         line-height: 28px;
         &:last-child{
             margin-top: 20px;
             text-align: right;
         }
     }
 }
}

input {
  -webkit-user-select: auto;
  /*webkit浏览器*/
}
</style>
