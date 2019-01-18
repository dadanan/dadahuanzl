<template>
  <div class="list-wrapper">
      <!-- <yd-navbar title="我的订单" bgcolor="#fff" fixed fontsize="14px">
        <router-link to="/management" slot="left">
            <yd-navbar-back-icon>返回</yd-navbar-back-icon>
        </router-link>
    </yd-navbar>
    <div class="" style="width:100%;height:50px;"></div> -->
    <template>
        <div class="zl_tab">
            <div class="btn">
                <p>今日订单 :<span>123123</span></p>
            </div>
            <el-table :data="tableData" border size="small">
                <el-table-column prop="date" label="时间"></el-table-column>
                <el-table-column prop="name" label="状态"></el-table-column>
                <el-table-column prop="address" label="金额"></el-table-column>
                <el-table-column prop="price" label="场所"></el-table-column>
                <el-table-column prop="price1" label="消费内容"></el-table-column>
            </el-table>
        </div>
        <div class="zl_tab">
            <div class="btn">
                <p>历史订单 :<span>123123</span></p>
            </div>
            <el-table :data="tableData" border size="small">
                <el-table-column prop="date" label="时间"></el-table-column>
                <el-table-column prop="name" label="状态"></el-table-column>
                <el-table-column prop="address" label="金额"></el-table-column>
                <el-table-column prop="price" label="场所"></el-table-column>
                <el-table-column prop="price1" label="消费内容"></el-table-column>
            </el-table>
        </div>
        <div class="" style="width:100%;height:100px;"></div>
    </template>
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
        tableData: [{
          date: '2018',
          name: '已使用',
          address: '12231',
          price: '天上人间',
          price1: '天上人间消费了'
        },{
          date: '2018',
          name: '已使用',
          address: '12231',
          price: '天上人间',
          price1: '天上人间消费了'
        }]
    };
  },
  methods: {
      adddeve(){
          this.$router.push({
                path: "/devebuy",
                query: {
                // deviceId: this.deviceId
                }
            });  
        },
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
  background: #f5f5f5;
  .zl_upgrade{
      width: 100%;
      font-size: 18px;
      text-align: center;
      background: #fda111;
      background: -webkit-linear-gradient(90deg, #fe9298, #fc9566); /* Safari 5.1 - 6.0 */
      background: -o-linear-gradient(90deg, #fe9298, #fc9566); /* Opera 11.1 - 12.0 */
      background: -moz-linear-gradient(90deg, #fe9298, #fc9566); /* Firefox 3.6 - 15 */
      background: linear-gradient(90deg, #fe9298, #fc9566); /* 标准的语法 */
      padding: 20px 0px 20px 0px;
      .zl_img{
          img{
              width:70px;
              height:70px;
              background:red; 
              border-radius:50%;
          }
      }
      .bg-purple{
          text-align: left;
          margin-top: 10px;
          p{
              font-size: 14px;
              color: #fff;
              &:first-child{
                  font-size: 16px;
                  line-height: 28px;
              }
              &:last-child{
                  font-size: 14px;
                  line-height: 28px;
              }
          }
      }
      .zl_je{
          width: 94%;
          margin: auto;
          padding: 20px 0px 0px 0px;
          color: #fff;
          font-size: 14px;
          span{
              color: #fee350;
              font-size: 18px;
          }
      }
  }
}
 .zl_tab{
    width: 94%;
    margin: auto;
    padding-top: 10px;
    // margin-bottom: 80px;
    font-size: 14px;
    .btn{
        padding: 10px 0px;
        span{
            color: #fc9566;
            font-size: 18px;
        }
    }
  }
input {
  -webkit-user-select: auto;
  /*webkit浏览器*/
}
</style>
