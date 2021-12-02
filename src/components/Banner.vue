<template>
  <div>
    <div
        style="position:absolute;height:100vh;top:60px;right:-375px;display:flex;flex-direction: column;justify-content: center;z-index: 99">
      <span class="v-slogan">LeagueofLegends</span>
    </div>
    <el-carousel arrow="never" :autoplay="false" height="100vh">
      <el-carousel-item v-for="item in data" :key="item">
        <div class="banner" :style="{'background-image':'url('+require('@/assets/'+item['bk'])+')'}"
             style="background-repeat:no-repeat;background-position: top center;background-size: cover;">
          <span class="bk-title" :style="{'color':item['color_1']}">{{ item['slogan'] }}</span>
          <div class="banner cover" :style="{'background-image':'url('+require('@/assets/'+item['cover'])+')'}"
               style="background-repeat:no-repeat;background-position: top center;background-size: cover;">
            <span class="cover-title" :style="{'color':item['color_2']}">{{ item['title'] }}</span>
          </div>
        </div>
        <!--        <div class="v-slogan">-->
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import {defineComponent} from 'vue'

const data = [
  {
    "bk": "bk_1.png",
    "cover": "cover_1.png",
    "slogan": "欢迎来到",
    "title": "英雄联盟",
    "color_1": "rgba(255, 255, 255, 0.5)",
    "color_2": "#EEEEEE"
  },
  {
    "bk": "bk_2.png",
    "cover": "cover_2.png",
    "slogan": "小兵即将",
    "title": "到达战场",
    "color_1": "rgba(255, 255, 255, 0.5)",
    "color_2": "#EEEEEE"
  },
  {
    "bk": "bk_3.png",
    "cover": "cover_3.png",
    "slogan": "碾碎他们",
    "title": "碾碎他们",
    "color_1": "rgba(0, 0, 0, 0.3)",
    "color_2": "#000000"
  },
  {
    "bk": "bk_4.png",
    "cover": "cover_4.png",
    "slogan": "全军出击",
    "title": "全军出击",
    "color_1": "rgba(0, 0, 0, 0.3)",
    "color_2": "#000000"
  }];

export default defineComponent({
  data() {
    return {
      data: data,
    }
  },
  // setup() {
  //   return {
  //   }
  // },
})
</script>

<style scoped>
@font-face {
  font-family: YouSheBiaoTiHei;
  src: url('../assets/font/ys.ttf');
}

@font-face {
  font-family: LMQY;
  src: url('../assets/font/lmqy.ttf');
}

@font-face {
  font-family: Maler;
  src: url('../assets/font/Maler.ttf');
}

.banner {
  height: 100vh;
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

.cover {
  z-index: 1;
}

.bk-title {
  position: absolute;
  width: 1920px;
  height: 1080px;

  font-family: YouSheBiaoTiHei;
  font-style: normal;
  font-weight: normal;
  font-size: 430px;
  line-height: 200%;
  /* or 860px */

  text-align: center;

  color: rgba(255, 255, 255, 0.5);
}

.cover-title {
  position: absolute;
  width: 1920px;
  height: 1080px;

  font-family: LMQY;
  font-style: normal;
  font-weight: normal;
  font-size: 171px;
  line-height: 275%;
  /* or 470px */

  display: flex;
  align-items: flex-end;
  justify-content: center;
  /*text-align: center;*/
  letter-spacing: 0.12em;

  color: #EEEEEE;
}

.v-slogan {
  /*float: right;*/
  /*position: absolute;*/
  height: 84px;
  width: auto;
  /*width: 1020px;*/
  /*height: 84px;*/
  /*left: 1920px;*/
  /*top: 60px;*/

  font-family: Maler;
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 30px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 1.8em;

  color: #C4C4C4;

  transform: rotate(90deg);
}
</style>
