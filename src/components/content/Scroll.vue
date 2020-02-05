<template>
    <div 
        class='wrapper' 
        ref="wrapper"
        :style="styleHeight"
    >
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>
<script>
    import BScroll from "better-scroll";
    export default {
        name:'bscorll',
        mounted () {
            new BScroll(this.$refs.wrapper,{
                pullUpLoad:true
            })
        },
        computed: {
            styleHeight(){
                return {height:this.height+"px"}
            }
        },
        props: {
            height:{
                type:Number,
                default:()=>0
            }
        }
    }
</script>
<style lang='less' scoped>

</style>