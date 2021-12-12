<template>
  <div class="wrap" :style="{'background-image':'url('+bk+')'}">
    <div
        style="position:absolute;height:100vh;top:60px;right:-185px;display:flex;flex-direction: column;justify-content: center;z-index: 99">
      <span class="v-slogan">CHAMPION</span>
    </div>

    <span class="patch_title" style="position: relative;left: -455px;top: -770px;">英雄</span>

    <div class="role_group">
      <div class="role_display">
        <button :class="{role_active:role === assassin}" @click="role = assassin">
          <div style="width: 50px;height: 50px;">
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M16.977 22.113L17.478 21.249C19.203 18.447 19.131 16.449 18.627 15.072C18.1048 16.8634 17.1698 18.5074 15.897 19.872C15.7783 19.9742 15.6243 20.0258 15.468 20.016H14.46C14.3658 20.0184 14.2723 20.0003 14.1858 19.963C14.0993 19.9257 14.0219 19.8701 13.959 19.8C12.6863 18.4354 11.7512 16.7914 11.229 15C10.725 16.365 10.725 18.378 12.378 21.177L12.882 22.041L11.874 23.766L14.892 29.082L17.91 23.766L16.977 22.113Z"
                  fill="#BAC2CC"/>
              <path
                  d="M21.9331 11.622C20.9281 10.329 20.1331 8.62195 20.1331 5.94895C20.1331 4.72795 19.0561 3.50395 17.8351 2.34895C16.3981 1.05595 16.1101 0.626953 14.9611 0.626953C13.8121 0.626953 13.5241 1.05595 12.1591 2.34895C10.9381 3.49795 9.86107 4.72195 9.86107 5.94895C9.86107 8.60695 8.99707 10.329 8.06107 11.553L3.82807 15.861L0.669067 13.707V17.586C0.669067 17.586 0.741068 25.2 11.8741 29.367C11.8741 29.367 7.63507 27.213 6.99007 20.028C6.91807 19.527 6.91807 17.298 6.91807 16.941C8.11718 18.817 9.48807 20.5776 11.0131 22.2C10.7971 21.84 10.5811 21.408 10.3651 21.051C8.86507 17.889 9.14407 15.591 9.86407 14.01C10.3651 12.9473 11.1318 12.0318 12.0901 11.352L14.9641 14.226L17.8381 11.352C18.7963 12.0318 19.563 12.9473 20.0641 14.01C20.7841 15.591 21.1411 17.889 19.6351 20.979C19.4191 21.393 19.2001 21.753 18.9871 22.2C20.5121 20.5776 21.883 18.817 23.0821 16.941C23.0821 17.298 23.0821 19.527 23.0101 20.028C22.2931 27.213 18.1261 29.367 18.1261 29.367C29.2591 25.2 29.3311 17.586 29.3311 17.586V13.707L26.1721 15.861L21.9331 11.622Z"
                  fill="#BAC2CC"/>
            </svg>
          </div>
          <span>刺客</span>
        </button>
        <button :class="{role_active:role === fighter}" @click="role = fighter">
          <div style="width: 50px;height: 50px;">
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M20.352 16.9051V18.5551C22.938 15.9691 24.663 18.5551 24.663 18.5551C33.642 12.2341 27.105 0.600098 27.105 0.600098C27.105 0.600098 26.889 5.7721 22.581 8.9311V13.8871C22.509 15.3241 21.429 16.2571 20.352 16.9051ZM5.33702 18.6271C5.33702 18.6271 6.55802 16.6891 8.57102 17.8381L6.27302 14.4601L8.28302 9.6601C3.11102 6.4981 2.88302 0.681098 2.88302 0.681098C2.88302 0.681098 -3.64198 12.3001 5.33702 18.6271ZM8.06702 25.1671L9.72002 19.5631L9.64802 19.4191L5.76902 23.3701C4.83435 24.3177 3.57918 24.8816 2.25002 24.9511H0.900016L0.600016 25.6681L4.20002 29.1181L8.06702 25.1671ZM27.681 25.1671C27.0172 25.1574 26.3624 25.0122 25.7567 24.7403C25.1511 24.4685 24.6074 24.0757 24.159 23.5861L20.64 20.0641L21.789 25.3801L25.74 29.4001L29.34 25.9531L29.04 25.2331L27.681 25.1671ZM16.761 12.8101C16.761 12.8821 16.689 12.9541 16.689 13.0231H16.905C18.63 13.1671 19.203 13.8151 19.635 15.3241C19.9041 15.1729 20.1463 14.9782 20.352 14.7481C20.652 14.4481 20.856 14.2471 20.856 13.9591V8.4271C20.8522 8.28742 20.7998 8.15346 20.7078 8.0483C20.6158 7.94315 20.4899 7.8734 20.352 7.8511L10.941 6.1291H10.8C10.6099 6.1291 10.4275 6.20464 10.293 6.3391C10.1586 6.47357 10.083 6.65594 10.083 6.8461V8.8591L17.553 9.8641L16.761 12.8101Z"
                  fill="#BAC2CC"/>
              <path
                  d="M18.0541 16.1999C17.6941 14.6189 17.6221 14.8349 16.3291 14.7629L12.2341 14.3999V13.2389H13.8871C14.1672 13.2454 14.4411 13.1557 14.6633 12.9849C14.8854 12.8141 15.0424 12.5724 15.1081 12.2999L15.4081 11.2949L9.72007 10.4999L8.22007 14.1659L11.7421 19.2659L10.0801 24.8069L14.9641 29.3999L19.9231 24.8789C19.9231 24.8789 18.0541 16.3289 18.0541 16.1789V16.1999ZM14.9641 0.668945L13.5271 3.75595L14.9641 4.90495L16.4011 3.75595L14.9641 0.668945ZM18.6301 2.82295L19.0591 4.62295H20.8591L21.7201 1.32295L18.6301 2.82295ZM9.07507 4.61995H10.8751L10.9471 4.40395L11.3071 2.82295L8.21707 1.32295L9.07507 4.61995Z"
                  fill="#BAC2CC"/>
            </svg>
          </div>
          <span>战士</span>
        </button>
        <button :class="{role_active:role === mage}" @click="role = mage">
          <div style="width: 50px;height: 50px;">
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M25.3439 23.19H29.3669L28.2179 19.311H25.3439C23.7806 19.3119 22.2354 19.6454 20.811 20.2894C19.3865 20.9333 18.1153 21.873 17.0819 23.046L14.9999 25.5L12.9179 23.058C11.8856 21.8828 10.615 20.9409 9.19042 20.2948C7.76588 19.6488 6.22011 19.3134 4.65592 19.311H1.78192L0.632919 23.19H4.65592C6.2192 23.1909 7.7644 23.5244 9.18889 24.1684C10.6134 24.8123 11.8845 25.752 12.9179 26.925L13.1309 27.141H10.4009V29.367H19.6709V27.141H16.9409L17.1539 26.925C18.1682 25.7478 19.4255 24.8043 20.8394 24.1595C22.2532 23.5147 23.79 23.184 25.3439 23.19Z"
                  fill="#BAC2CC"/>
              <path
                  d="M16.869 16.293L15 18.663L13.131 16.293C12.9117 16.0202 12.7863 15.6841 12.7733 15.3344C12.7603 14.9847 12.8605 14.6402 13.059 14.3519L15 11.193L16.941 14.3519C17.1394 14.6402 17.2396 14.9847 17.2267 15.3344C17.2137 15.6841 17.0882 16.0202 16.869 16.293ZM12.774 8.67895L10.401 12.4859C9.97637 13.1743 9.76977 13.975 9.80832 14.7829C9.84687 15.5908 10.1288 16.3681 10.617 17.0129L15 22.5419L19.383 17.0129C19.8861 16.3749 20.1773 15.5957 20.2161 14.784C20.2548 13.9724 20.0391 13.169 19.599 12.4859L15 5.09995L14.856 5.31595C14.689 5.48753 14.4872 5.6213 14.2642 5.70825C14.0411 5.79519 13.802 5.83328 13.563 5.81995C12.342 5.81995 11.409 3.23395 14.928 0.647949C14.928 0.647949 6.30599 2.29795 10.473 9.77095L12.774 8.67895Z"
                  fill="#BAC2CC"/>
            </svg>
          </div>
          <span>法师</span>
        </button>
        <button :class="{role_active:role === marksman}" @click="role = marksman">
          <div style="width: 50px;height: 50px;">
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M8.60692 8.17522H10.6889L11.2649 6.09321L7.24192 3.72021L8.60692 8.17522ZM21.3929 8.17522L22.7579 3.72021L18.7349 6.09321L19.3109 8.17522H21.3929ZM21.3929 10.6172C20.9639 10.6172 17.7299 9.46821 17.7299 9.46821L14.9999 12.7022L12.2699 9.46821C12.2699 9.46821 9.10792 10.6172 8.60692 10.6172C6.30592 10.6172 7.16992 8.46321 7.16992 8.46321C7.16992 8.46321 1.27792 14.4962 0.632919 19.2392C0.632919 19.2392 2.35492 16.5812 7.95892 15.2882C8.81488 17.0561 10.3013 18.4398 12.1259 19.1672C11.9099 18.2342 11.6939 17.1542 11.4809 16.1492C11.0427 15.7698 10.6554 15.3352 10.3289 14.8562C10.5449 14.8562 12.4859 14.6402 12.7739 14.6402C12.9869 15.4322 14.1389 23.2622 14.1389 23.2622L12.0389 26.3522V29.3522L14.9999 28.1462L17.9459 29.3672V26.2802L15.8459 23.1902C15.8459 23.1902 16.9979 15.3602 17.2109 14.5682C17.4269 14.5682 19.3679 14.7842 19.6559 14.7842C19.3508 15.2795 18.9608 15.7172 18.5039 16.0772C18.2363 17.0712 18.021 18.0786 17.8589 19.0952C19.7037 18.3943 21.2035 17.0032 22.0409 15.2162C27.6449 16.5812 29.3669 19.1672 29.3669 19.1672C28.7219 14.4962 22.8299 8.40022 22.8299 8.40022C22.8299 8.40022 23.6939 10.6262 21.3929 10.6262"
                  fill="#BAC2CC"/>
              <path
                  d="M14.9999 0.632812L12.7019 7.02581H12.7739L14.9999 9.97181L17.2259 7.02581H17.2979L14.9999 0.632812Z"
                  fill="#BAC2CC"/>
            </svg>
          </div>
          <span>射手</span>
        </button>
        <button :class="{role_active:role === support}" @click="role = support">
          <div style="width: 50px;height: 50px;">
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M27.1199 0.632812C27.1199 8.82281 19.4999 11.6218 19.4999 11.6218L18.2819 18.2998C18.1993 18.5305 18.1508 18.7721 18.1379 19.0168C18.1584 19.5557 18.3868 20.0657 18.7753 20.4398C19.1638 20.8138 19.6821 21.0227 20.2214 21.0227C20.7607 21.0227 21.279 20.8138 21.6675 20.4398C22.056 20.0657 22.2845 19.5557 22.3049 19.0168C22.3098 18.5296 22.1376 18.0572 21.8203 17.6875C21.503 17.3178 21.0622 17.0759 20.5799 17.0068C22.5929 13.5568 25.4669 15.2068 25.4669 15.2068C25.8959 14.7748 26.2559 14.3428 26.6159 13.9858L24.4589 13.1218H27.2609C28.0179 12.0995 28.6007 10.9591 28.9859 9.74681L26.0999 8.60681H29.1899C29.4376 7.20699 29.381 5.77023 29.0238 4.39427C28.6666 3.0183 28.0172 1.7354 27.1199 0.632812ZM10.5959 11.6218C10.5959 11.6218 2.97892 8.82281 2.97892 0.632812C2.97892 0.632812 0.0329229 3.86381 0.752923 8.46281H3.84292L0.968923 9.59981C1.26811 10.5353 1.67801 11.4316 2.18992 12.2698H5.48992L2.90692 13.3468C3.37229 13.9983 3.90195 14.6013 4.48792 15.1468C4.48792 15.1468 7.36192 13.4938 9.37492 16.9468C8.89262 17.0159 8.45182 17.2578 8.13452 17.6275C7.81721 17.9972 7.645 18.4696 7.64992 18.9568C7.64244 19.2658 7.70373 19.5725 7.82936 19.8549C7.95499 20.1372 8.14182 20.3881 8.37632 20.5894C8.61082 20.7907 8.88714 20.9373 9.18527 21.0187C9.4834 21.1001 9.7959 21.1142 10.1001 21.0599C10.4044 21.0057 10.6928 20.8845 10.9444 20.7052C11.1961 20.5258 11.4047 20.2927 11.5553 20.0228C11.7058 19.7529 11.7944 19.4529 11.8148 19.1446C11.8351 18.8362 11.7867 18.5272 11.6729 18.2398L10.5959 11.6218ZM13.5419 6.80981L14.3309 4.79981H15.7679L16.5569 6.88181L15.0569 11.0488L13.5419 6.80981ZM13.2419 2.00981L11.1419 6.80981L14.1869 14.4238V21.5368L12.6869 26.3368L14.1869 29.3368H15.8999L17.3999 26.3368L15.8999 21.5368V14.4238L18.9299 6.80981L16.8299 2.00981H13.2419Z"
                  fill="#BAC2CC"/>
            </svg>
          </div>
          <span>辅助</span>
        </button>
        <button :class="{role_active:role === tank}" @click="role = tank">
          <div style="width: 50px;height: 50px;">
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M25.7759 19.1671L16.4999 27.0001V20.2441H18.7259V17.5141H11.2649V20.2441H13.4999V27.0691L4.22392 19.1671L2.49892 6.30014L10.7609 3.14714C13.4882 2.09103 16.5116 2.09103 19.2389 3.14714L27.5009 6.30014L25.7759 19.1671ZM19.8839 1.50014C16.7291 0.352167 13.2707 0.352167 10.1159 1.50014L0.632919 5.15714L2.64292 20.0281L12.5579 28.5001C13.2493 29.059 14.1109 29.3649 14.9999 29.3671C15.8911 29.3775 16.7568 29.0701 17.4419 28.5001L27.3569 20.0281L29.3669 5.15714L19.8839 1.50014Z"
                  fill="#BAC2CC"/>
              <path
                  d="M23.622 9.68391L18.6 6.37791V7.95891H11.4V6.37791L6.52202 8.53491C6.34748 8.61362 6.20379 8.74771 6.11321 8.9164C6.02263 9.08508 5.99022 9.27893 6.02102 9.46791L7.31402 15.2159C7.36008 15.3682 7.44307 15.5068 7.55559 15.6193C7.66812 15.7319 7.8067 15.8148 7.95902 15.8609L11.337 16.5809V14.9999H18.519V16.5809L21.969 15.8609C22.1321 15.8383 22.2833 15.7631 22.3998 15.6466C22.5162 15.5302 22.5914 15.379 22.614 15.2159L23.907 10.5449C23.9647 10.3889 23.9662 10.2177 23.9115 10.0606C23.8568 9.9035 23.7491 9.77034 23.607 9.68391H23.622ZM17.226 6.02091H12.774L15 3.50391L17.226 6.02091Z"
                  fill="#BAC2CC"/>
            </svg>
          </div>
          <span>坦克</span>
        </button>
      </div>
      <transition enter-active-class="animate__animated animate__zoomInDown"
                  leave-active-class="animate__animated animate__fadeOut" mode="out-in">
        <div v-bind:key="role" class="champion_detail">
          <p style="word-break: break-word">
            大多数人都认为身为霜卫首领的丽桑卓是一个活着的圣人，为弗雷尔卓德的各族带来了智慧与治愈。但事实却非如此，她使用元素魔法将臻冰扭曲成黑暗的物质并用它来冰封或穿刺胆敢揭露她隐藏的秘密的人。她的过去可能是符文之地末日的起始。
          </p>
          <div>
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M18.8533 9.11586C11.3227 13.9522 7.13913 19.5811 6.30256 26.0028C5.00021 35.9999 13.9404 40.8932 18.4703 36.4966C23.0002 32.1001 20.2848 26.5195 17.0047 24.9941C13.7246 23.4686 11.7187 23.9999 12.0686 21.9615C12.4185 19.923 17.0851 14.2712 21.1849 11.6391C21.4569 11.4078 21.5604 10.959 21.2985 10.6186C21.1262 10.3946 20.7883 9.95544 20.2848 9.30101C19.8445 8.72875 19.4227 8.75016 18.8533 9.11586Z"
                    fill="#BAC2CC"/>
              <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M38.6789 9.11586C31.1484 13.9522 26.9648 19.5811 26.1282 26.0028C24.8259 35.9999 33.7661 40.8932 38.296 36.4966C42.8259 32.1001 40.1105 26.5195 36.8304 24.9941C33.5503 23.4686 31.5443 23.9999 31.8943 21.9615C32.2442 19.923 36.9108 14.2712 41.0106 11.6391C41.2826 11.4078 41.3861 10.959 41.1241 10.6186C40.9519 10.3946 40.614 9.95544 40.1105 9.30101C39.6702 8.72875 39.2484 8.75016 38.6789 9.11586Z"
                    fill="#BAC2CC"/>
            </svg>
            <p style="padding-left: 40px;margin-top: 0;">
              不听令任何人的刺客最可怕
            </p>
          </div>
        </div>
      </transition>
    </div>

    <div
        style="position: relative;left: -320px;display: flex;width: 620px;flex-direction: column;justify-content: space-around;">
      <transition enter-active-class="animate__animated animate__fadeInDownBig"
                  leave-active-class="animate__animated animate__fadeOutDownBig" mode="out-in">
        <img class="chmp" v-bind:key="role" :src="role" alt="">
      </transition>
      <!--  READ_MORE_BTN_GROUP  -->
      <div style="display: flex;align-items: flex-end;justify-content: space-evenly;">
        <button class="more_btn_group role_detail">
          <div style="position: relative;">
            <svg width="180" height="55" viewBox="0 0 180 55" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0H180V43L168 55H0V13L12 0Z" fill="#D0A85C"/>
            </svg>
          </div>
          <transition enter-active-class="animate__animated animate__zoomIn"
                      leave-active-class="animate__animated animate__zoomOut" mode="out-in">
            <span style="position: absolute" v-bind:key="championName">{{ championName }}</span>
          </transition>
        </button>
        <button class="more_btn_group read_more" @click="toDest">
          <div style="position: relative;">
            <svg width="180" height="55" viewBox="0 0 180 55" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0H180V43L168 55H0V13L12 0Z" fill="#0BC6E3"/>
            </svg>
          </div>
          <span style="position: absolute">了解更多</span>
        </button>
      </div>
    </div>

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
      marksman: require('@/assets/marksman.png'),
      tank: require('@/assets/tank.png'),
      support: require('@/assets/support.png'),
      role: require('@/assets/assassin.png'),
      championName: "阿卡丽"
    }
  }, setup() {
    const roleChoose = []
    return {
      roleChoose
    }
  }, watch: {
    role(val) {
      switch (val) {
        case this.assassin:
          this.championName = "阿卡丽";
          break;
        case this.fighter:
          this.championName = "亚索";
          break;
        case this.mage:
          this.championName = "拉克丝";
          break;
        case this.marksman:
          this.championName = "金克斯";
          break;
        case this.tank:
          this.championName = "雷欧娜";
          break;
        case this.support:
          this.championName = "锤石";
          break;
      }
    },
  }, methods: {
    toDest: function () {
      this.$router.replace('/champion')
    }
  }
}
</script>

