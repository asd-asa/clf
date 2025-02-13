<script setup xmlns="">
import {RouterView} from "vue-router";
</script>

<template>
<!--  一級路由的組件-->
  <router-view></router-view>
<div class="test">

</div>

</template>

<style scoped lang="scss">
 .test{
   color: $priceColor;
 }
</style>
