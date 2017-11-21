<template>
  <div class="counter-component">
    <div class="counter-btn" @click="minus"> - </div>
    <div class="counter-show">
      <input type="text" v-model="number" @keyup="fixNumber">
    </div>
    <div class="counter-btn" @click="plus"> + </div>
  </div>
</template>

<script>
  export default {
    name: 'NumberBox',
    props: {
      initial: {
        type: Number,
        default: 0
      },
      min: {
        type: Number,
        default: 0
      },
      max: {
        type: Number,
        default: 200
      },
    },
    data() {
      return {
        number: this.initial
      }
    },
    methods: {
      //TODO 过滤数字,控制取值范围
      fixNumber() {
        let res
        if (typeof this.number === 'string') {
          res = Number(this.number.replace(/\D/g, ''))
        } else {
          res = this.number
        }
        
        if (res <= this.min) {
          res = this.min
        } else if (res >= this.max) {
          res = this.max
        }
        this.number = res
      },
      //TODO 减
      minus() {
        if (this.min != null && this.number <= this.min) {
          this.number = this.min
          return
        }
        this.number--
      },
      //TODO 加
      plus() {
        if (this.max != null && this.number >= this.max) {
          this.number = this.max
          return
        }
        this.number++
      }
    },
    watch: {
      number(n,o) {
        this.$emit('on-change',n)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .counter-component {
    position: relative;
    display: inline-block;
    overflow: hidden;
    vertical-align: middle;
  }
  
  .counter-show {
    float: left;
  }
  
  .counter-show input {
    border: none;
    border-top: 1px solid #e3e3e3;
    border-bottom: 1px solid #e3e3e3;
    height: 23px;
    line-height: 23px;
    width: 60px;
    outline: none;
    text-indent: 4px;
    text-align: center;
  }
  
  .counter-btn {
    border: 1px solid #e3e3e3;
    float: left;
    height: 25px;
    line-height: 25px;
    width: 25px;
    text-align: center;
    cursor: pointer;
  }
  
  .counter-btn:hover {
    border-color: #4fc08d;
    background: #4fc08d;
    color: #fff;
  }
</style>
