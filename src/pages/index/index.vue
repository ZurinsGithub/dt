<template>
  <view class="content">
    <image class="logo" src="/static/logo.png" />

    <view class="content">
      <input v-model="url" />
      <button @click="navigate">跳转</button></view
    >
  </view>
</template>

<script lang="ts">
export default {
  data() {
    return {
      url: "menu",
    };
  },
  methods: {
    navigate() {
      let url= this.url
      console.log(url);
      uni.redirectTo({
        url: "/pages/" + url + "/" + url,
      });
    },
  },
};
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
