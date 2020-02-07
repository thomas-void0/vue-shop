<template>
    <div class='detail'>
        <detail-nav-bar />
        <detail-swiper :bannerImg="DetailInfo && DetailInfo.imgs" />
    </div>
</template>
<script>
    import {reqLocalJsonData} from "../../network";
    
    import DetailNavBar from "./detail-children/DetailNavBar";
    import DetailSwiper from "./detail-children/DetailSwiper";
    export default {
        name:'detail',
        components: {
            DetailNavBar,
            DetailSwiper
        },
        data () {
            return {
                DetailInfo:null, //商品详细信息      
            }
        },
        methods: {
            async reqDetailInfo(){
                const {data} = await reqLocalJsonData("/detail/detail.json");
                this.DetailInfo = data;
            }    
        },
        created () {
            this.reqDetailInfo() //请求到当前的数据
        }
    }
</script>
<style lang='less' scoped>

</style>