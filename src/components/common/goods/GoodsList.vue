<template>
            
    <div class='goods-list'>
        <goods-list-item 
            v-for="(item,index) in goodsData" 
            :key="index" 
            :data="item"
        />
    </div>
</template>
<script>
    import GoodsListItem from "./GoodsListItem"

    export default {
        name:'goods-list',
        props:{
            goodsData:{
                type:Array,
                default(){
                    return []
                }
            }
        },
        methods: {
            
        },
        components: {
            GoodsListItem
        },
    }
</script>
<style lang='less' scoped>
    .goods-list{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
</style>