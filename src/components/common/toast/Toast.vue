<template>
    <div class='toast' v-show="isShow">
        <div>{{message}}</div>
    </div>
</template>
<script>

    export default {
        name:'toast',
        data () {
            return {
                message:"",
                isShow:false
            }
        },
        methods: {
            show(message="提示信息",time=2000){
                console.log("show方法调用")
                this.isShow = true;
                this.message = message;
                setTimeout(()=>{
                    this.message = "";
                    this.isShow = false;
                },time)
            }
        }
    }
</script>
<style lang='less' scoped>
    .toast{
        z-index: 99;
        background-color:rgba(0,0,0,.8);
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        font-size: .9rem;
        padding: .5rem;
        color: #fff;
        border-radius: .5rem;
    }
</style>