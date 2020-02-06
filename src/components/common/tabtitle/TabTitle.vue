<template>
    <div class='tab-title'>
        <div 
            @click="titleBtn(id)" 
            v-for="{title,id} in titles" 
            :key="id"
            :style='titleId === id && activeStyle'
        >
            {{title}}
        </div>
    </div>
</template>
<script>
    import {mapState,mapMutations} from "vuex";
    import {HOME_CHANGE_TITLE} from "../../../common/constant";
    export default {
        name:'tab-title',
        props:{
            titles:{
                type:Array,
                default:()=>[]
            }
        },
        data () {
            return {
                /*活跃标题显示的样式*/
                activeStyle:{ 
                   "borderBottom":"2px solid pink",
                   "color":"pink"
                },
            }
        },
        methods: {
            /*title标题点击事件，点击后改变默认活跃的标题*/ 
            titleBtn(titleId){
                this.HOME_CHANGE_TITLE({
                    type:HOME_CHANGE_TITLE,
                    titleId
                })
            },
            ...mapMutations({
                HOME_CHANGE_TITLE
            })
        },
        computed: {
            ...mapState(["titleId"]) //映射状态值
        }
    }
</script>
<style lang='less' scoped>
    .tab-title{
        display: flex;
        justify-content: space-around;
        font-size: 16px;
        text-align: center;
        height: 32px;
        line-height: 32px;
        div{
            border-bottom: 2px solid white;
            padding-bottom: 3px;
        }
    }
</style>