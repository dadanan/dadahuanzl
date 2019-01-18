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
                            <p>场地数量:<span>123</span></p>
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
            <div class="zl_dd">
                <div class="zl_t">
                    <el-row>
                        <el-col :span="10">
                            <div class="grid-content zl_img">
                                <p>天上人间</p>
                            </div>
                        </el-col>
                        <el-col :span="14">
                            <div class="grid-content bg-purple1">
                                <p>地址：上海嘉定区</p>
                            </div>
                        </el-col>
                    </el-row>
                </div>
                <div class="zl_c">
                    <el-row>
                        <el-col :span="8">
                            <div class="grid-content zl_imgs">
                                <p>A型号 :<span> 75台</span></p>
                                <p>B型号 :<span> 75台</span></p>
                                <p>C型号 :<span> 75台</span></p>
                            </div>
                        </el-col>
                        <el-col :span="16">
                            <el-row>
                                <el-col :span="12">
                                    <div class="grid-content zl_img1">
                                        <p>今日营收(元)</p>
                                        <p>75</p>
                                    </div>
                                </el-col>
                                <el-col :span="12">
                                    <div class="grid-content zl_img1">
                                        <p>今日分润(元)</p>
                                        <p>75</p>
                                    </div>
                                </el-col>
                                <el-col :span="12">
                                    <div class="grid-content zl_img1">
                                        <p>累计营收(元)</p>
                                        <p>75</p>
                                    </div>
                                </el-col>
                                <el-col :span="12">
                                    <div class="grid-content zl_img1">
                                        <p>累计分润(元)</p>
                                        <p>75</p>
                                    </div>
                                </el-col>
                            </el-row>        
                        </el-col>             
                    </el-row>
                </div>
            </div>
        </div>

        <div class="zl_tab">
            <div class="zl_dd">
                <div class="zl_t">
                    <el-row>
                        <el-col :span="10">
                            <div class="grid-content zl_img">
                                <p>天上人间</p>
                            </div>
                        </el-col>
                        <el-col :span="14">
                            <div class="grid-content bg-purple1">
                                <p>地址：上海嘉定区</p>
                            </div>
                        </el-col>
                    </el-row>
                </div>
                <div class="zl_c">
                    <el-row>
                        <el-col :span="8">
                            <div class="grid-content zl_imgs">
                                <p>A型号 :<span> 75台</span></p>
                                <p>B型号 :<span> 75台</span></p>
                                <p>C型号 :<span> 75台</span></p>
                            </div>
                        </el-col>
                        <el-col :span="16">
                            <el-row>
                                <el-col :span="12">
                                    <div class="grid-content zl_img1">
                                        <p>今日营收(元)</p>
                                        <p>75</p>
                                    </div>
                                </el-col>
                                <el-col :span="12">
                                    <div class="grid-content zl_img1">
                                        <p>今日分润(元)</p>
                                        <p>75</p>
                                    </div>
                                </el-col>
                                <el-col :span="12">
                                    <div class="grid-content zl_img1">
                                        <p>累计营收(元)</p>
                                        <p>75</p>
                                    </div>
                                </el-col>
                                <el-col :span="12">
                                    <div class="grid-content zl_img1">
                                        <p>累计分润(元)</p>
                                        <p>75</p>
                                    </div>
                                </el-col>
                            </el-row>        
                        </el-col>             
                    </el-row>
                </div>
            </div>
        </div>
        <div class="btn">
            <el-button round  type="primary" size="small" @click="add()">发展投资客</el-button>
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
      add(){
          this.$router.push({
                path: "/site",
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
    // text-align: right;
  }
  .btn{
      margin: 20px 0px;
      text-align: center;
  }
  .zl_dd{
      width: 94%;
      padding: 10px 0px;
      background: #fff;
      margin: auto;
      border-radius: 10px;
      margin-top: 14px;
      box-shadow: 0px 0px 2 0px #888;
      .zl_t{
          padding: 0px 10px;
          padding-bottom: 10px;
          border-bottom: 1px solid #ccc;
          font-size: 14px;
          font-weight: 700;
        .bg-purple1{
            // text-align: right;
            color: #c0de14;
        }
      }
      .zl_c{
          font-size: 14px;
          padding: 10px 10px;
          text-align: center;
          .zl_img1{
              p{
                  &:first-child{
                      font-size: 14px;
                      color: #969696;
                  }
                  &:nth-child(2){
                      font-size: 14px;
                      color: #323232;
                      font-weight: 700;
                      margin: 5px 0px;
                  }
              }  
          }
            p{
                &:first-child{
                    font-size: 14px;
                    color: #969696;
                }
                &:nth-child(2){
                    font-size: 28px;
                    color: #323232;
                    font-weight: 700;
                }
                &:last-child{
                    font-size: 14px;
                    color: #969696;
                }
            }
        .zl_imgs{
              p{
                  font-size: 14px;
                  color: #646464;
                  font-weight: 500;
                  padding: 5px 0px;
                  span{
                      color: #fc9566;
                      padding-left: 5px;
                  }
              }
          }    
      }
  }  
input {
  -webkit-user-select: auto;
  /*webkit浏览器*/
}
</style>
