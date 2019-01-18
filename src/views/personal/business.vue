<template>
  <div class="list-wrapper">
    <template>
        <div class="zl_upgrade">
            <el-row>
                <el-col :span="8">
                    <div class="grid-content zl_img">
                        <p><img :src="messa.headimgurl" style=""></p>
                    </div>
                </el-col>
                <el-col :span="16" style="width:50%;">
                    <div class="grid-content bg-purple">
                        <p>{{messa.nickname}}</p>
                        <p>13524422152</p>
                    </div>
                </el-col>
            </el-row>
           <div class="zl_je">
                <el-row>
                    <el-col :span="8">
                        <div class="grid-content zl_img1">
                            <p>场地:<span>123</span></p>
                        </div>
                    </el-col>
                    <el-col :span="8">
                        <div class="grid-content bg-purple1">
                            <p>合伙人:<span>1231</span></p>
                        </div>
                    </el-col>
                    <el-col :span="8">
                        <div class="grid-content bg-purple1">
                            <p>投资客:<span>1231</span></p>
                        </div>
                    </el-col>
                </el-row>
           </div>
        </div>
        
        <div class="zl_tab">
            <el-tabs type="card" :stretch="true">
                <el-tab-pane label="关联场地">
                    <el-table :data="tableData" border size="small">
                        <el-table-column prop="date" label="场所"></el-table-column>
                        <el-table-column prop="name" label="地点"></el-table-column>
                        <el-table-column prop="address" label="数量"></el-table-column>
                        <el-table-column prop="price" label="累计分润"></el-table-column>
                        <el-table-column prop="price" label="本月分润"></el-table-column>
                    </el-table>
                    <div class="btn">
                        <el-button round  type="primary" size="small" @click="add(1)">发展场地</el-button>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="关联伙伴">
                    <el-table :data="tableData1" border size="small">
                        <el-table-column prop="date" label="姓名"></el-table-column>
                        <el-table-column prop="name" label="电话"></el-table-column>
                        <el-table-column prop="address" label="场所数量"></el-table-column>
                        <el-table-column prop="price" label="累计分润"></el-table-column>
                        <el-table-column prop="price" label="本月分润"></el-table-column>
                    </el-table>
                    <div class="btn">
                        <el-button round  type="primary" size="small" @click="add(2)">发展合伙人</el-button>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="关联投资人">
                    <el-table :data="tableData2" border size="small">
                        <el-table-column prop="date" label="姓名"></el-table-column>
                        <el-table-column prop="name" label="电话"></el-table-column>
                        <el-table-column prop="address" label="设备数量"></el-table-column>
                        <el-table-column prop="price" label="累计分润"></el-table-column>
                        <el-table-column prop="price" label="本月分润"></el-table-column>
                    </el-table>
                    <div class="btn">
                        <el-button round  type="primary" size="small" @click="add(3)">发展投资客</el-button>
                    </div>
                </el-tab-pane>
            </el-tabs>
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
          date: '天上人间',
          name: '天上人间',
          address: '12',
          price: '123'
        },{
          date: '天上人间',
          name: '天上人间',
          address: '12',
          price: '123'
        }],
        tableData1: [{
          date: '哒哒',
          name: '123123',
          address: '12',
          price: '123'
        },{
          date: '哒哒',
          name: '123123',
          address: '12',
          price: '123'
        }],
        tableData2: [{
          date: '哒哒12',
          name: '123123',
          address: '12',
          price: '123'
        },{
          date: '哒哒123',
          name: '123123',
          address: '12',
          price: '123'
        }],
        messa:{},
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
      add(val){
          if(val == 1){
             this.$router.push({
                path: "/site",
                query: {
                // deviceId: this.deviceId
                }
            });   
          }
          if(val == 2){
             this.$router.push({
                path: "/hehuo",
                query: {
                // deviceId: this.deviceId
                }
            });   
          }
          if(val == 3){
             this.$router.push({
                path: "/partner",
                query: {
                // deviceId: this.deviceId
                }
            });   
          } 
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
    margin-bottom: 80px;
    .btn{
        padding: 20px 0px;
        text-align: center;
    }
  }
input {
  -webkit-user-select: auto;
  /*webkit浏览器*/
}
</style>
