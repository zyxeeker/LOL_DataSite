<template>
  <div class="wrap" :style="{'background-image':'url('+bk+')'}">
    <div class="wrap-mask">
      <div
          style="position:absolute;height:100vh;top:60px;right:-76px;display:flex;flex-direction: column;justify-content: center;z-index: 99">
        <span class="v-slogan">ITEM</span>
      </div>
      <div style="display:flex;justify-content: space-between;align-items: center;position: absolute;left: 0;top: 0;">
        <div style="height:155px;width: 300px;display: flex;flex-direction: column;align-items: center;">
          <span class="patch_title">装备</span>
          <div style="display: flex;flex-direction: row;position: relative;left: 45px;">
            <span class="eng_des">LEGENDARY<br>MYTHIC</span>
            <span class="zh_des" style="margin-right: 10px;">传<br>说</span>
            <span class="zh_des">神<br>话</span>
          </div>
          <Button bk="#0BC6E3" bk-hover="#25DEFC" title="了解更多" style="position:absolute;top: 170%;left: 50%;"/>
        </div>
        <span class="_des">你<br>会<br>选<br>择<br>怎<br>样<br>的<br>装<br>备<br>与<br>对<br>手<br>抗<br>衡<br>？</span>
      </div>

    </div>
  </div>
</template>

<script>
import Button from "@/components/Button";

export default {
  name: "Item",
  components: {Button},
  data() {
    return {
      bk: require('@/assets/item_bk.png')
    }
  }
}
</script>

<style scoped>
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
  z-index: 1;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.patch_title {
  font-family: TsangerYuMo;
  font-style: normal;
  font-weight: normal;
  font-size: 100px;
  line-height: 125px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  text-align: center;
  color: white;
}

.v-slogan {
  height: 84px;
  width: auto;
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

.eng_des {
  position: relative;
  bottom: -90px;
  left: -40px;
  transform: rotate(90deg);

  font-family: Maler;
  font-style: normal;
  font-weight: normal;
  font-size: 48px;
  line-height: 58px;
  align-items: center;

  color: rgba(255, 255, 255, 0.5);
}

.zh_des {
  position: relative;
  left: -120px;
  top: -5px;

  font-family: TsangerYuMo;
  font-style: normal;
  font-weight: normal;
  font-size: 48px;
  line-height: 100%;
  /* or 48px */

  display: flex;
  align-items: center;

  color: #FFFFFF;
}

._des {
  position: relative;
  top: 125px;

  font-family: SYST;
  font-style: normal;
  font-weight: normal;
  font-size: 19px;
  line-height: 23px;

  color: #FFFFFF;
}

</style>