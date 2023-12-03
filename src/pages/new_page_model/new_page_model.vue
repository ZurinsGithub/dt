<!-- 注意添加对不同客户端和不同宽度屏幕的条件编译和媒体查询选项 -->
<template>
	<deck>
	  <template v-slot:deck_content> 这是新页面的默认内容 </template>
	</deck>
  </template>
  
  <script>
  import deck from "../deck/deck.vue";
  export default {
	data() {
	  return {};
	},
	methods: {},
	components:{
	  deck
	}
  };
  </script>
  
  <style>
  </style>
  