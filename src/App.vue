<template>
  <div id="app">
    <div class="content">
      <router-view/>
    </div>
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
    },
  }
</script>

<style>
  @import "assets/css/base.css";
  #app{
    width: 100%;
  }
  .tab-bar-css{
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
  }
  .content{
    margin-bottom: 49px;
  }
</style>
