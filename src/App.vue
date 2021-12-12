<template>
  <div style="height: 100vh;">
    <router-view v-slot="{Component}">
      <transition enter-active-class="animate__animated animate__zoomIn"
                  leave-active-class="animate__animated animate__zoomOut" mode="out-in">
        <!--          <keep-alive exclude="Nav,ChampionDetail">-->
        <component :is="Component"/>
        <!--          </keep-alive>-->
      </transition>
    </router-view>
  </div>
</template>

