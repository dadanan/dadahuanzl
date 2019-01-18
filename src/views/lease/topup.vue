<template>
  <div class="list-wrapper">
     <!-- <yd-navbar title="余额充值" bgcolor="#fff" fixed fontsize="14px">
        <router-link to="/balance" slot="left">
            <yd-navbar-back-icon>返回</yd-navbar-back-icon>
        </router-link>
    </yd-navbar>
    <div class="" style="width:100%;height:50px;"></div> -->
    <div class="zl_topup">
        <div class="zl_topup_top" @click="bill">
            <p>账单明细</p>
        </div>
        <div class="zl_topup_con">
            <div class="zl_topup_t">
                <p>当前余额(元)</p>
            </div>
            <div class="zl_topup_c">
                <p>12.123</p>
            </div>
            <div class="zl_topup_b">
                <div class="zl_topup_bl">
                    <p>可提现余额：120.00</p>
                </div>
                <div class="zl_topup_br">
                    <p>赠送金额：120.00</p>
                </div>
                <div class="clear"></div>
            </div>
        </div>
    </div>
    <div class="zl_topup_bot">
            <div class="zl_topup_bt">
                <p>充值金额</p>
            </div>  
            <div class="zl_topup_bc">
                <el-row :gutter="10">
                    <el-col :xs="8">
                        <div class="grid-content bg-purple">
                            <div class="zl_topup_t">
                                <p>冲5元</p>
                                <span>送123</span>
                            </div>
                        </div>
                    </el-col>
                    <el-col :xs="8">
                        <div class="grid-content bg-purple">
                            <div class="zl_topup_t">
                                <p>冲50元</p>
                                <span>送123</span>
                            </div>
                        </div>
                    </el-col>
                    <el-col :xs="8">
                        <div class="grid-content bg-purple">
                            <div class="zl_topup_t">
                                <p>冲100元</p>
                                <span>送123</span>
                            </div>
                        </div>
                    </el-col>
                    <el-col :xs="8">
                        <div class="grid-content bg-purple">
                            <div class="zl_topup_t">
                                <p>冲200元</p>
                                <span>送123</span>
                            </div>
                        </div>
                    </el-col>
                    <el-col :xs="8">
                        <div class="grid-content bg-purple">
                            <div class="zl_topup_t">
                                <p>冲300元</p>
                                <span>送123</span>
                            </div>
                        </div>
                    </el-col>
                    <el-col :xs="8">
                        <div class="grid-content bg-purple">
                            <div class="zl_topup_t">
                                <p>冲400元</p>
                                <span>送123</span>
                            </div>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </div>
        <div class="zl_topup_bb">
            <p>充值</p>
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
        reflect:false
    };
  },
  methods: {
      names(){
          console.log(11)
          this.editDevFlag = true
      },
      bill(){
        this.$router.push({
            path: "/bill",
            query: {
            // deviceId: this.deviceId
            }
        });
      },
      topup(){
          
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
    .zl_topup{
        width:94%;
        margin: auto;
        padding: 10px 0px 20px 0px;
        border-bottom: 1px solid #ccc;
        .zl_topup_top{
            text-align: right;
            font-size: 14px;
            color:#323232 ;
        }
        .zl_topup_con{
            text-align: center;
            .zl_topup_t{
                font-size: 14px;
                color: #323232;
                font-weight: 700;
                padding: 20px 0px;
            }
            .zl_topup_c{
                width: 150px;
                height: 150px;
                margin: auto;
                border-radius: 50%;
                line-height: 150px;
                font-size: 28px;
                color: #fff;
                font-weight: 700;
                text-align: center;
                background: #75f94c;
            }
            .zl_topup_b{
                margin-top: 20px;
                font-size: 14px;
                color: #323232;
                .zl_topup_bl{
                    width: 47%;
                    padding: 15px 0px;
                    background: #469ad0;
                    float: left;
                }
                .zl_topup_br{
                    width: 47%;
                    padding: 15px 0px;
                    background: #f8cc46;
                    float: right;
                }
            }
        }
    }
    .zl_topup_bot{
        width: 94%;
        margin: auto;
        margin-top: 20px;
        .zl_topup_bt{
            font-size: 14px;
            color: #323232;
            padding: 10px 0px;
        }
        .zl_topup_bc{
            text-align: center;
            .bg-purple{
                border: 3px solid #709af8;
                height: 60px;
                margin: 5px 0px;
                border-radius: 10px;
                .zl_topup_t{
                    font-size: 14px;
                    padding: 10px 0px;
                    span{
                        color: red;
                        font-size: 12px;
                    }
                }
            }
        }
    }
    .zl_topup_bb{
        width: 94%;
        margin: auto;
        margin-top: 20px;
        p{
            width: 100%;
            padding: 10px 0px;
            background: #76bef9;
            text-align: center;
            font-size: 14px;
            color: #fff;
            font-weight: 700;
            border-radius: 10px;
        }
    }
}
.clear{ clear:both} 
input {
  -webkit-user-select: auto;
  /*webkit浏览器*/
}
</style>
