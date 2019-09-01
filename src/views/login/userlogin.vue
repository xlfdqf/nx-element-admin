<template>
  <el-form class="login-form" status-icon :rules="loginRules" ref="loginForm" :model="loginForm" label-width="0">
    <el-form-item prop="username">
      <el-input size="small" @keyup.enter.native="handleLogin" v-model="loginForm.username" auto-complete="off" placeholder="请输入用户名">
        <i slot="prefix" class="icon-yonghu"></i>
      </el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input size="small" @keyup.enter.native="handleLogin" :type="passwordType" v-model="loginForm.password" auto-complete="off" placeholder="请输入密码">
        <i class="el-icon-view el-input__icon" slot="suffix" @click="showPassword"></i>
        <i slot="prefix" class="icon-mima"></i>
      </el-input>
    </el-form-item>
    <el-checkbox v-model="checked" @change="remenber">记住账号</el-checkbox>
    <el-form-item>
      <el-button type="primary" size="small" @click.native.prevent="handleLogin" class="login-submit">登录</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: "userlogin",
  data() {
    const validateCode = (rule, value, callback) => {
      if (this.code.value !== value) {
        this.loginForm.code = "";
        this.refreshCode();
        callback(new Error("请输入正确的验证码"));
      } else {
        callback();
      }
    };
    return {
      loginForm: {
        username: localStorage.getItem("username"),
        password: localStorage.getItem("password"),
        // username:'',
        // password:''
      },
      checked: JSON.parse(localStorage.getItem("checked")),
      code: {
        src: "",
        value: "",
        len: 4,
        type: "text"
      },
      loginRules: {
        username: [
          { required: true, trigger: "blur", message: "请输入用户名"}
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, message: "密码长度最少为6位", trigger: "blur" }
        ],
        code: [
          { required: true, message: "请输入验证码", trigger: "blur" },
          { min: 4, max: 4, message: "验证码长度为4位", trigger: "blur" },
          { required: true, trigger: "blur", validator: validateCode }
        ]
      },
      passwordType: "password"
    };
  },
  created() {},
  mounted() {},
  computed: {},
  props: [],
  methods: {
    showPassword() {
      this.passwordType === ""
        ? (this.passwordType = "password")
        : (this.passwordType = "");
    },
    remenber(){
      let username = this.loginForm.username;
      let password = this.loginForm.password;
      if (this.checked) {
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
        localStorage.setItem("checked", this.checked);
      } else {
        localStorage.setItem("username", "");
        localStorage.setItem("password", "");
        localStorage.setItem("checked", false);
      }
    },
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.$store.dispatch("Login", this.loginForm).then(res => {
            this.$router.push({ path: "/dashboard/dashboard" });
            this.remenber();
          });
        }
      });
    }
  }
};
</script>
<style>
</style>
