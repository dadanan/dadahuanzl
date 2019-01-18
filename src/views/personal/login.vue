<template>
  <div class="loginWrapper">
    <div class="hd">
      <h2>管理后台</h2>
    </div>
    <div class="bd">
      <el-form :model="loginForm" :rules="loginRule" ref="loginForm">
        <el-form-item prop="userName">
          <el-input type="userName" v-model="loginForm.userName" placeholder="账号"></el-input>
        </el-form-item>
        <el-form-item prop="pwd">
          <el-input v-model="loginForm.pwd" placeholder="密码" type="password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="submitBtn">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="ft">
      <p>还没有账号？<span @click="reg">马上注册</span></p>
    </div>
  </div>
</template>

<script>
// import { doLogin } from '../../lib/vueHelper'

export default {
  name: 'login',
  data () {
    return {
      loginForm: {
        userName: '',
        pwd: ''
      },
      loginRule: {
        userName: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 10, message: '长度在 3 到 16 个字符', trigger: 'blur' }
        ],
        pwd: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    reg(){
      this.$router.push({
          path: "/registered",
          query: {
          // deviceId: this.deviceId
          }
      });
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
