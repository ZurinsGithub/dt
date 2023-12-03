<template>
  <deck>
    <template v-slot:deck_content>
      <view class="round" :class="getFatherTheme()">
        <view class="title_view" :class="getPanelTheme()">
          <view class="tn_view">{{ title }}</view>
          <view>
            <view class="pn_view">
              {{ project_name }}
            </view>
          </view>
        </view>

        <view v-if=" items[index].model_type=='default' " class="content_block">{{ items[index].content }}</view>

      </view>
    </template>
  </deck>
</template>

<script>
import deck from "../deck/deck.vue";
import {project_name,items} from "../../ts/example_data/item.ts"
// #ifdef WEB
import { useStyleStore } from "../../store/style";
const style = useStyleStore();
// #endif
export default {
  data() {
    return {
      items,
      project_name,
      index:0,
      title: ''
    };
  },
  methods: {
    getPanelTheme() {
    // #ifdef WEB
      return "panel_" + style.theme;
    // #endif
    },
    getFatherTheme() {
    // #ifdef WEB
      return "father_content_" + style.theme;
    // #endif
    // #ifdef MP_WEIXIN
      return "wx_father_content";
    // #endif
    },
  },
  components: {
    deck,
  },
  onLoad(){
    this.title = this.items[this.index].title
    console.log(this.title);
  }
};
</script>

<style lang="scss" scoped>
.title_view {
  display: flex;
/*  #ifdef  WEB  */
  padding: 15rpx 15rpx;
  @media screen and (min-width: 960px) {
    padding: 40rpx 40rpx;
  }
/*  #endif  */
/*  #ifdef  MP-WEIXIN  */
  padding: 15rpx 15rpx;
  justify-content: left;
/*  #endif  */
}

.tn_view {
/*  #ifdef  WEB  */
  font-weight: 550;
  font-size: 40rpx;
  padding: 0 7px;
  @media screen and (min-width: 960px) {
    font-size: 100rpx;
  }
/*  #endif  */
/*  #ifdef  MP-WEIXIN  */
    font-size: 80rpx;
  font-weight: 550;
/*  #endif  */
}
.pn_view {
/*  #ifdef  WEB  */
  font-size: 15rpx;
  @media screen and (min-width: 960px) {
    font-size: 37.5rpx;
  }
/*  #endif  */
/*  #ifdef  MP-WEIXIN  */
    font-size: 30rpx;
/*  #endif  */
  border-radius: 5rpx;
  background-color: rgb(123, 123, 123, 0.4);
  margin: 7px;
  padding: 4px;
}

/*  #ifdef  MP-WEIXIN  */
.wx_father_content{
  width: 100%;
  height: 100vh;
}
/*  #endif  */
.content_block{
  width: 100%;
}
</style>