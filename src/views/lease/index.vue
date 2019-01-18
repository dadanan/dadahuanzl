<template>
  <div class="list-wrapper">
    <!-- <yd-navbar title="我的收藏" bgcolor="#fff" fixed fontsize="14px">
        <router-link to="/about" slot="left">
            <yd-navbar-back-icon>返回</yd-navbar-back-icon>
        </router-link>
    </yd-navbar>
    <div class="" style="width:100%;height:50px;"></div> -->
    <div class="zl_sc">
        <div class="zl_t">
           <el-row :gutter="10">
                <el-col :xs="4">
                    <div class="grid-content bg-purple">
                        <img src="" style="width:50px;height:50px;background:#ccc;">
                    </div>
                </el-col>
                <el-col :xs="9" class="zl_t_l">
                    <div class="grid-content bg-purple-light">
                        <p>是可敬的合肥12312科</p>
                    </div>
                </el-col>
                <el-col :xs="11" class="zl_t_r">
                    <div class="grid-content bg-purple-light">
                        <el-button size="mini" type="warning" @click="names">备注名</el-button>
                        <el-button size="mini" type="success">删除</el-button>
                    </div>
                </el-col>
            </el-row>
            <el-row :gutter="10">
                <el-col :xs="18">
                    <div class="grid-content bg-purple zl_t_t">
                        <p>场所:天上人间</p>
                        <p>地址:上海市上海市上海市上海市上海</p>
                    </div>
                </el-col>
                <el-col :xs="6" class="zl_t_l">
                    <div class="grid-content bg-purple-light">
                        <el-button size="mini" type="primary">去这里</el-button>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
    
     <div class="zl_sc">
        <div class="zl_t">
           <el-row :gutter="10">
                <el-col :xs="4">
                    <div class="grid-content bg-purple">
                        <img src="" style="width:50px;height:50px;background:#ccc;">
                    </div>
                </el-col>
                <el-col :xs="9" class="zl_t_l">
                    <div class="grid-content bg-purple-light">
                        <p>是可敬的合肥12312科</p>
                    </div>
                </el-col>
                <el-col :xs="11" class="zl_t_r">
                    <div class="grid-content bg-purple-light">
                        <el-button size="mini" type="warning">备注名</el-button>
                        <el-button size="mini" type="success">删除</el-button>
                    </div>
                </el-col>
            </el-row>
            <el-row :gutter="10">
                <el-col :xs="18">
                    <div class="grid-content bg-purple zl_t_t">
                        <p>场所:天上人间</p>
                        <p>地址:上海市上海市上海市上海市上海</p>
                    </div>
                </el-col>
                <el-col :xs="6" class="zl_t_l">
                    <div class="grid-content bg-purple-light">
                        <el-button size="mini" type="primary">去这里</el-button>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
      <div class="zl_sc">
        <div class="zl_t">
           <el-row :gutter="10">
                <el-col :xs="4">
                    <div class="grid-content bg-purple">
                        <img src="" style="width:50px;height:50px;background:#ccc;">
                    </div>
                </el-col>
                <el-col :xs="9" class="zl_t_l">
                    <div class="grid-content bg-purple-light">
                        <p>是可敬的合肥12312科</p>
                    </div>
                </el-col>
                <el-col :xs="11" class="zl_t_r">
                    <div class="grid-content bg-purple-light">
                        <el-button size="mini" type="warning" @click="names">备注名</el-button>
                        <el-button size="mini" type="success">删除</el-button>
                    </div>
                </el-col>
            </el-row>
            <el-row :gutter="10">
                <el-col :xs="18">
                    <div class="grid-content bg-purple zl_t_t">
                        <p>场所:天上人间</p>
                        <p>地址:上海市上海市上海市上海市上海</p>
                    </div>
                </el-col>
                <el-col :xs="6" class="zl_t_l">
                    <div class="grid-content bg-purple-light">
                        <el-button size="mini" type="primary">去这里</el-button>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
    <!-- 弹窗 -->
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
        deviceName:'12'
    };
  },
  methods: {
      names(){
          console.log(11)
          this.editDevFlag = true
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
    // .yd-navbar-center-title{
    //     font-size: 12px;
    // }
    .top{
        position: fixed;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 50px;
        background: #fff;
        opacity: 1;
    }
    .zl_sc{
        width: 94%;
        margin: auto;
        margin-top: 16px;
        background: #fff;
        .zl_t{
            padding: 10px;
            .zl_t_l{
                font-size: 14px;
                line-height: 20px;
            }
            .zl_t_t{
                font-size: 12px;
                color: #646464;
                line-height: 20px;
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
