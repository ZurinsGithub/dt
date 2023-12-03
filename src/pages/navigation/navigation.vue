<!-- 导航栏标准：高度为6vh（web），同时要设置deck中的padding属性 -->
<!-- 设计思路：利用flex布局将导航栏划分成5个不同区域(第2、4个带有缓冲性质，第三个应当使其居中），
  再利用justify-content进行调整 -->
<template>
  <uni-nav-bar
    :fixed="true"
    v-if="deviceEnv == 'MP-WEIXIN' ? true : false"
    status-bar
    title="自定义导航栏"
  />
  <view v-if="deviceEnv == 'WEB' ? true : false" class="nav">
    <!-- 导航栏内容 -->
    <view class="nav-content">
      <view class="nav-part1" style="padding: 8px;"><img src="../../static/shushe.png" /></view>
      <view class="nav-part2"></view>
      <view class="nav-part3">reflctive_panel</view>
      <view class="nav-part4"></view>

      <view class="nav-part5">
        <view
          @click="changeTheme()"
          class="nav-h nav-icon-button"
          style="background-color: transparent"
        >
        <view class="gg-dark-mode" :class="getIconTheme()"></view>
        </view></view
      >
    </view>
  </view>
</template>
	
	<script>
import UniNavBar from "@/uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar.vue";
import { getDeviceEnv } from "../../methods";
import { useStyleStore } from "../../store/style";
const styleStore = useStyleStore();
export default {
  data() {
    return {
      UniNavBar,
      // mediaQueryOb: null,
      deviceEnv: "",
      theme: "",
    };
  },
  methods: {
    // InitMediaQuery() {
    //   this.mediaQueryOb = uni.createMediaQueryObserver(this);
    //   this.mediaQueryOb.observe(
    //     {
    //       minWidth: 375, //页面最小宽度 375px
    //       maxWidth: 500, //页面宽度最大 500px
    //       //orientation: 'landscape'  //屏幕方向为纵向
    //     },
    //     (matches) => {
    //       console.log("页面宽度小于375px？：", matches);
    //     }
    //   );
    // },
    changeTheme() {
      styleStore.changeTheme();
    },
    getIconTheme(){
      return 'nav-icon_' + styleStore.theme
    }
  },
  // 和 UI 相关的 api 在组件 mountd 后执行
  mounted() {
    /*如果是微信小程序则采用默认导航栏，如果是web则
    使用自定义，在添加元素时应该考虑兼容性*/
    console.log("客户端类型：", getDeviceEnv());
    this.deviceEnv = getDeviceEnv();
    // 媒体查询
    // this.InitMediaQuery();
  },
  destroyed() {
    // this.mediaQueryOb.disconnect();
  },
  onInit() {
    // #ifdef WEB
    // 查询主题
    this.theme = styleStore.theme;
    // #endif
  },
};
</script>
	
<style lang="scss" scoped>
/*  #ifdef  WEB  */
@import "../../style/_nav.scss";
@import "../../style/icon/darkmode.css";
/*  #endif  */
</style>