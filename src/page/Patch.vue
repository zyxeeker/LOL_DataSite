<template>
  <div class="wrap" :style="{'background-image':'url('+bk+')'}">
    <div class="wrap-mask">
      <div
          style="position:absolute;height:100vh;top:60px;right:-108px;display:flex;flex-direction: column;justify-content: center;z-index: 99">
        <span class="v-slogan">PATCH</span>
      </div>
      <span class="patch_title">版本</span>
      <span class="patch_des">改变才是好事</span>
      <Button bk="#0BC6E3" bk-hover="#25DEFC" title="了解更多" style="position:absolute;top: 80%;"/>
      <!--      <Button bk="#D0A85C" bk-hover="#EDC06B" title="了解更多"/>-->
    </div>
  </div>
</template>

<script>
import Button from "@/components/Button";
export default {
  name: "Patch",
  components: {Button},
  data() {
    return {
      bk: require('@/assets/patch_bk.jpg')
    }
  }
}
</script>

<style scoped>
@font-face {
  font-family: TsangerYuMo;
  src: url('../assets/font/TsangerYuMo.ttf');
}

@font-face {
  font-family: Maler;
  src: url('../assets/font/Maler.ttf');
}

.wrap {
  height: 100%;
  width: 100%;
  background: no-repeat top center;
  background-size: cover;
}

.wrap-mask {
  position: absolute;
  top: 0;
  left: 0;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.0316667) 48.96%, rgba(0, 0, 0, 0.76) 100%);
  z-index: 1;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.patch_title {
  width: 225px;
  height: 125px;
  font-family: TsangerYuMo;
  font-style: normal;
  font-weight: normal;
  font-size: 100px;
  line-height: 125px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  text-align: center;
  color: #FFFFFF;

  text-shadow: 0px 4px 50px #000000;
}

.patch_des {
  font-family: HGXBS_CNKI;
  font-style: normal;
  font-weight: normal;
  font-size: 19px;
  line-height: 23px;

  text-align: center;

  color: #FFFFFF;

  text-shadow: 0px 4px 4px #000000;
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