<!-- 该组件用来给具体页面组件提供插槽，它的作用是协调导航栏和整体页面风格 -->
<template>
  <view class="container bg" :class="getCSSTheme()">
    <!--  #ifdef  WEB -->
    <navigation></navigation>
    <view class="placeholder">
      <!-- 占位用div -->
    </view>
    <!--  #endif -->
    <view class="blur">
      <view style="display: flex;justify-content: center;">
        <slot name="deck_content">
          这里显示插槽代码
        </slot>
      </view>
    </view>
  </view>
</template>

<script>
// #ifdef WEB
import navigation from "../navigation/navigation.vue";
import {useStyleStore} from "../../store/style"
const style = useStyleStore()
      // #endif
export default {
  setup(){
  },
  data() {
    return {};
  },
  methods: {
    getCSSTheme(){
      // 用于获取主题对应的css样式名称
      // #ifdef WEB
      return style.theme
      // #endif
    }
  },
  components: {
      // #ifdef WEB
    navigation,
      // #endif
  },
  onLoad(){
  }
};
</script>

<style lang="scss" scoped>
/*  #ifdef  WEB  */
@import '../../style/_nav.scss';
/*
.bg {
  background-image: url("../../static/bg2.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 100vh;
}
*/
.blur {
  position: fixed;
  height: 100vh;
  width: 100vw;
}
.placeholder{
  /* 此处数据随导航栏变化 */
  @extend .nav_h;
}
/*  #endif  */


</style>
