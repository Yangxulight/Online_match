<template>
<el-container>
  <el-header>注册页面</el-header>
  <el-main>
      <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
  <el-form-item label="用户名" prop="username">
    <el-input v-model="ruleForm2.username" auto-complete="off"></el-input>
  </el-form-item>
  <el-form-item label="密码" prop="pass">
    <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
  </el-form-item>
  <el-form-item label="确认密码" prop="checkPass">
    <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off"></el-input>
  </el-form-item>
  <el-form-item label="年龄" prop="age">
    <el-input v-model.number="ruleForm2.age"></el-input>
  </el-form-item>

  <el-form-item label="昵称" prop="nickname">
    <el-input v-model="ruleForm2.nickname"></el-input>
  </el-form-item>

  <el-form-item label="微信" prop="wechat">
      <el-input v-model="ruleForm2.wechat"></el-input>
  </el-form-item>

  <el-form-item label="手机号绑定" prop="phone">
      <el-input v-model="ruleForm2.phone"></el-input>
  </el-form-item> 
    
  <el-form-item label="性别" prop="gender">
      <el-radio-group v-model="ruleForm2.gender">
          <el-radio label="男"></el-radio>
          <el-radio label="女"></el-radio>
      </el-radio-group>
  </el-form-item>

  <el-form-item label="个人介绍" prop="introduction">
      <el-input type="textarea" v-model="ruleForm2.introduction"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
    <el-button @click="resetForm('ruleForm2')">重置</el-button>
  </el-form-item>
</el-form>
  </el-main>
</el-container>
</template>

<script>
  export default {
    data() {
      var checkName = (rule, value, callback) =>{
          if(!value){
              return callback(new Error('用户名不能为空'));
          }else if(value.length < 4){
              return callback(new Error('用户名不能小于4个字符'));
          }else if(value.length > 20){
              return callback(new Error('用户名不能超过20个字符'));
          }else {
              return callback();
          }
      };
      var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('年龄不能为空'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'));
          } else {
            if (value < 18) {
              callback(new Error('必须年满18岁'));
            } else if(value > 100){
              callback(new Error("必须小于100岁"));
            }else{
                callback
            }
          }
        }, 1000);
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm2.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
// TODO
      var checkNick = (rule, value, callback) => {

      };

      var checkPhone = (rule, value, callback) => {

      };

      var checkWechat = (rule, value, callback) => {

      }

      return {
        ruleForm2: {
          username: '',
          pass: '',
          checkPass: '',
          age: '',
          nickname: '',
          phone: '',
          wechat: '',
          gender: '',
          introduction: ''
        },
        rules2: {
          username: [ 
              { validator: checkName, trigger: 'blur', required:true}
          ],  
          pass: [
            { validator: validatePass, trigger: 'blur', required:true }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur', required:true}
          ],
          age: [
            { validator: checkAge, trigger: 'blur', required:true}
          ],
          nickname: [
            { validator: checkNick, trigger: 'blur',required:true}
          ],
          wechat: [
              { validator: checkWechat, trigger:'blur', required:true}
          ],
          phone: [
            { validator: checkPhone, trigger: 'blur'} 
          ],
          gender: [
            { required:true, trigger: 'blur'}
          ],
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

