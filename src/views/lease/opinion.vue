<template>
  <div class="list-wrapper">
    <!-- <yd-navbar title="意见反馈" bgcolor="#fff" fixed fontsize="14px">
        <router-link to="/about" slot="left">
            <yd-navbar-back-icon>返回</yd-navbar-back-icon>
        </router-link>
    </yd-navbar>
    <div class="" style="width:100%;height:50px;"></div> -->
    <div class="zl_dd">
        <!-- <yd-cell-group>
            <yd-cell-item type="radio">
                <span slot="left">单选一</span>
                <input slot="right" type="radio" value="Lili" v-model="picked"/>
            </yd-cell-item>

            <yd-cell-item type="radio">
                <span slot="left">单选二</span>
                <input slot="right" type="radio" value="Lucy" v-model="picked"/>
            </yd-cell-item>

            <yd-cell-item>
                <span slot="left">选中的值：</span>
                <span slot="right">{{picked}}</span>
            </yd-cell-item>
        </yd-cell-group> -->
       <el-input type="textarea" :autosize="{ minRows: 6, maxRows: 4}" placeholder="请输入内容" v-model="textarea3" @change="chang"></el-input>
       <p><span>{{num}}</span>/200</p>
    </div>
    <div class="zl_p">
        <p>提交</p>
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
        textarea3:'',
        num:0
    };
  },
  methods: {
      chang(val){
          console.log(val)
      }
  },
  watch: {
      textarea3(val){
          if(val.length<200){
              this.num = val.length
          }else{
              console.log("超出200了;")
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
  top: 0px;
  left: 0px;
  width: 100%;
  min-height:100vh;
  background: #fff;
  .zl_dd{
      width: 94%;
      margin: auto;
      margin-top: 20px;
      text-align: right;
      p{
          padding: 4px 0px;
      }
  }
  .zl_p{
      width: 94%;
      margin: auto;
      padding: 10px 0px;
      text-align: center;
      font-size: 14px;
      background: #589ef8;
      color: #fff;
      border-radius: 10px;
      margin-top: 50px;
  }
}
input {
  -webkit-user-select: auto;
  /*webkit浏览器*/
}
</style>
