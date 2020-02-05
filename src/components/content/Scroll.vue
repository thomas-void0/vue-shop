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
    import {GET_BSCROLL_OBJECT} from "../../common/constant";
    export default {
        name:'bscorll',
        methods: {
            ...mapMutations([
                GET_BSCROLL_OBJECT,
            ])
        },
        props:{
            pullUpLoad:{
                type:Boolean,
                default:()=>false
            },
            probeType:{
                type:Number,
                default:()=>0
            }
        },
        mounted () {
            // 赋值给state
            this[GET_BSCROLL_OBJECT](
                new BScroll(this.$refs.wrapper,{
                    pullUpLoad:this.pullUpLoad, //可以实现下拉加载更多
                    click:true, //允许点击
                    probeType:this.probeType //监听模式
                })
            );
        },
    }
</script>
<style lang='less' scoped>

</style>