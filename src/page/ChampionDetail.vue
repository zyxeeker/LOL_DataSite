<template>
  <div style="background-color: black;display: flex;height:100%">
    <div class="bg bg-blur"></div>
    <div class="content content-front">
      <div style="position:inherit;height:100%;width:100%;display: flex;justify-content: center;align-items: center;">
        <div class="bg bg-img"></div>
        <div
            style="padding: 0 150px;top:20%;color:#42b983;position: absolute;display: flex;height: 100%;flex-direction: column;justify-content: center;">

          <span class="title">不灭狂雷</span>

          <div style="display: flex;align-items: center">
            <svg width="530" height="1" viewBox="0 0 530 1" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="530" height="1" transform="matrix(1 0 0 -1 0 1)" fill="#C4C4C4" fill-opacity="0.5"/>
            </svg>
            <span class="name">沃利贝尔</span>
            <svg width="530" height="1" viewBox="0 0 530 1" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="530" height="1" transform="matrix(1 0 0 -1 0 1)" fill="#C4C4C4" fill-opacity="0.5"/>
            </svg>
          </div>

          <div style="display: flex">
            <div style="display: flex;flex-direction: column;align-items: center;">
              <p style="color: white;width:75%;word-break: break-word;text-align: center">
                大多数人都认为身为霜卫首领的丽桑卓是一个活着的圣人，为弗雷尔卓德的各族带来了智慧与治愈。但事实却非如此，她使用元素魔法将臻冰扭曲成黑暗的物质并用它来冰封或穿刺胆敢揭露她隐藏的秘密的人。她的过去可能是符文之地末日的起始。</p>
              <svg width="595" height="1" viewBox="0 0 595 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="595" height="1" fill="#C4C4C4" fill-opacity="0.5"/>
              </svg>
              <!--   相关信息    -->
            </div>

            <!--            <svg width="1" height="420" viewBox="0 0 1 420" fill="none" xmlns="http://www.w3.org/2000/svg">-->
            <!--              <rect width="1" height="420" fill="#C4C4C4" fill-opacity="0.5"/>-->
            <!--            </svg>-->


          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChampionDetail",
  setup() {
    return {
      bk: "https://cdragon.valhir.cn/latest/champion/106/splash-art/skin/000",
      bk1: "https://cdragon.valhir.cn/latest/champion/106/splash-art/skin/000"
    }
  }
}
</script>

<style scoped>
.bg {
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000913 73.44%), url('https://cdragon.valhir.cn/latest/champion/106/splash-art/skin/000');
  height: 100%;
  /*text-align: center;*/
  /*background: ;*/
}

.bg-blur {
  float: left;
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  filter: blur(15px);
}

.bg-img {
  float: left;
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
}

.content-front {
  position: absolute;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
}

.title {
  width: 100%;
  text-align: center;
  font-family: YouSheBiaoTiHei;
  font-style: normal;
  font-weight: normal;
  font-size: 50px;
  line-height: 65px;
  /* identical to box height */

  letter-spacing: 0.15em;

  color: #FFFFFF;
}

.name {
  width: 65%;
  text-align: center;
  font-family: OPPOSans;
  font-style: normal;
  font-weight: normal;
  font-size: 120px;
  line-height: 158px;

  color: #FFFFFF;
}
</style>