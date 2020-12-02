<template>
  <body id="paper">
    <el-form :model="registerForm" :rules="rules" class="register-container" label-position="left"
             label-width="0px" v-loading="loading" ref="registerForm">
      <h3 class="register_title">用户注册</h3>
      <el-form-item prop="username">
        <el-input type="text" v-model="registerForm.username"
                  auto-complete="off" placeholder="账号"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input type="password" v-model="registerForm.password"
                  auto-complete="off" placeholder="密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input type="text" v-model="registerForm.name"
                  auto-complete="off" placeholder="真实姓名"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input type="text" v-model="registerForm.phone"
                  auto-complete="off" placeholder="电话号码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input type="text" v-model="registerForm.email"
                  auto-complete="off" placeholder="E-Mail"></el-input>
      </el-form-item>
      <el-form-item style="width: 100%">
        <el-button type="primary" style="width: 40%;background: #505458;border: none" v-on:click="submitForm('registerForm')">注册</el-button>
      </el-form-item>
    </el-form>
  </body>
</template>
<script>
export default{
  data () {
    return {
      rules: {
        username: [{required: true, message: '用户名不能为空', trigger: 'blur'}],
        password: [{required: true, message: '密码不能为空', trigger: 'blur'}]
      },
      checked: true,
      registerForm: {
        username: '',
        password: '',
        name: '',
        phone: '',
        email: ''
      },
      loading: false
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          var _this = this
          this.$axios
            .post('/register', {
              username: this.registerForm.username,
              password: this.registerForm.password,
              name: this.registerForm.name,
              phone: this.registerForm.phone,
              email: this.registerForm.email
            }).then(response => {
              if (response.data.code === 200) {
                this.$alert('注册成功', '提示', {
                  confirmButtonText: '确定'
                })
                _this.$router.replace('/login')
              } else {
                this.$alert(response.data.message, '提示', {
                  confirmButtonText: '确定'
                })
              }
            }).catch(failResponse => {})
        } else {
          return false
        }
      })
    }
  }
}
</script>
<style>
  #paper {
    background:url("../assets/img/bg/eva1.jpg") no-repeat;
    background-position: center;
    height: 100%;
    width: 100%;
    background-size: cover;
    position: fixed;
  }
  body{
    margin: -5px 0px;
  }
  .register-container {
    border-radius: 15px;
    background-clip: padding-box;
    margin: 90px 0px 0px 200px;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
  }
  .register_title {
    margin: 0px auto 40px auto;
    text-align: center;
    color: #505458;
  }
  .register_remember {
    margin: 0px 0px 35px 0px;
    text-align: left;
  }
</style>
