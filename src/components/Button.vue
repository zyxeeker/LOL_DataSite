<template>
  <div>
    <transition enter-active-class="animate__animated animate__fadeInDownBig">
      <div class="test" style="width: 186px;" @mouseover="m(true)" @mouseleave="m(false)" v-if="flag">
        <div class="btn" :style="{backgroundColor:bkC}"><span>{{ title }}</span></div>
        <div style="position: absolute">
          <svg width="186" height="61" viewBox="0 0 186 61" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.5 14.7071L14.7071 0.5H185.5V46.2929L171.293 60.5H0.5V14.7071Z" stroke="white"/>
          </svg>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Button",
  props: ['bk', 'bkHover', 'title'],
  data() {
    return {
      flag: true,
      bkC: this.bk
    }
  },
  methods: {
    m: function (key) {
      key ? this.bkC = this.bkHover : this.bkC = this.bk
    }
  }
}
</script>

<style scoped>
.btn {
  position: absolute;
  margin-top: 3px;
  margin-left: 3px;
  width: 180px;
  height: 55px;
  border: none;
  /*background: #0BC6E3;*/
  /*background: ;*/
  transition: 0.5s;
}

.btn > span {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  /*font-family: Roboto,serif;*/
  font-style: normal;
  font-weight: 500;
  font-size: 19px;
  line-height: 22px;
  text-align: center;
  letter-spacing: 0.5em;
}

.test:hover > .btn {
  /*background: #25DEFC;*/
}

</style>
