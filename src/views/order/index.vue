<template>
  <div class="list-wrapper">
    <div class="zl_dd">
        <div>
            <div>
                <span>累计订单:180单</span>
                <span>
                    <el-select v-model="value" placeholder="请选择" style="width:150px;">
                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </el-option>
                    </el-select>
                </span>
            </div>
            <div class="clear:both"></div>
        </div>
        <div class="zl_tab">
            <el-table :data="tableData" border style="width: 100%;margin-top:20px;">
                <el-table-column prop="date" label="订单时间"></el-table-column>
                <el-table-column prop="name" label="订单金额(元)"></el-table-column>
                <el-table-column prop="address" label="使用情况"></el-table-column>
            </el-table>
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
        options: [{
          value: '1',
          label: "已完成"
        }, {
          value: '2',
          label: '正在进行'
        }, {
          value: '3',
          label: '保修'
        }],
        value: '3',
         tableData: [{
          date: '2016-05-02',
          name: '123123',
          address: '已使用'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '已使用'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '已使用'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '已使用'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '已使用'
        }]
    };
  },
  methods: {
  },

};
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
@import "src/common/scss/variable.scss";
@import "src/common/scss/mixins.scss";
.list-wrapper {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height:100vh;
  background: #fff;
  .zl_dd{
      padding: 20px 0px;
      width: 94%;
      margin: auto;
      span{
          font-size: 14px;
          &:first-child{
              float: left;
              line-height: 44px;
          }
          &:nth-child(2){
              float: right;
          }
      }
  }
  .zl_tab{
    padding-top: 30px;
    margin-bottom: 80px;
  }
}

input {
  -webkit-user-select: auto;
  /*webkit浏览器*/
}
</style>
