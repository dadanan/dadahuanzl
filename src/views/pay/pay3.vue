<template>
  <div class="demo-container">
    <div class="paysd">
        <yd-cell-item>
            <span slot="left">净享一天的健康呼吸</span>
            <span slot="right"><img :src="measn.headimgurl"></span>
        </yd-cell-item>
    </div>
    <div class="pay">
        <div class="yuan">
            <ul>
                <li>{{pays}}</li>
            </ul>
        </div>
    </div>
    <div class="btn" @click="btn">
        <p>确认</p>
    </div>
  </div>
</template>

<script>
import { getPayParams ,queryResult } from "../wenkong/api";
import Store from "../wenkong/store";
import img1 from "./assets/ss.png"; // 图
export default {
    data(){
        return {
            img:img1,
            measn:{},
            pays:''
        }  
    },
    created () {
        this.user()
        this.queryResult()
    },
  methods: {
    queryResult(){
        var outTradeNos = JSON.parse(Store.fetch("outTradeNo"))
        queryResult({outTradeNo:outTradeNos.outTradeNo}).then(res=>{
            if(res.data){
                this.pays = "支付成功"
            }else{
                this.pays = "支付失败"
            }
        })
    },
    user(){
        var userInfos = JSON.parse(Store.fetch("userInfo"))
        this.measn = userInfos.userInfo
    },
    btn(){
        this.$router.push({
            path: "/about",
            query: {
            // deviceId: this.deviceId
            }
        });
    }
  }
};
</script>
<style  lang="scss" scoped>
body{
    background: #ffff
}
.pay{
    width: 100%;
    padding: 40px 0px 0px 0px;
}
.yuan{
    width: 200px;
    height: 200px;
    margin: auto;
    border-radius: 50%;
    background: #f1973f;
    ul{
        text-align: center;
        padding: 20px 0px 0px 0px;
        li{
            font-size: 18px;
            color: #fff;
            font-weight: 600;
            line-height: 160px
        }
    }
}
.btn{
    width: 60%;
    margin: auto;
    text-align: center;
    padding-top: 70px;
    font-size: 14px;
    color: #fff;
    p{
        width: 100%;
        padding: 10px 0px;
        background: #fc9566;
        border-radius:10px; 
    }
}
.yd-cell-item:not(:last-child):after{
    border: none;
}
.paysd{
    width: 100%;
    padding: 40px 0px 0px 0px;
    color: #646464;
    .yd-cell-left{
        font-size: 12px !important;
    }
    img{
        width:50px;
        height:50px;
        // background:#ccc;
        border-radius:50%;
    }
}
</style>

