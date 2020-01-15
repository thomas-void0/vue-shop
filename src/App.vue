<template>
  <div id="app">
    <router-view></router-view>
    <div class="tab-bar-css">
      <tab-bar />
    </div>
  </div>
</template>

<script>
  import TabBar from "./components/common/tabbar/TabBar";
  export default {
    name: 'app',
    components: {
      TabBar
    }
  }
</script>

<style>
  @import "assets/css/base.css";
  .tab-bar-css{
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
  }
</style>
