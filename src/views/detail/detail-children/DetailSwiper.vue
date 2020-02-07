<template>
    <div class='detail-swiper'>
        <van-swipe 
            :autoplay="3000" 
            indicator-color="white"
        >
        <van-swipe-item v-for="(item,index) in bannerImg" :key="index">
            <img 
                :src="item" 
                alt="detailImg" 
            />
        </van-swipe-item>
        </van-swipe>
    </div>
</template>
<script>
    import { Swipe, SwipeItem } from 'vant';
    export default {
        name:'detail-swiper',
        components: {
            [Swipe.name]:Swipe,
            [SwipeItem.name]:SwipeItem  
        },
        props:{
            bannerImg:{
                type:Array,
                default:()=>""
            }
        }
    }
</script>
<style lang='less' scoped>
    .detail-swiper{
        img{
            width: 100%;
            height: 100%;
        }
        .van-swipe{
            height:24rem;
        }
    }
</style>