<template>
  <div class="slide-show" @mouseover="clearInv" @mouseout="runInv">
    <div class="slide-img">
      <router-link :to="{path:slides[nowIndex].href}">
        <transition name="slide-trans">
          <img v-if="isShow" :src="slides[nowIndex].src">
        </transition>
        <transition name="slide-trans-old">
          <img v-if="!isShow" :src="slides[nowIndex].src">
        </transition>
      </router-link>
    </div>
    <h2>{{ slides[nowIndex].title }}</h2>
    <ul class="slide-pages">
      <li @click="goto(prevIndex)">&lt;</li>
      <li v-for="( item, index ) in slides"
          @click="goto(index)"
      >
        <a href="javascript:;" :class="{ on: index === nowIndex }">{{index + 1}}</a>
      </li>
      <li @click="goto(nextIndex)">&gt;</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'slideShow',
    props: {
      slides: {
        type: Array,
        default: []
      },
      inv: {
        type: Number,
        default: 1000
      }
    },
    mounted() {
      //console.log(this.slides)
      this.runInv()
    },
    data() {
      return {
        nowIndex: 1,
        inv_id: null,
        isShow: true
      }
    },
    computed: {
      prevIndex() {
        if (this.nowIndex === 0) {
          return this.slides.length - 1
        } else {
          return this.nowIndex - 1
        }
      },
      nextIndex() {
        if (this.nowIndex === this.slides.length - 1) {
          return 0
        } else {
          return this.nowIndex + 1
        }
      }
    },
    methods: {
      //TODO 重置幻灯片当前页
      goto(index) {
        this.isShow = !this.isShow
        setTimeout(()=>{
          this.isShow = !this.isShow
          this.nowIndex = index
        },100)
        this.$emit('onchange',index)
      },
      //TODO 设置幻灯片自动轮播
      runInv() {
        this.inv_id = setInterval(() => {
          this.goto(this.nextIndex)
        }, this.inv)
      },
      //TODO 暂停自动轮播
      clearInv() {
        clearInterval(this.inv_id)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .slide-trans-enter-active {
    transition: all .5s;
  }
  
  .slide-trans-enter {
    transform: translateX(900px);
  }
  
  .slide-trans-old-leave-active {
    transition: all .5s;
    transform: translateX(-900px);
  }
  
  .slide-show {
    position: relative;
    margin: 15px 15px 15px 0;
    width: 900px;
    height: 500px;
    overflow: hidden;
  }
  
  .slide-show h2 {
    position: absolute;
    width: 100%;
    height: 100%;
    color: #fff;
    background: #000;
    opacity: .5;
    bottom: 0;
    height: 30px;
    text-align: left;
    padding-left: 15px;
  }
  
  .slide-img {
    width: 100%;
  }
  
  .slide-img img {
    width: 100%;
    position: absolute;
    top: 0;
  }
  
  .slide-pages {
    position: absolute;
    bottom: 10px;
    right: 15px;
  }
  
  .slide-pages li {
    display: inline-block;
    padding: 0 10px;
    cursor: pointer;
    color: #fff;
  }
  
  .slide-pages li .on {
    text-decoration: underline;
    color: #4fc08d;
  }
</style>
