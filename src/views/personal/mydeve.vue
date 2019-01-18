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
                    <el-col :span="12">
                        <div class="grid-content zl_img1">
                            <p>设备数量:<span>123</span></p>
                        </div>
                    </el-col>
                    <el-col :span="12">
                        <div class="grid-content bg-purple1">
                            <p>合计分润(元):<span>1231</span></p>
                        </div>
                    </el-col>
                </el-row>
           </div>
        </div>
        
        <div class="zl_tab">
            <div class="btn">
                <el-button round  type="primary" size="small" @click="adddeve">添加设备</el-button>
            </div>
            <el-table :data="tableData" border size="small" max-width="20px">
                <el-table-column prop="date" label="型号"></el-table-column>
                <el-table-column prop="name" label="场所"></el-table-column>
                <el-table-column prop="address" label="状态"></el-table-column>
                <el-table-column prop="price" label="累计分润"></el-table-column>
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
          date: 'A型控制器',
          name: '天上人间',
          address: '已使用',
          price: '123'
        },{
          date: 'A型控制器',
          name: '天上人间',
          address: '已使用',
          price: '123'
        },{
          date: 'A型控制器',
          name: '天上人间',
          address: '已使用',
          price: '123'
        },{
          date: 'A型控制器',
          name: '天上人间',
          address: '已使用',
          price: '123'
        },{
          date: 'A型控制器',
          name: '天上人间',
          address: '已使用',
          price: '123'
        },{
          date: 'A型控制器',
          name: '天上人间',
          address: '已使用',
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
      adddeve(){
          this.$router.push({
                path: "/equipment",
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
    margin-bottom: 80px;
    text-align: right;
    .btn{
        text-align: right;
        padding: 10px 0px;
    }
  }
input {
  -webkit-user-select: auto;
  /*webkit浏览器*/
}
</style>
