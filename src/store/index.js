import Vue from 'vue'
import Vuex from "vuex"
import Ajax,{reqLocalJsonData} from '../network'
import { Notify } from 'vant'
import {
    HOME_CHANGE_BANNER,
    HOME_CHANGE_RECOMMEND,
    HOME_CHANGE_HOMEPOP,
    HOME_CHANGE_HOMENEW,
    HOME_CHANGE_HOMESELECT,
    HOME_CHANGE_TITLE
} from "../common/constant"
import {handleImgAndLink,translateToJson} from '../common/untils'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        banner:[],//轮播数据
        recommend:[], //推荐数据
        homeGoods:{//当前首页所有商品数据
            homePop:[],
            homeNews:[],
            homeSelect:[]
        },
        titleId:"homePop", //tabtitle中默认选中为流行的id值
    },
    mutations: {
        [HOME_CHANGE_BANNER](state,{imgs}){
            state.banner = handleImgAndLink(imgs); //更新轮播数据
        },
        [HOME_CHANGE_RECOMMEND](state,{data}){
            state.recommend = handleImgAndLink(data); //更新推荐数据
        },
        [HOME_CHANGE_HOMEPOP](state,{data}){ //更新首页流行数据
            const {page,homePop} = translateToJson(data);
            state.homeGoods.homePop.push({page,homePop});
        },
        [HOME_CHANGE_HOMENEW](state,{data}){ //更新首页新款数据
            const {page,homeNews} = translateToJson(data);
            state.homeGoods.homeNews.push({page,homeNews});
        },
        [HOME_CHANGE_HOMESELECT](state,{data}){ //更新首页精选数据
            const {page,homeSelect} = translateToJson(data);
            state.homeGoods.homeSelect.push({page,homeSelect});
        },
        [HOME_CHANGE_TITLE](state,{titleId}){ //改变首页选中的当前title值
            state.titleId = titleId;
        }
    },
    getters: {
        
    },
    actions: {
        // 得到首页中所有的数据
        async getHomeAllData(context){
            const result = await Ajax("home/multidata",null);
            const {data,returnCode} = result.data;
            if(returnCode === "SUCCESS"){
                context.commit({ //更新轮播
                    type:HOME_CHANGE_BANNER,
                    imgs:data.banner.list
                });
                context.commit({//更新推荐
                    type:HOME_CHANGE_RECOMMEND,
                    data:data.recommend.list
                })
            }else{
                Notify({type:"danger",message:"获取数据失败"})
            }

        },
        // 请求到商品页面第一页的数据
        async getHomeAllDefaultData(context,payload){
            const {type,url} = payload;
            const result = await reqLocalJsonData(url);
            context.commit({
                type,
                data:result.data
            })
        }
    }
})