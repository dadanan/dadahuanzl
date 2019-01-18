<template>
  <div class="list-wrapper">
     <!-- <yd-navbar title="个人信息" bgcolor="#fff" fixed fontsize="14px">
        <router-link to="/about" slot="left">
            <yd-navbar-back-icon>返回</yd-navbar-back-icon>
        </router-link>
    </yd-navbar>
    <div class="" style="width:100%;height:50px;"></div> -->
    <yd-cell-group>
        <yd-cell-item arrow >
            <span slot="left">头像</span>
            <span slot="right" ><img :src="messa.headimgurl" style="width:50px;height:50px;background:#ccc;border-radius:50%;"></span>
        </yd-cell-item>
        <yd-cell-item arrow >
            <span slot="left">昵称</span>
            <span slot="right">{{messa.nickname}}</span>
        </yd-cell-item>
        <yd-cell-item arrow >
            <span slot="left">手机号</span>
            <span slot="right">13524422152</span>
        </yd-cell-item>
        <yd-cell-item type="label">
            <div slot="left">消息通知</div>
            <yd-switch slot="right" size="small" v-model="ydswitch"></yd-switch>
        </yd-cell-item>
    </yd-cell-group>
    <div class="create-dialog dialog" v-if="editDevFlag">
      <div class="confirm">
        <div class="confim-top">
          <textarea class="name" v-model="setDeviceName" v-text="deviceName"></textarea>
        </div>
        <div class="confim-bottom">
          <div class="but" @click="editDevFlag = false">取消</div>
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
  },

};
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
@import "src/common/scss/variable.scss";
@import "src/common/scss/mixins.scss";
.list-wrapper {
    .yd-navbar-center-title{
        font-size: 12px;
        
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
