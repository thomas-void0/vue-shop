<template>
    <div class='navbar'>
        <div><slot name="left"></slot></div>
        <div class="center"><slot name="center"></slot></div>
        <div><slot name="right"></slot></div>
    </div>
</template>
<script>
    export default {
        name:'navbar'
    }
</script>
<style lang='less' scoped>
    .navbar{
        display: flex;
        justify-content: space-around;
        text-align: center;
        height: 44px;
        background-color: pink;
        color: white;
        line-height: 44px;
        box-shadow: 0px 1px 1px rgba(100, 100, 100, 1);
        .center{
            font-size: 20px;
            font-weight: bold;
            letter-spacing: 3px;
        }
    }
</style>