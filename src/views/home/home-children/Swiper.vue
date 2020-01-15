<template>
    <div class='swiper'>
        <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="{image,id,link} in banner" :key="id">
            <img @click="imgBtn(link)" :src="image" alt="img" />
        </van-swipe-item>
        </van-swipe>
    </div>
</template>
<script>
    import { Swipe, SwipeItem } from 'vant';
    import {mapActions, mapState} from 'vuex';

    export default {
        name:'swiper',
        components: { 
            [Swipe.name]:Swipe,
            [SwipeItem.name]:SwipeItem
        },
        methods: {
            // 图片点击事件
            imgBtn(link){
                window.location.href = link
            },
            ...mapActions([
                "getHomeAllData" //actions请求轮播图片数据
            ])
        },
        computed: {
            ...mapState([
                "banner"
            ])  
        },
        created () {
            this.getHomeAllData();
        }
    }
</script>
<style lang='less' scoped>
    .swiper{
        img{
            width: 100%;
            height: 100%;
        }
        .van-swipe{
            height:10rem;
        }
    }
</style>