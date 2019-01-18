<template>
  <div class="list-wrapper">
    <template>
        <yd-layout>
            <yd-tabbar slot="tabbar">
                <yd-tabbar-item title="我的设备" link="/mydeve" :class="{'ac':this.$route.meta.active==='/mydeve'}">
                    <img :src="img3" slot="icon" v-if='this.$route.meta.active==="/mydeve"'>
                    <img :src="img2" slot="icon" v-else>
                </yd-tabbar-item>
                <yd-tabbar-item title="我的场地" link="/msites" :class="{'ac':this.$route.meta.active==='/msites'}">
                    <img :src="img5" slot="icon" v-if='this.$route.meta.active==="/msites"'>
                    <img :src="img4" slot="icon" v-else>
                </yd-tabbar-item>
                <yd-tabbar-item title="我的业务" link="/business" :class="{'ac':this.$route.meta.active==='/business'}">
                    <img :src="img1" slot="icon" v-if='this.$route.meta.active==="/business"'>
                    <img :src="img" slot="icon" v-else>
                </yd-tabbar-item>
                <yd-tabbar-item title="管理中心" link="/management" :class="{'ac':this.$route.meta.active==='/management'}">
                    <img :src="img7" slot="icon" v-if='this.$route.meta.active==="/management"'>
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
import img1 from "./assets/yw.png"
import img2 from "./assets/yw1.png"

import img3 from "./assets/sb.png"
import img4 from "./assets/sb1.png"

import img5 from "./assets/cd.png"
import img6 from "./assets/cd1.png"

import img7 from "./assets/gl.png"
import img8 from "./assets/gl1.png"


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
    color: #c0de14 !important; 
    // background: #fff9f3;
    padding: 0px !important;
}
input {
  -webkit-user-select: auto;
  /*webkit浏览器*/
}
</style>