<style scoped>
@font-face {
  font-family: SYST;
  src: url('../assets/font/syst.ttf');
}

p {
  font-family: SYST;
}

.wrap {
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
  background: no-repeat top center;
  background-size: cover;
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
  color: #000000;
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

.chmp {
  position: relative;
  width: 620px;
  height: 680px;
  top: 75px;
}

.role_group {
  display: flex;
  position: absolute;
  flex-direction: row;
  flex-wrap: nowrap;
  left: 0;
  top: 20%;
}

.role_display {
  flex-direction: column;
}

.champion_detail {
  display: flex;
  position: relative;
  top: 85px;
  left: 40px;
  width: 275px;
  justify-content: space-around;
  flex-direction: column;
}

.role_display > button {
  height: 100px;
  width: 100px;
  background-color: transparent;
  border: none;
  color: #BAC2CC;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.role_display > button:hover span {
  color: black;
  transition: 0.5s;
}

.role_display > button span {
  transition: 0.5s;
}

.role_display > .role_active svg {
  transform: scale(1.6, 1.6);
  transition: 0.5s;
}

.role_display > .role_active svg path {
  fill: black;
  transition: 0.5s;
}

.role_display > .role_active {
  color: black;
  transition: 0.5s;
}

.role_display > button svg {
  transform: scale(1, 1);
  transition: 0.5s;
}

.role_display > button:hover svg path {
  fill: black;
  transition: 0.5s;
}

.role_display > button svg path {
  transition: 0.5s;
}

.more_btn_group {
  width: 180px;
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: none;

  font-style: normal;
  font-weight: 500;
  font-size: 19px;
  line-height: 22px;
  letter-spacing: 0.3em;
}

.role_detail:hover svg path {
  fill: #EDC06B;
  transition: 0.5s;
}

.role_detail svg path {
  transition: 0.5s;
}

.read_more svg path {
  transition: 0.5s;
}

.read_more:hover svg path {
  fill: #25DEFC;
  transition: 0.5s;
}



</style>