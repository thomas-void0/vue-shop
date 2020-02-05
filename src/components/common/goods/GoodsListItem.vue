<template>
    <div class='goods-list-item'>
        <img @load="imgLoad" :src="data.img" alt="img" />
        <p class="detail">{{data.title}}</p>
        <p>￥：{{data.price}}</p>
    </div>
</template>
<script>
    export default {
        name:'goods-list-item',
        props:{
            data:Object,
            default(){
                return {}
            }
        },
        methods: {
            imgLoad(){
                this.$bus.$emit("imgLoadFinish");
            }
        }
    }
</script>
<style lang='less' scoped>
    .goods-list-item{
        font-size: 14px;
        width: 49%;
        img{
            width: 100%;
        }
        p{
            margin: 10px 0 10px 0;
        }
        .detail{
            width: 100%;
            word-break: break-all;
            text-overflow: ellipsis;
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
        }
        &>p:last-child{
            color:red;
        }
    }
</style>