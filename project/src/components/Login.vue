<template>
<el-container>
  <el-header></el-header>
  <el-main>
       <el-form ref="AccountFrom" :model="account" :rules="rules" label-position="left" label-width="0px"
           class="demo-ruleForm login-container">
    <h3 class="title">用户登录</h3>
    <el-form-item prop="username">
      <el-input type="text" v-model="account.username" auto-complete="off" placeholder="账号"></el-input>
    </el-form-item>
    <el-form-item prop="pwd">
      <el-input type="password" v-model="account.pwd" auto-complete="off" placeholder="密码"></el-input>
    </el-form-item>
    <el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox>
    <el-form-item style="width:100%;">
        <el-row :gutter="20">
            <el-col :span="12">
        <el-button type="primary" style="width:100%;" @click.native.prevent="handleLogin" :loading="logining" >登录</el-button>
            </el-col>
            <el-col :span="12">
        <el-button style="width:100%;" @click.native.prevent="handleRegist" >注册</el-button>
            </el-col>
 
        </el-row>
    </el-form-item>
  </el-form>
  </el-main>
</el-container>
 
</template>

<script>
import {requestLogin} from '../api/api'
export default {
 
  name: "登录",
  data() {
    return {
      logining: false,
      account: {
        username: "",
        pwd: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入账号", trigger: "blur" }
          //{ validator: validaePass }
        ],
        pwd: [
          { required: true, message: "请输入密码", trigger: "blur" }
          //{ validator: validaePass2 }
        ]
      },
      checked: true
    };
  },
  methods:{
    handleLogin() {
        alert("login");
        this.$refs.AccountFrom.validate((valid) => {
          if (valid) {

            this.logining = true;
            //NProgress.start();
            var loginParams = { username: this.account.username, password: this.account.pwd };
          //    let loginParams = new URLSearchParams();
          //    loginParams.append("username",this.account.username);
           //   loginParams.append("password",this.account.pwd);
            requestLogin(loginParams).then(data => {
             debugger;
              this.logining = false;
              
              let { msg, code, token } = data;
              if(code == '200'){
                //登录成功，把用户信息保存在sessionStorage中
                sessionStorage.setItem('access-token', token);
                //跳转到后台主界面
                this.$router.push({ path: '/home' });
              }else{
                this.$message({
                  message: msg,
                  type: 'error'
                });
              }
              
            });

          } else {
            console.log('error submit!!');
            return false;
          }
        });
    },
    handleRegist(){
        alert("regist");
        this.$router.push({ path: '/Regist' });
    }
  }
}
</script>


<style>
body {
  background: #dfe9fb;
}
.login-container {
  width: 350px;
  margin-left: 35%;
}
</style>
