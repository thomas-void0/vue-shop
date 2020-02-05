<template>
    <div 
        class='wrapper' 
        ref="wrapper"
    >
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>
<script>
    import BScroll from "better-scroll";
    import { mapMutations } from 'vuex';
    import {
        GET_BSCROLL_OBJECT,
        CHANGE_SHOW_FLAG
    } from "../../common/constant";
    export default {
        name:'bscorll',
        methods: {
            ...mapMutations([
                GET_BSCROLL_OBJECT,
                CHANGE_SHOW_FLAG
            ])
        },
        props:{
            probeType:{
                type:Number,
                default:()=>0
            }
        },
        mounted () {
            const scroll = new BScroll(this.$refs.wrapper,{
                    pullUpLoad:true, //可以实现下拉加载更多
                    click:true, //允许点击
                    probeType:this.probeType //监听模式
                }
            )
            // 赋值给state
            this[GET_BSCROLL_OBJECT](scroll);
            // 监听滚动
            scroll.on("scroll",(position)=>{
                Math.abs(position.y) > 1000 ? this[CHANGE_SHOW_FLAG](true) : this[CHANGE_SHOW_FLAG](false);
            })
        },
    }
</script>
<style lang='less' scoped>

</style>