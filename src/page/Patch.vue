<template>
  <div class="wrap" :style="{'background-image':'url('+bk+')'}">
    <div class="wrap-mask"></div>
  </div>
</template>

<script>
export default {
  name: "Patch",
  data() {
    return {
      bk: require('@/assets/patch_bk.jpg')
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
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.0316667) 48.96%, rgba(0, 0, 0, 0.76) 100%);
  z-index: 1;
  width: 100%;
  height: 100%;
}
</style>