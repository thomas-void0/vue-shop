<template>
    <div @click="jump(path)">
        <div v-show="!isShow"><slot name="defaultImg"></slot></div>
        <div v-show="isShow"><slot name="activeImg"></slot></div>
        <div :style="isShow && colorObj"><slot name="text"></slot></div>
    </div>
</template>

<script>
    export default {
        methods: {
            // 点击跳转到对应的路由地址
          jump(path){
              this.$router.replace(path);
          }  
        },
        props:{
            path:String,
            color:String
        },
        computed: {
            //判断是否显示活动图标
            isShow(){
                return this.$route.path === this.path
            },
            //得到当前的颜色值
            colorObj(){
                return {color:this.color}
            } 
        }
    }
</script>

<style scoped>

</style>