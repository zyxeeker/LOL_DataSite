<template>
  <div class="wrap" :style="{'background-image':'url('+bk+')'}">
    <div
        style="position:absolute;height:100vh;top:60px;right:-185px;display:flex;flex-direction: column;justify-content: center;z-index: 99">
      <span class="v-slogan">CHAMPION</span>
    </div>
    <button @click="role = assassin"></button>
    <button @click="role = fighter"></button>
    <button @click="role = mage"></button>
    <button @click="role = tank"></button>
    <button @click="role = support"></button>
    <span class="patch_title" style="position: relative;left: -485px;top: -725px;">英雄</span>
    <transition enter-active-class="animate__animated animate__fadeInDownBig"
                leave-active-class="animate__animated animate__fadeOutDownBig" mode="out-in">
      <img class="chmp" v-bind:key="role" :src="role" alt="">
    </transition>
  </div>
</template>

<script>
export default {
  name: "Champion",
  data() {
    return {
      bk: require('@/assets/champion_bk.png'),
      assassin: require('@/assets/assassin.png'),
      fighter: require('@/assets/fighter.png'),
      mage: require('@/assets/mage.png'),
      tank: require('@/assets/tank.png'),
      support: require('@/assets/support.png'),
      role: require('@/assets/assassin.png'),
    }
  }
}
</script>

<style scoped>
.wrap {
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
  background: no-repeat top center;
  background-size: cover;
}

.patch_title {
  /*width: 225px;*/
  /*height: 125px;*/
  font-family: TsangerYuMo;
  font-style: normal;
  font-weight: normal;
  font-size: 100px;
  line-height: 125px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  text-align: center;
  color: #000000;

  /*text-shadow: 0px 4px 50px #000000;*/
}

.v-slogan {
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

.chmp {
  position: relative;
  width: 620px;
  height: 680px;
  left: -320px;
  top: 200px;
}

</style>