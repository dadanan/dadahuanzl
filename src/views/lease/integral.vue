<template>
  <div class="list-wrapper">
     <!-- <yd-navbar title="积分管理" bgcolor="#fff" fixed fontsize="14px">
        <router-link to="/about" slot="left">
            <yd-navbar-back-icon>返回</yd-navbar-back-icon>
        </router-link>
    </yd-navbar>
    <div class="" style="width:100%;height:50px;"></div> -->
    <div class="zl_sc">
        <div class="zl_t">
            <div class="zl_t_te">
                <p>我的总积分</p>
                <p>121231231(元)</p>
            </div>
            <div class="grid-content zl_s">
                <el-button size="mini" type="primary" @click="reflect = true">兑换余额</el-button>
                <el-button size="mini" type="primary" @click="topup">前往商城使用</el-button>
            </div>
        </div>
    </div>
    <div class="zl_t">
        <p>积分列表</p>
    </div>
    <div class="zl_tab">
        <el-table :data="tableData" border style="width: 100%;margin-top:20px;">
            <el-table-column prop="date" label="日期"></el-table-column>
            <el-table-column prop="name" label="积分额"></el-table-column>
            <el-table-column prop="address" label="消费内容"></el-table-column>
        </el-table>
    </div>
    <!-- 体现 -->
    <div class="create-dialog dialog" v-if="reflect">
      <div class="confirm">
        <!-- <div class="confim-top">
          <textarea class="name" v-model="setDeviceName" v-text="deviceName"></textarea>
        </div> -->
        <div class="reflect">
            <p>可用积分：<input type="text">(分)</p>
            <!-- <p>注：提现采用T+3，并非即时到帐如需加急，请联系客服。400-820-0000</p> -->
        </div>
        <div class="reflect">
            <p>兑换金额：<input type="text">(元)</p>
            <!-- <p>注：提现采用T+3，并非即时到帐如需加急，请联系客服。400-820-0000</p> -->
        </div>
        <div class="confim-bottom">
          <div class="but" @click="reflect = false">取消</div>
          <div class="but create" @click="editDev">确定</div>
        </div>
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
        editDevFlag:false,
        ydswitch:false,
        setDeviceName:'',
        deviceName:'12',
        reflect:false,
         tableData: [{
          date: '2016-05-02',
          name: '12',
          address: '12'
        }, {
          date: '2016-05-04',
          name: '12',
          address: '车票'
        }, {
          date: '2016-05-04',
          name: '12',
          address: '车票'
        }, {
          date: '2016-05-04',
          name: '12',
          address: '车票'
        }, {
          date: '2016-05-04',
          name: '12',
          address: '车票'
        }]
    };
  },
  methods: {
      names(){
          console.log(11)
          this.editDevFlag = true
      },
      topup(){
        this.$router.push({
            path: "/topup",
            query: {
            // deviceId: this.deviceId
            }
        });
      },
      editDev(){

      }
  },

};
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
@import "src/common/scss/variable.scss";
@import "src/common/scss/mixins.scss";
.list-wrapper {
    width: 100%;
    height: 100vh;
    background: #fff;
    .zl_securities{
        width: 94%;
        margin: auto;
        margin-top: 20px;
    }
    .zl_t{
        width: 94%;
        margin: auto;
        padding: 20px 0px 0px 0px;
        font-size: 14px;
        color: #323232;
    }
    .zl_tab{
        width: 94%;
        margin: auto;
    }
    .zl_sc{
        width: 94%;
        margin: auto;
        margin-top: 16px;
        background: #a3cbfa;
        .zl_s{
            text-align: right;
        }
        .zl_t{
            padding: 16px;
            .zl_t_te{
                p{
                    &:first-child{
                        font-size: 18px;
                        color: #323232;
                        font-weight: 700;
                    }
                    &:last-child{
                        font-size: 28px;
                        color: #fff;
                        font-weight: 700;
                        text-align: center;
                        padding: 30px 0px;
                    }
                }
            }
            .zl_t_t{
                font-size: 14px;
            }
            .zl_t_z{
                 p{
                    &:last-child{
                        padding: 20px 0px;
                    }
                }
            }
        }
    }
}
.dialog {
    position: fixed;
    z-index: 2000;
    bottom: 0;
    right: 0;
    left: 0;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
    .confirm {
      width: 80%;
      background-color: #ffffff;
      border-radius: 5px;
      font-size: 15px;
      animation: zoom-in 0.15s ease forwards;
      .reflect{
          padding: 20px 20px 0px 20px;
          input{
              border:1px solid #ccc;
              width: 160px;
              height: 30px;
              margin-right: 10px;
              text-indent: 10px;
          }
          p{
              &:first-child{
                  margin-bottom: 20px;
              }
              &:last-child{
                  font-size: 12px;
                  color: #969696;
              }
          }
      }
      .confim-top {
        padding-top: 20px;
        padding-bottom: 20px;
        background: #2689ee;
        color: #ffffff;
        text-align: center;
        position: relative;
        overflow: hidden;
        .name {
          text-align: left;
          width: 100%;
          padding-left: 15px;
          padding-right: 15px;
          background: none;
          float: left;
          border: none;
          color: #93c4f7;
          font-size: 14px;
          min-height: 50px;
        }
        & p {
          line-height: 24px;
          &:nth-child(1) {
            font-size: 16px;
            margin-bottom: 5px;
          }
        }
        & ul {
          width: 205px;
          margin: 0 auto;
          & li {
            text-align: left;
            & p {
              display: inline-block;
              text-align: left;
              font-size: 14px !important;
              margin-bottom: 0px !important;
            }
          }
        }
      }
      .confim-content {
        padding: 20px 10px;
        textarea {
          width: 100%;
          height: 100px;
          border: none;
        }
      }
      .confim-bottom {
        background: #ffffff;
        padding: 20px 20px;
        position: relative;
        overflow: hidden;
        font-size: 14px;
        .but {
          width: 46%;
          height: 40px;
          line-height: 40px;
          text-align: center;
          border: 1px solid #2689ee;
          color: #2689ee;
          border-radius: 5px;
          float: left;
          &:nth-child(2) {
            float: right;
            &.create {
              background: #2689ee;
              color: #ffffff;
            }
          }
        }
        .but1 {
          width: 100%;
          height: 40px;
          line-height: 40px;
          text-align: center;
          border: 1px solid #2689ee;
          color: #2689ee;
          border-radius: 5px;
        }
      }
    }
  }
input {
  -webkit-user-select: auto;
  /*webkit浏览器*/
}
</style>
