import Vue from 'vue'
import Vuex from "vuex"
import Ajax from '../network'
import { Notify } from 'vant'
import {HOME_CHANGE_BANNER,HOME_CHANGE_RECOMMEND} from "../common/constant"
import {handleImgAndLink} from '../common/untils'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        banner:[],//轮播数据
        recommend:[] //推荐数据
    },
    mutations: {
        [HOME_CHANGE_BANNER](state,{imgs}){
            state.banner = handleImgAndLink(imgs); //更新轮播数据
        },
        [HOME_CHANGE_RECOMMEND](state,{data}){
            state.recommend = handleImgAndLink(data); //更新推荐数据
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

        }
    }
})