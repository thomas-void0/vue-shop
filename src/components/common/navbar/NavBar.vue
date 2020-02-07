<template>
    <div class='navbar' :style="bgColorObj">
        <div><slot name="left"></slot></div>
        <div class="center"><slot name="center"></slot></div>
        <div><slot name="right"></slot></div>
    </div>
</template>
<script>
    export default {
        name:'navbar',
        props:{
            bgColor:{
                type:String,
                default:()=>"pink"
            },
        },
        computed: {
            bgColorObj(){
                return {backgroundColor:this.bgColor}
            }
        }
    }
</script>
<style lang='less' scoped>
    .navbar{
        display: flex;
        justify-content: space-around;
        text-align: center;
        height: 44px;
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