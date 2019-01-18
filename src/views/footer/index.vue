<template>
  <div class="list-wrapper">
    <template>
        <yd-layout>
            <yd-tabbar slot="tabbar">
                <yd-tabbar-item title="设备" link="/sets" :class="{'ac':this.$route.meta.active==='/list'}">
                    <img :src="img3" slot="icon"  v-if='this.$route.meta.active==="/list"'>
                    <img :src="img2" slot="icon" v-else>
                </yd-tabbar-item>
                <yd-tabbar-item title="消息" link="/message" :class="{'ac':this.$route.meta.active==='/message'}">
                    <img :src="img5" slot="icon" v-if='this.$route.meta.active==="/message"'>
                    <img :src="img4" slot="icon" v-else>
                </yd-tabbar-item>
                <yd-tabbar-item title="扫一扫"  link="/scan">
                    <yd-icon name="qrscan" slot="icon" size="0.54rem"></yd-icon>
                </yd-tabbar-item>
                <yd-tabbar-item title="订单" link="/order" :class="{'ac':this.$route.meta.active==='/order'}">
                    <img :src="img1" slot="icon" v-if='this.$route.meta.active==="/order"'>
                    <img :src="img" slot="icon" v-else>
                </yd-tabbar-item>
                <yd-tabbar-item title="我的" link="/about" :class="{'ac':this.$route.meta.active==='/about'}">
                    <img :src="img7" slot="icon" v-if='this.$route.meta.active==="/about"'>
                    <img :src="img6" slot="icon" v-else>
                </yd-tabbar-item>
            </yd-tabbar>
        </yd-layout>
    </template>
  </div>
</template>

<script type="text/ecmascript-6">
import Vue from 'vue';
import Store from "../wenkong/store";
import img1 from "./assets/dingdan.png"
import img2 from "./assets/dingdan1.png"

import img3 from "./assets/shebei.png"
import img4 from "./assets/shebei1.png"

import img5 from "./assets/xiaoxi.png"
import img6 from "./assets/xiaoxi1.png"

import img7 from "./assets/wode.png"
import img8 from "./assets/wode1.png"


export default {
  components: {
  },
  data(){
    return {
        img:img1,
        img1:img2,
        img2:img3,
        img3:img4,
        img4:img5,
        img5:img6,
        img6:img7,
        img7:img8
    };
  },
  methods: {
    as(){
        console.log(11)
    },
    qRcode(){
        console.log(1112)
    }
  },

};
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
@import "src/common/scss/variable.scss";
@import "src/common/scss/mixins.scss";
.list-wrapper {
  position:fixed;
  bottom: 0px;
  left: 0px;
  width: 100%;
//   height: 100%;

}
.ac{
    color: #69e4a6 !important; 
}
input {
  -webkit-user-select: auto;
  /*webkit浏览器*/
}
</style>
