<template>
  <nav class="ds_nav">
    <el-menu
        :default-active="activeIndex"
        mode="horizontal"
        text-color="#C4C4C4"
        active-text-color="#2F80ED"
        :style="{backgroundColor:bkColor}"
        style="height: 60px;justify-content: flex-end;--el-menu-hover-bg-color: #0000;--el-menu-border-color:#0000;--el-menu-hover-text-color:#2F80ED"
    >
      <el-menu-item class="title" style="margin-right: 25px" index="0" @click="switchPage(0)">主页</el-menu-item>
      <el-menu-item class="title" style="margin-right: 25px" index="1" @click="switchPage(1)">版本</el-menu-item>
      <el-menu-item class="title" style="margin-right: 25px" index="2" @click="switchPage(2)">符文</el-menu-item>
      <el-menu-item class="title" style="margin-right: 25px" index="3" @click="switchPage(3)">英雄</el-menu-item>
      <el-menu-item class="title" style="margin-right: 25px" index="4" @click="switchPage(4)">装备</el-menu-item>
    </el-menu>
  </nav>
  <swiper
      class="swiper-no-swiping"
      refs='mySwiper'
      :direction="'vertical'"
      :slidesPerView="1"
      :spaceBetween="0"
      :speed="800"
      :mousewheel="true"
      @swiper="onSwiper"
      @index="switchPage"
      :onTransitionStart="changeNavSt"
  >
    <swiper-slide>
      <Banner/>
    </swiper-slide>
    <swiper-slide>
      <Patch/>
      <!--      <Banner/>-->
    </swiper-slide>
    <swiper-slide>
      <Banner/>
    </swiper-slide>
    <swiper-slide>
      <Banner/>
    </swiper-slide>
    <swiper-slide>
      <Banner/>
    </swiper-slide>
  </swiper>

</template>

<script>
import Banner from "@/components/Banner";
import {Swiper, SwiperSlide} from "swiper/vue/swiper-vue.js";
// Import Swiper styles
import "swiper/swiper.min.css";
import './style.css';

// import Swiper core and required modules
import SwiperCore, {Mousewheel} from "swiper";
import {ref} from "vue";
import Patch from "@/page/Patch";
// install Swiper modules
SwiperCore.use([Mousewheel]);

export default {
  name: 'App',
  components: {
    Patch,
    Swiper,
    SwiperSlide,
    Banner,
  },
  data() {
    return {
      swiper: null,
      bkColor: "#0000",
      ctime: null,
      opacity: 0,
    };
  },
  setup() {
    const activeIndex = ref('0')
    return {
      activeIndex,
    }
  },
  methods: {
    onSwiper(swiper) {
      this.swiper = swiper;
    },
    switchPage(key) {
      this.swiper.slideTo(key, 800);
    },
    changeNavSt() {
      this.activeIndex = String(this.swiper.activeIndex)
      let speed = 0.05
      if (this.swiper.activeIndex > 0 && this.opacity < 1) {
        clearInterval(this.ctime)
        this.ctime = setInterval(() => {
          this.opacity += speed;
          this.bkColor = `rgba(0, 0, 0,${this.opacity})`
          if (this.opacity >= 1)
            clearInterval(this.ctime)
        }, 0)
      }
      if (this.swiper.activeIndex === 0) {
        clearInterval(this.ctime)
        this.ctime = setInterval(() => {
          this.opacity -= speed;
          this.bkColor = `rgba(0, 0, 0,${this.opacity})`
          if (this.opacity <= 0)
            clearInterval(this.ctime)
        }, 0)
      }
    }
  },
  // computed:{
  //   changeNavC() {
  //     // this.activeIndex = this.swiper.activeIndex;
  //     if (this.isactive > "0")
  //       return {backgroundColor: "#545453"};
  //     else
  //       return {backgroundColor: "#0000"};
  //   }
  // }
}
</script>

<style>
.ds_nav {
  position: absolute;
  width: 100%;
  background-color: transparent;
  z-index: 2;
}

/*.nav_bk{*/
/*  background-color: #000000;*/
/*}*/
.colorChange {
  background-color: orange;
}

.title {
  font-weight: 500;
  font-size: 17px;
  line-height: 22px;
  width: 40px;
}

.title:hover {
  color: #2F80ED;
}
</style>
