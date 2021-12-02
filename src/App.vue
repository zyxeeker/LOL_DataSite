<template>
  <nav class="ds_nav">
    <el-menu
        :default-active="activeIndex"
        mode="horizontal"
        text-color="#C4C4C4"
        active-text-color="#2F80ED"
        :background-color="bkColor"
        style="height: 60px;justify-content: flex-end;--el-menu-hover-bg-color: #0000;--el-menu-border-color:#0000;--el-menu-hover-text-color:#2F80ED"
    >
      <el-menu-item class="title" style="margin-right: 25px" index="0" @click="switchPage(0)">主页</el-menu-item>
      <el-menu-item class="title" style="margin-right: 25px" index="1" @click="switchPage(1)">版本</el-menu-item>
      <el-menu-item class="title" style="margin-right: 25px" index="2" @click="switchPage(2)">符文</el-menu-item>
      <el-menu-item class="title" style="margin-right: 25px" index="3" @click="switchPage(3)">英雄</el-menu-item>
      <el-menu-item class="title" style="margin-right: 25px" index="4" @click="switchPage(4)">装备</el-menu-item>
      <!--      cccccc26-->
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
      <Banner/>
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
// install Swiper modules
SwiperCore.use([Mousewheel]);

export default {
  name: 'App',
  components: {
    Swiper,
    SwiperSlide,
    Banner,
  },
  data() {
    return {
      swiper: null,
      bkColor: "#0000"
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
      this.activeIndex = this.swiper.activeIndex;
      if (this.activeIndex > 0)
        this.bkColor = "#000000"
      else
        this.bkColor = "#0000"
    }
  },
}
</script>

<style>
.ds_nav {
  position: absolute;
  width: 100%;
  background-color: transparent;
  z-index: 2;
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
