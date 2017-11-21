<template>
  <div class="login-form">
    <div class="g-form">
      <div class="g-form-line">
        <span class="g-form-label">用户名：</span>
        <div class="g-form-input">
          <input type="text" v-model="usernameModel" placeholder="请输入邮箱">
        </div>
        <span
          :class="[{'g-form-error':!userErrors.status&&usernameModel.length},{'g-form-success':userErrors.status}]"
          v-html="userErrors.errorText"></span>
      </div>
      <div class="g-form-line">
        <span class="g-form-label">密码：</span>
        <div class="g-form-input">
          <input type="password" v-model="passwordModel" maxlength="16" placeholder="请输入密码">
        </div>
        <span
          :class="[{'g-form-error':!passwordErrors.status&&passwordModel.length},{'g-form-success':passwordErrors.status}]"
          v-html="passwordErrors.errorText"></span>
      </div>
      <div class="g-form-line">
        <div class="g-form-btn">
          <a class="button" @click="onLogin">登录</a>
        </div>
      </div>
      <p class="g-form-error">{{errorText}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'LogForm',
    data() {
      return {
        usernameModel: '',
        passwordModel: '',
        errorText: ''
      }
    },
    computed: {
      userErrors() {
        let errorText, status
        if (this.usernameModel.length == 0) {
          errorText = '&nbsp;&nbsp;&nbsp;&nbsp;Email地址'
          status = false
        } else if (!/\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/.test(this.usernameModel)) {
          status = false
          errorText = '请输入正确的Email地址'
        } else {
          status = true
          errorText = '验证通过'
        }
        return {
          status,
          errorText,
        }
      },
      passwordErrors() {
        let errorText, status
        if (this.passwordModel.length == 0) {
          errorText = '&nbsp;&nbsp;&nbsp;&nbsp;6-16位数字，字母或下划线'
          status = false
        } else if (!/^(\w){6,}$/.test(this.passwordModel)) {
          status = false
          errorText = '请至少输入6-16位数字，字母或下划线'
        } else {
          status = true
          errorText = '验证通过'
        }
        return {
          status,
          errorText,
        }
      }
    },
    methods: {
      onLogin() {
        if (!this.userErrors.status || !this.passwordErrors.status) {
          this.errorText = '请输入，正确的用户名和密码'
        } else {
          this.errorText = ''
          this.$http.get('/api/login').then((res) => {
            this.$emit('has-log', res.data)
          }, (err) => {
            conosle.log(err)
          })
          
          console.log('login')
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
