<template>
  <div class="wrap" :style="{'background-image':'url('+bk+')'}">
    <span class="bk_title">RUNE</span>
    <div class="wrap wrap-mask" :style="{'background-image':'url('+cover+')'}">
      <div
          style="position:absolute;height:100vh;top:60px;right:-80px;display:flex;flex-direction: column;justify-content: center;z-index: 99">
        <span class="v-slogan">RUNE</span>
      </div>
      <span class="patch_title">符文</span>
      <div class="detail" style="top: 700px;left: -605px;">
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
              d="M25 45.8334C36.5059 45.8334 45.8333 36.506 45.8333 25.0001C45.8333 13.4941 36.5059 4.16675 25 4.16675C13.4941 4.16675 4.16666 13.4941 4.16666 25.0001C4.16666 36.506 13.4941 45.8334 25 45.8334Z"
              stroke="#C4C4C4" stroke-opacity="0.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M25 33.3333V25" stroke="#C4C4C4" stroke-opacity="0.5" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round"/>
          <path d="M25 16.6667H25.0208" stroke="#C4C4C4" stroke-opacity="0.5" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round"/>
        </svg>
      </div>
      <div class="detail" style="top: 575px;left: -455px;">
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
              d="M25 45.8334C36.5059 45.8334 45.8333 36.506 45.8333 25.0001C45.8333 13.4941 36.5059 4.16675 25 4.16675C13.4941 4.16675 4.16666 13.4941 4.16666 25.0001C4.16666 36.506 13.4941 45.8334 25 45.8334Z"
              stroke="#C4C4C4" stroke-opacity="0.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M25 33.3333V25" stroke="#C4C4C4" stroke-opacity="0.5" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round"/>
          <path d="M25 16.6667H25.0208" stroke="#C4C4C4" stroke-opacity="0.5" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round"/>
        </svg>
      </div>
      <div class="detail" style="top: 535px;left: 110px;">
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
              d="M25 45.8334C36.5059 45.8334 45.8333 36.506 45.8333 25.0001C45.8333 13.4941 36.5059 4.16675 25 4.16675C13.4941 4.16675 4.16666 13.4941 4.16666 25.0001C4.16666 36.506 13.4941 45.8334 25 45.8334Z"
              stroke="#C4C4C4" stroke-opacity="0.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M25 33.3333V25" stroke="#C4C4C4" stroke-opacity="0.5" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round"/>
          <path d="M25 16.6667H25.0208" stroke="#C4C4C4" stroke-opacity="0.5" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round"/>
        </svg>
      </div>
      <div class="detail" style="top: 470px;left: 465px;">
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
              d="M25.0001 45.8334C36.506 45.8334 45.8334 36.506 45.8334 25.0001C45.8334 13.4941 36.506 4.16675 25.0001 4.16675C13.4941 4.16675 4.16675 13.4941 4.16675 25.0001C4.16675 36.506 13.4941 45.8334 25.0001 45.8334Z"
              stroke="#C4C4C4" stroke-opacity="0.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M25 33.3334L33.3333 25.0001L25 16.6667" stroke="#C4C4C4" stroke-opacity="0.5" stroke-width="2"
                stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M16.6667 25H33.3334" stroke="#C4C4C4" stroke-opacity="0.5" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round"/>
        </svg>
      </div>
      <div class="detail" style="top: 700px;left: 605px;">
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
              d="M25 45.8334C36.5059 45.8334 45.8333 36.506 45.8333 25.0001C45.8333 13.4941 36.5059 4.16675 25 4.16675C13.4941 4.16675 4.16666 13.4941 4.16666 25.0001C4.16666 36.506 13.4941 45.8334 25 45.8334Z"
              stroke="#C4C4C4" stroke-opacity="0.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M25 33.3333V25" stroke="#C4C4C4" stroke-opacity="0.5" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round"/>
          <path d="M25 16.6667H25.0208" stroke="#C4C4C4" stroke-opacity="0.5" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round"/>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Rune",
  data() {
    return {
      bk: require('@/assets/rune_bk.png'),
      cover: require('@/assets/rune_cover.png')
    }
  }
}
</script>

<style scoped>
@font-face {
  font-family: Facon;
  src: url('../assets/font/Facon-2.ttf');
}

.wrap {
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
  background: no-repeat top center;
  background-size: cover;
}

.bk_title {
  top: 196px;
  position: absolute;
  font-family: Facon;
  font-style: italic;
  font-weight: bold;
  font-size: 260px;
  line-height: 315px;
  /* identical to box height */

  text-align: center;
  letter-spacing: 0.12em;

  color: rgba(255, 255, 255, 0.3);

}

.wrap-mask {
  z-index: 1;
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

.patch_title {
  position: absolute;
  top: 80%;
  font-family: TsangerYuMo;
  font-style: normal;
  font-weight: normal;
  font-size: 100px;
  line-height: 125px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  text-align: center;
  color: #D0D0D0;

  text-shadow: 0px 4px 50px #000000;
}

.detail {
  position: relative;
  width: 50px;
  height: 50px;
}
</style>