<template>
    <div class="home">
        <nav-bar class="home-nav-bar">
            <template #center>
                <span>测试购物</span>
            </template>
        </nav-bar>   
        <!-- 可滚动区域 start-->
        <scroll :height="300">
            <template #default>
                <swiper class="home-swiper" />  
                <recommend/>
                <popular/>
                <tab-title :titles="titles"/>
                <goods-list  
                    :goodsData="nowDisplayData" 
                />
            </template>
        </scroll>
        <!-- end -->
    </div>
</template>

<script>
    import { mapActions,mapState } from 'vuex';
    import {
        HOME_CHANGE_HOMEPOP,
        HOME_CHANGE_HOMENEW,
        HOME_CHANGE_HOMESELECT
    } from "../../common/constant"

    import NavBar from "../../components/common/navbar/NavBar";
    import TabTitle from "../../components/common/tabtitle/TabTitle";
    import GoodsList from '../../components/common/goods/GoodsList';
    import Scroll from "../../components/content/Scroll";

    import Swiper from "./home-children/Swiper";
    import Recommend from "./home-children/Recommend";
    import Popular from "./home-children/Popular";
    
    export default {
        name:"home",
        components: {
            NavBar,
            TabTitle,
            GoodsList,
            Scroll,
            Swiper,
            Recommend,
            Popular,
        },
        data () {
            return {
                /*标题配置数据*/
                titles:[
                    {id:"homePop",title:"流行"},
                    {id:"homeNews",title:"新款"},
                    {id:"homeSelect",title:"精选"},
                ],
            }
        },
        computed: {
            ...mapState([
                "homeGoods",
                "titleId"
            ]),
             // 当前显示的数据
            nowDisplayData(){
                return this.homeGoods[this.titleId][0] && this.homeGoods[this.titleId][0][this.titleId]
            }
        },
        methods: {
            ...mapActions([
                "getHomeAllDefaultData"
            ]),
            /*初始化请求商品第一页的数据*/ 
            initHomeGoodsData(){
                [
                    {type:HOME_CHANGE_HOMEPOP,url:"/pop/pop-page1.json"},
                    {type:HOME_CHANGE_HOMENEW,url:"/new/new-page1.json"},
                    {type:HOME_CHANGE_HOMESELECT,url:"/select/select-page1.json"}
                ].forEach(({type,url})=>{
                    this.getHomeAllDefaultData({
                        type,
                        url
                    });
                })
            },
        },
        created () {
            this.initHomeGoodsData();
        },
    }
</script>

<style scoped>
    .home{
        /* height: 300px; */
    }
    .home-nav-bar{
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        z-index: 2;
    }
    .home-swiper{
        margin-top: 44px;
    }
</style>