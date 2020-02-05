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
    import { 
        mapState, 
        mapMutations 
    } from 'vuex';
    import {CHANGE_SHOW_FLAG} from "../../../common/constant";
    
    export default {
        name:'back-top',
        methods: {
            scrollBackToTop(){
                this.bscorll.scrollTo(0,0,500);
            },
            ...mapMutations([CHANGE_SHOW_FLAG])
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
        mounted () {
            // 监听滚动
            this.bscorll.on("scroll",position=>Math.abs(position.y) > 1000 ? this[CHANGE_SHOW_FLAG](true) : this[CHANGE_SHOW_FLAG](false))
        }
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