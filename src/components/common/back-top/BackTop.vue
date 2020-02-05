<template>
    <div 
        v-show="showFlag"
        class='back-top'
        @click="scrollBackToTop"
    >
        <img src="../../../assets/img/back-top/top.svg" alt="topImg">
    </div>
</template>
<script>
    import { mapState } from 'vuex';
    export default {
        name:'back-top',
        methods: {
            scrollBackToTop(){
                console.log("点击")
                this.bscorll.scrollTo(0,0,500);
            }
        },
        computed: {
            ...mapState([
                "bscorll",//映射bscorll实例
                "isShow" //映射返回按钮的显示状态值
            ]), 
            showFlag(){
                return this.isShow
            }
        },
    }
</script>
<style lang='less' scoped>
    .back-top{
        width: 50px;
        height: 50px;
        border: 2px solid pink;
        display: flex;
        justify-content: center;
        justify-items: center;
        border-radius: 25px;
        background-color: white;
    }
</style>