<template>
  <div class="home">
    <div class="btn" style="right: 0px">
      <div @click="stopRotate()">
        <img src="@/assets/播放2.png" alt="" v-if="stopRotateBool" />
        <img src="@/assets/暂停播放.png" alt="" v-else />

        {{}}
      </div>
    </div>
    <div class="btn">
      <div @click="changeBox('tree')" :class="{ active: boxShow === 'tree' }">
        <img src="@/assets/圣诞树.png" alt="" />圣诞树
      </div>
      <div @click="changeBox('ball')" :class="{ active: boxShow === 'ball' }">
        <img src="@/assets/圣诞节水晶球.png" alt="" />雪花球
      </div>
      <div
        @click="changeBox('snowman')"
        :class="{ active: boxShow === 'snowman' }"
      >
        <img src="@/assets/线性雪人.png" alt="" />小雪人
      </div>
    </div>
    <div class="tree canvasBox" v-if="boxShow === 'tree'">
      <model-gltf
        :backgroundAlpha="bgAlpha"
        :rotation="rotation"
        @on-load="onLoad"
        src="static/christmas_tree/scene.gltf"
        :controlsOptions="{
          enablePan,
          enableZoom,
          enableRotate,
        }"
      ></model-gltf>
    </div>
    <div class="ball canvasBox" v-if="boxShow === 'ball'">
      <model-gltf
        :backgroundAlpha="bgAlpha"
        :rotation="rotation"
        @on-load="onLoad"
        src="static/christmas_ball/scene.gltf"
        :controlsOptions="{
          enablePan,
          enableZoom,
          enableRotate,
        }"
      ></model-gltf>
    </div>
    <div class="snowman canvasBox" v-if="boxShow === 'snowman'">
      <model-gltf
        :backgroundAlpha="bgAlpha"
        :rotation="rotation"
        @on-load="onLoad"
        src="static/snowman/scene.gltf"
        :controlsOptions="{
          enablePan,
          enableZoom,
          enableRotate,
        }"
      ></model-gltf>
    </div>
  </div>
</template>

<script>
import { ModelGltf } from 'vue-3d-model'
import Snow from '../snow'
export default {
  name: "home",
  data() {
    return {
      boxShow: 'tree',
      bgAlpha: 0,
      stopRotateBool: false,
      rotation: {
        x: 0,
        y: 0,
        z: 0,
      },
      enablePan: false,
      enableZoom: true,
      enableRotate: true,
    }
  },
  mounted() {
  },
  methods: {
    onLoad() {
      this.rotate();
    },
    rotate() {
      this.rotation.y += 0.01;
      this.stopRotateBool ? null : requestAnimationFrame(this.rotate);

    },
    changeBox(type) {
      this.boxShow = type;
      this.stopRotate()
      setTimeout(() => {
        this.stopRotate()
      }, 500)
    },
    stopRotate() {
      this.stopRotateBool = !this.stopRotateBool;
      this.rotate()
    }
  },
  components: {
    Snow,
    ModelGltf
  }
}
</script>
<style>
::-webkit-scrollbar {
  display: none; /* Chrome Safari */
}
</style>
<style scoped>
.home {
  /* color: ghostwhite; */
  overflow: hidden;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  margin: 0px;
  padding: 0px;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-image: url(../../assets/2.png);
}

.btn {
  position: fixed;

  z-index: 99;
  align-items: center;
}
.btn div {
  color: white;
  width: 40px;
  height: 40px;
  padding-left: 8px;
  padding-right: 8px;
  margin-bottom: 5px;
  line-height: 40px;
  font-size: 23px;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(30px);
  border: 1px solid rgba(255, 255, 255);
  overflow: hidden;
}
.btn img {
  width: 23px;
  top: -2px;
  position: relative;
  margin-right: 10px;
}
.canvasBox {
  position: relative;
  width: 100%;
  height: 100%;
}
.active {
  width: 100% !important;
  transition: 0.6s !important;
}
</style>
