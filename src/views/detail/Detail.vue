<template>
    <div class='detail'>
        <detail-nav-bar  class="nav-bar"/>
        <scroll class="scroll_content">
            <detail-swiper :bannerImg="imgs && imgs" />
            <detail-goods-info :goodsInfo="goodsInfo"/>
            <detail-shop-info v-if="!!shopInfo" :shopInfo="shopInfo"/>            
        </scroll>
    </div>
</template>
<script>
    import {reqLocalJsonData} from "../../network";
    import Scroll from "../../components/content/Scroll";
    
    import DetailNavBar from "./detail-children/DetailNavBar";
    import DetailSwiper from "./detail-children/DetailSwiper";
    import DetailGoodsInfo from "./detail-children/DetailGoodsInfo";
    import DetailShopInfo from "./detail-children/DetailShopInfo";
    export default {
        name:'detail',
        components: {
            Scroll,
            DetailNavBar,
            DetailSwiper,
            DetailGoodsInfo,
            DetailShopInfo
        },
        data () {
            return {
                imgs:null, //商品轮播信息      
                goodsInfo:{//商品的标题描述信息
                    price:null,//价格
                    title:null, //标题
                    tip:null,//提示信息
                    freeShipping:null,//包邮
                    deliveryTime:null,//发货时间
                    help:null//帮我选
                }, 
                shopInfo:null,//店家信息
            }
        },
        methods: {
            async reqDetailInfo(){
                const {data} = await reqLocalJsonData("/detail/detail.json");
                this.handleData(data);
            },
            handleData(data){ //数据处理函数
                //轮播图片信息
                this.imgs = data.imgs;
                // 商品title信息
                Object.keys(this.goodsInfo).forEach(key=>{
                    this.goodsInfo[key] = data[key]
                })
                // 店家信息
                this.shopInfo = data.shop;
            }    
        },
        created () {
            this.reqDetailInfo(); //请求到当前的数据
        }
    }
</script>
<style lang='less' scoped>
    .detail{
        background-color: #ccc;
        height: 100vh;
        .nav-bar{
            position: relative;
            left: 0;
            right: 0;
            top: 0;
            z-index: 9;
        }
        .scroll_content{
            height: calc(100vh - 93px);
        }
    }

</style>