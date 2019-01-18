<template>
  <div class="list-wrapper">
    <template>
        <div class="zl_upgrade">
            <el-row>
                <el-col :span="8">
                    <div class="grid-content zl_img">
                        <p><img :src="messa.headimgurl"></p>
                    </div>
                </el-col>
                <el-col :span="16" style="width:50%;">
                    <div class="grid-content bg-purple">
                        <p>{{messa.nickname}}</p>
                        <p>13524422152</p>
                    </div>
                </el-col>
            </el-row>
        </div>
        <div class="zl_tab">
            <div class="zl_top" @click="jump(0)">
                <dl>
                    <dt><img :src="img"></dt>
                    <dd>订单</dd>
                </dl>
            </div>
            <div class="zl_top" @click="jump(1)">
                <dl>
                    <dt><img :src="img1"></dt>
                    <dd>账单</dd>
                </dl>
            </div>
            <div class="zl_top" @click="jump(2)">
                <dl>
                    <dt><img :src="img2"></dt>
                    <dd>分享</dd>
                </dl>
            </div>
            <div class="zl_top" @click="jump(3)">
                <dl>
                    <dt><img :src="img3"></dt>
                    <dd>排行</dd>
                </dl>
            </div>
        </div>
        <!-- 订单 -->
        <div class="zl_dd">
            <div class="zl_t">
                <el-row>
                    <el-col :span="12">
                        <div class="grid-content zl_img">
                            <p>我的订单</p>
                        </div>
                    </el-col>
                    <el-col :span="12">
                        <div class="grid-content bg-purple1">
                            <p @click="order">订单明细</p>
                        </div>
                    </el-col>
                </el-row>
            </div>
            <div class="zl_c">
                <el-row>
                    <el-col :span="14">
                        <div class="grid-content zl_img">
                            <p>今日订单(元)</p>
                            <p>{{(user.currBal)*5}}</p>
                            <p>12笔</p>
                        </div>
                    </el-col>
                    <el-col :span="10">
                        <div class="grid-content bg-purple1">
                            <p>总订单(元)</p>
                            <p>{{(user.currBal)*5}}</p>
                            <p>12笔</p>
                        </div>
                    </el-col>
                </el-row>
            </div>
            <div class="zl_tab1">
                <div class="zl_top">
                    <dl>
                        <dt>12</dt>
                        <dd>已完成</dd>
                    </dl>
                </div>
                <div class="zl_top">
                    <dl>
                        <dt>1</dt>
                        <dd>执行中</dd>
                    </dl>
                </div>
                <div class="zl_top">
                    <dl>
                        <dt>0</dt>
                        <dd>退订</dd>
                    </dl>
                </div>
                <div class="zl_top">
                    <dl>
                        <dt>0</dt>
                        <dd>故障</dd>
                    </dl>
                </div>
            </div>
        </div>
        <!-- 账单 -->
        <div class="zl_dd">
            <div class="zl_t">
                <el-row>
                    <el-col :span="12">
                        <div class="grid-content zl_img">
                            <p>我的账单</p>
                        </div>
                    </el-col>
                    <el-col :span="12">
                        <div class="grid-content bg-purple1">
                            <p @click="mybill">账单明细</p>
                        </div>
                    </el-col>
                </el-row>
            </div>
            <div class="zl_c">
                <el-row>
                    <el-col :span="14">
                        <div class="grid-content zl_img1">
                            <p>今日营收(元)</p>
                            <p>{{user.currBal}}</p>
                        </div>
                    </el-col>
                    <el-col :span="10">
                        <div class="grid-content bg-purple1">
                            <p>累计营收(元)</p>
                            <p>{{user.currBal}}</p>
                            <p>回报率：12%</p>
                        </div>
                    </el-col>
                </el-row>
            </div>
            <div class="zl_tab1">
                <div class="zl_top">
                    <dl>
                        <dt>1</dt>
                        <dd>累计投入</dd>
                    </dl>
                </div>
                <div class="zl_top">
                    <dl>
                        <dt>0</dt>
                        <dd>已提现</dd>
                    </dl>
                </div>
                <div class="zl_top">
                    <dl>
                        <dt style="color:#fee350">{{user.currBal}}</dt>
                        <dd>可提现</dd>
                    </dl>
                </div>
                <div class="zl_top">
                    <dl>
                        <dt>1</dt>
                        <dd>周期(天)</dd>
                    </dl>
                </div>
            </div>
        </div>
        <!-- 分享 -->
        <div class="zl_dd">
            <div class="zl_t">
                <el-row>
                    <el-col :span="12">
                        <div class="grid-content zl_img">
                            <p>分享分润</p>
                        </div>
                    </el-col>
                    <el-col :span="12">
                        <div class="grid-content bg-purple1">
                            <p style="float:left;" @click="myshare">分享明细</p>
                            <p>分享邀请</p>
                        </div>
                    </el-col>
                </el-row>
            </div>
            <div class="zl_c">
                <el-row>
                    <el-col :span="14">
                        <div class="grid-content zl_img1">
                            <p>今日营收(元)</p>
                            <p>0</p>
                        </div>
                    </el-col>
                    <el-col :span="10">
                        <div class="grid-content zl_img1">
                            <p>累计营收(元)</p>
                            <p>0</p>
                        </div>
                    </el-col>
                </el-row>
            </div>
            <div class="zl_tab1">
                <div class="zl_top">
                    <dl>
                        <dt>0</dt>
                        <dd>今天平均</dd>
                    </dl>
                </div>
                <div class="zl_top">
                    <dl>
                        <dt>0</dt>
                        <dd>累计平均</dd>
                    </dl>
                </div>
                <div class="zl_top">
                    <dl>
                        <dt>0</dt>
                        <dd>分享人</dd>
                    </dl>
                </div>
                <div class="zl_top">
                    <dl>
                        <dt style="color:#fee350">0</dt>
                        <dd style="color:#fee350">我的分享</dd>
                    </dl>
                </div>
            </div>
        </div>
        <!-- 排行榜 -->
        <div class="zl_dd">
            <div class="zl_t">
                <el-row>
                    <el-col :span="12">
                        <div class="grid-content zl_img">
                            <p>我的排行</p>
                        </div>
                    </el-col>
                    <el-col :span="12">
                        <div class="grid-content bg-purple1">
                            <p>排行榜</p>
                        </div>
                    </el-col>
                </el-row>
            </div>
            <div class="zl_c">
                <el-row>
                    <el-col :span="14">
                        <div class="grid-content zl_img1">
                            <p>总营收排行</p>
                            <p>712</p>
                        </div>
                    </el-col>
                    <el-col :span="10">
                        <div class="grid-content zl_img1">
                            <p>本月营收排行</p>
                            <p>70</p>
                        </div>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="14">
                        <div class="grid-content zl_img1">
                            <p>分享人数排行</p>
                            <p>75</p>
                        </div>
                    </el-col>
                    <el-col :span="10">
                        <div class="grid-content zl_img1">
                            <p>分享分润排行</p>
                            <p>75</p>
                        </div>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="14">
                        <div class="grid-content zl_img1">
                            <p>设备排行</p>
                            <p>无</p>
                        </div>
                    </el-col>
                    <el-col :span="10">
                        <div class="grid-content zl_img1">
                            <p>场地排行</p>
                            <p>无</p>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </div>
        <div class="" style="width:100%;height:100px;"></div>
    </template>
  </div>
