<template>
  <div class="loginWrapper">
    <div class="hd">
      <h2>管理后台</h2>
    </div>
    <div class="bd">
      <el-form>
        <el-form-item>
          <el-input v-model="userName" placeholder="账号"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="pwd" placeholder="密码" type="password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="pwds" placeholder="密码" type="password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="submitBtn" @click="reg">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import {h5Register,login } from "../wenkong/api";
import {Toast } from "vue-ydui/dist/lib.rem/dialog";
import Store from "../wenkong/store";

export default {
  name: 'login',
  data () {
    return {
        userName: '',
        pwd: '',
        pwds:''
    }
  },
  methods: {
      reg(){
          if(this.pwds == this.pwd){
              h5Register({registerNo:this.userName,password:this.pwd,openId:Store.fetch("Ticket")}).then(res=>{
                  console.log(res.data)
                  if(res.data){
                      login({openId:Store.fetch("Ticket"),registerNo:this.userName}).then(res=>{
                           Toast({
                                mes: "自动登录成功",
                                timeout: 1000,
                                icon: "error"
                           });
                           this.$router.push({
                                path: "/management",
                                query: {
                                // deviceId: this.deviceId
                                }
                            });
                      })
                  }else{
                    Toast({
                        mes: res.msg,
                        timeout: 1000,
                        icon: "error"
                    }); 
                  }
              })
          }else{
              Toast({
                mes: "两次密码不一致",
                timeout: 1000,
                icon: "error"
            });
          }
          
      }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.loginWrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    font-size: 18px;
    background: url("./assets/login_bg.png") no-repeat center center;
    background-size: 100% 100%;
}

.loginWrapper .hd {
  width: 300px;
  text-align: center;
  margin-bottom: 60px;
  margin-top: -50px;
}

.loginWrapper .hd h2 {
    font-weight: 400;
    color: #fff;
    font-weight: 700;
    /* font-size: 16px; */
}


.loginWrapper .bd {
    width: 300px;
}

.loginWrapper .bd .submitBtn {
  background: #b8d50e;
  width: 100%;
}

.loginWrapper .bd .el-form-item:last-child {
  margin-bottom: 10px;
}

.loginWrapper .ft {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 300px;
  color: #fff;
  font-size: 14px;
  margin-top: 20px;
}

.loginWrapper .ft a {
  font-size: 14px;
  text-decoration: none;
  color: #fff;
}
</style>
