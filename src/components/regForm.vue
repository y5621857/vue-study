<template>
  <div class="login-form">
    <div class="g-form">
      <div class="g-form-line">
        <span class="g-form-label">用户名：</span>
        <div class="g-form-input">
          <input type="text" placeholder="请输入Email地址">
        </div>
      </div>
      <div class="g-form-line">
        <span class="g-form-label">密码：</span>
        <div class="g-form-input">
          <input type="text" placeholder="6-16位密码，数字、字母、下划线">
        </div>
      </div>
      <div class="g-form-line">
        <div class="g-form-btn">
          <a class="button">注册</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'RegForm',
    data() {
      return {
      
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
