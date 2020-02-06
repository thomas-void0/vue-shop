<template>
    <div class="home">
        <nav-bar class="home-nav-bar">
            <template #center>
                <span>测试购物</span>
            </template>
        </nav-bar>   
        <!-- 可滚动区域 start-->
        <scroll 
            class="scroll_content" 
            :probeType="3"
            :pullUpLoad="true"
        >
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
        <!-- 返回顶部按钮 -->
        <back-top  class="back-top"/>
    </div>
</template>

<script>
    import { mapActions,mapState } from 'vuex';
    import {
        HOME_CHANGE_HOMEPOP,
        HOME_CHANGE_HOMENEW,
        HOME_CHANGE_HOMESELECT
    } from "../../common/constant"
    import {debounce} from "../../common/untils";

    import NavBar from "../../components/common/navbar/NavBar";
    import TabTitle from "../../components/common/tabtitle/TabTitle";
    import GoodsList from '../../components/common/goods/GoodsList';
    import Scroll from "../../components/content/Scroll";
    import BackTop from "../../components/common/back-top/BackTop";

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
            BackTop,
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
                /*当前请求到的数据的页码*/ 
                popPage:1, 
                newsPage:1,
                selectPage:1
            }
        },
        computed: {
            ...mapState([
                "homeGoods",
                "titleId",
                "bscorll"
            ]),
             // 当前显示的数据
            nowDisplayData(){
                return this.homeGoods[this.titleId] || []
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
            /*上拉请求数据*/ 
            upReqProductData(){
                switch (this.titleId) {
                    case "homePop":
                        return (this.popPage+=1) <= 4 && this.getHomeAllDefaultData({
                            type:HOME_CHANGE_HOMEPOP,
                            url:`/pop/pop-page${this.popPage}.json`
                        }) 
                    case "homeNews":
                        return (this.newsPage+=1) <= 3 && this.getHomeAllDefaultData({
                            type:HOME_CHANGE_HOMENEW,
                            url:`/new/new-page${this.newsPage}.json`
                        })
                    default:
                        return (this.selectPage+=1) <= 3 && this.getHomeAllDefaultData({
                            type:HOME_CHANGE_HOMESELECT,
                            url:`/select/select-page${this.selectPage}.json`
                        })
                }
            }
        },
        created () {
            this.initHomeGoodsData();
        },
        mounted () { //监听放在这个构子里面去做，保证组件已经存在
            const refresh = debounce(this.bscorll.refresh,500);
            const finish = debounce(this.bscorll.finishPullUp,500);
            this.$bus.$on("imgLoadFinish",()=>{ //事件总线的方式取监听图片加载完成
                this.bscorll && refresh.apply(this.bscorll); //刷新scroll以重新计算高度
                finish.apply(this.bscorll)//图片渲染完成后上拉结束
            })
            //监听上拉加载
            this.bscorll.on("pullingUp",()=>{
                this.upReqProductData()//上拉请求数据
            })
        }
    }
</script>

<style lang="less" scoped>
    .scroll_content{
        height:calc(100vh - 93px);
    }
    .back-top{
        position: fixed;
        right: 20px;
        top: 83%;
        z-index: 99;
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