</template>

<script type="text/ecmascript-6">
import Vue from 'vue';
import Store from "../wenkong/store";
import img from "./assets/dd.png"
import img1 from "./assets/zd.png"
import img2 from "./assets/fx.png"
import img3 from "./assets/ph.png"
export default {
  components: {
  },
  data(){
    return {
        img:img,
        img1:img1,
        img2:img2,
        img3:img3,
        input1:'',
        messa:'',
        user:{}
    };
  },
  created() {
      this.usera()
  },
  methods: {
      usera(){
       var outTradeNos = JSON.parse(Store.fetch("userInfo"))
       var users = JSON.parse(Store.fetch("user"))
        this.user = users.user
       console.log(outTradeNos.userInfo.headimgurl)
       this.messa = outTradeNos.userInfo
      },
      order(){
        this.$router.push({
            path: "/orderdetail",
            query: {
            // deviceId: this.deviceId
            }
        });  
      },
      mybill(){
        this.$router.push({
            path: "/mybill",
            query: {
            // deviceId: this.deviceId
            }
        });  
      },
      myshare(){
        this.$router.push({
            path: "/myshare",
            query: {
            // deviceId: this.deviceId
            }
        });  
      },
      jump (index) {
        // 用 class="d_jump" 添加锚点
        let jump = document.querySelectorAll('.zl_dd')
        let total = jump[index].offsetTop
        let distance = document.documentElement.scrollTop || document.body.scrollTop
        // 平滑滚动，时长500ms，每10ms一跳，共50跳
        let step = total / 50
        if (total > distance) {
          smoothDown()
        } else {
          let newTotal = distance - total
          step = newTotal / 50
          smoothUp()
        }
        function smoothDown () {
          if (distance < total) {
            distance += step
　　　　　　　document.body.scrollTop = distance
            document.documentElement.scrollTop = distance
            setTimeout(smoothDown, 10)
          } else {
            document.body.scrollTop = total
            document.documentElement.scrollTop = total
          }
        }
        function smoothUp () {
          if (distance > total) {
            distance -= step
　　　　　　　document.body.scrollTop = distance
            document.documentElement.scrollTop = distance
            setTimeout(smoothUp, 10)
          } else {
            document.body.scrollTop = total
            document.documentElement.scrollTop = total
          }
       } 
     }
  },
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
      padding: 20px 0px 50px 0px;
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
  }
  .zl_tab{
      width: 94%;
      margin: auto;
      display: -webkit-flex;
      display: flex;
      -webkit-justify-content: space-between;
      justify-content: space-between;
      background: #fff;
      text-align: center;
      padding: 10px 0px;
      color: #fc9565;
      border-radius: 10px;
      font-weight: 700;
      margin-top: -36px;
      box-shadow: 0px 0px 2 0px #888;
      .zl_top{
          width: 20%;
          font-size: 14px;
          img{
              width: 26px;
          }
      }
  }
   .zl_tab1{
      width: 94%;
      margin: auto;
      display: -webkit-flex;
      display: flex;
      -webkit-justify-content: space-between;
      justify-content: space-between;
      background: #fff;
      text-align: center;
      padding: 10px 0px 0px 0px;
      color: #646464;
    //   border-radius: 10px;
      font-weight: 700;
      border-top: 1px solid #f3f3f3;
      .zl_top{
          font-size: 14px;
          dt{
              font-size: 16px;
              color: #323232;
          }
          dd{
              font-size: 12px;
              color: #969696;
          }
      }
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
            text-align: right;
            color: #c0de14;
        }
      }
      .zl_c{
          font-size: 14px;
          padding: 10px 10px;
          .zl_img1{
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
              }  
          }
        //   border-bottom: 1px solid #ccc;
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
      }
  }
}
input {
  -webkit-user-select: auto;
  /*webkit浏览器*/
}
</style>
