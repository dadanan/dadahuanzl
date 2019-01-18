<template>
  <div class="list-wrapper">
      <div class="zi">
        <p>真适易洁伴您健康呼吸</p>
      </div>
      <div class="countdown">
        <el-row>
          <el-col :span="11">
            <div class="grid-content bg-purple">
              <p>59</p>
              <p>min</p>
            </div>
          </el-col>
          <el-col :span="2">
            <div class="grid-content bg-purple1">
              <p>:</p>
            </div>
          </el-col>
          <el-col :span="11">
            <div class="grid-content bg-purple">
              <p>59</p>
              <p>s</p>
            </div>
          </el-col>
        </el-row>
      </div>
      <div :class=" btn ? 'btn':'btn1'" @click="btns">
        <p>开启</p>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Vue from 'vue';
import Store from "../wenkong/store";
// import img from "./assets/dd.png"
export default {
  components: {
  },
  data(){
    return {
      btn:false
    };
  },
  methods: {
    btns(){
      if(this.btn){
        this.btn = false
      }else{
        this.btn = true
      }
    }
   }
};
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
@import "src/common/scss/variable.scss";
@import "src/common/scss/mixins.scss";
.list-wrapper {
  position: absolute;
  width: 100%;
  min-height: 100vh;
  background: url(./assets/bg.png) no-repeat center center;
  background-size: 100% 100%;
  position: relative;
  .zi{
    position: absolute;
    top: 6%;
    left: 50%;
    font-size: 16px;
    color: #fff;
    margin-left: -80px;
    &::after{
      content: "一";
      position: absolute;
      left: -24px;
      top: 0px;
    }
    &::before{
      content: "一";
      position: absolute;
      right: -24px;
      top: 0px;
    }
  }
  .countdown{
    width: 60%;
    margin: auto;
    position: absolute;
    top: 36%;
    left: 50%;
    margin-left: -30%;
    text-align: center;
    p{
      &:first-child{
        font-size: 60px;
        font-weight: 900;
        color: #fff;
      }
      &:last-child{
        font-size: 14px;
        color: #ccc;
      }
    }
    .bg-purple1{
      p{
        font-size: 60px;
        font-weight: 900;
        color: #fff;
      }
    }
  }
  .btn{
    width: 50%;
    position: absolute;
    bottom: 80px;
    left: 50%;
    margin-left: -25%;
    text-align: center;
    p{
      font-size: 18px;
      font-weight: 700;
      color: #fff;
      padding: 10px 0px;
      background: #c5c5c5;
      border-radius: 20px;
    }
  }
    .btn1{
    width: 50%;
    position: absolute;
    bottom: 80px;
    left: 50%;
    margin-left: -25%;
    text-align: center;
    p{
      font-size: 18px;
      font-weight: 700;
      color: #fff;
      padding: 10px 0px;
      background: #bad80f;
      border-radius: 20px;
    }
  }
}
input {
  -webkit-user-select: auto;
  /*webkit浏览器*/
}
</style>
