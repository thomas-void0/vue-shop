<template>
    <div class="tab-bar">
        <main-tab-bar></main-tab-bar>
    </div>
</template>

<script>
    import MainTabBar from "../../content/MainTabBar";
    export default {
        components: {
            MainTabBar
        }
    }
</script>

<style lang="less" scoped>
    .tab-bar{
        height: 49px;
    }
</style>