<template>
    <div class='tab-title'>
        <div 
            @click="titleBtn(id)" 
            v-for="{title,id} in titles" 
            :key="id"
            :style='nowActiveType === id && activeStyle'
        >
            {{title}}
        </div>
    </div>
</template>
<script>
    export default {
        name:'tab-title',
        props:{
            titles:{
                type:Array,
                default(){
                    return []
                }
            }
        },
        data () {
            return {
                /*默认活跃的标题*/
                nowActiveType:0,
                /*活跃标题显示的样式*/
                activeStyle:{ 
                   "borderBottom":"2px solid pink",
                   "color":"pink"
                },
            }
        },
        methods: {
            /*title标题点击事件，点击后改变默认活跃的标题*/ 
            titleBtn(id){
                this.nowActiveType = id;
                console.log("========>",this.$store.state.homeGoods)

            },
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
        margin-top: 3px;
        div{
            border-bottom: 2px solid white;
            padding-bottom: 3px;
        }
    }
</style>