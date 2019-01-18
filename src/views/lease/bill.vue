<template>
  <div class="list-wrapper">
    <!-- <yd-navbar title="充值账单" bgcolor="#fff" fixed fontsize="14px">
        <router-link to="/topup" slot="left">
            <yd-navbar-back-icon>返回</yd-navbar-back-icon>
        </router-link>
    </yd-navbar>
    <div class="" style="width:100%;height:50px;"></div> -->
    <div class="zl_dd">
        <div>
            <yd-cell-group>
                <yd-cell-item>
                    <span slot="left">累计充值：1231</span>
                    <span slot="right">累计赠送：12123131</span>
                </yd-cell-item>
            </yd-cell-group>
        </div>
        <div class="zl_ddt">
            <p>账单明细</p>
        </div>
        <div class="zl_tab">
            <el-table :data="tableData" border style="width: 100%;margin-top:20px;">
                <el-table-column prop="date" label="充值时间"></el-table-column>
                <el-table-column prop="name" label="充值金额(元)"></el-table-column>
                <el-table-column prop="address" label="赠送金额"></el-table-column>
            </el-table>
        </div>
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
         tableData: [{
          date: '2016-05-02',
          name: '123123',
          address: '1231'
        }, {
          date: '2016-05-04',
          name: '1123',
          address: '1233'
        }]
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
