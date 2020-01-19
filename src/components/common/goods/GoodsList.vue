<template>
            
    <div class='goods-list'>
        <goods-list-item 
            v-for="(item,index) in goodsData" 
            :key="index" 
            :data="item"
        />
        <button @click="btn">xxxxxxxxx</button>
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
            btn(){
                console.log(this.goodsData)
            }  
        },
        components: {
            GoodsListItem
        },
    }
</script>
<style lang='less' scoped>

</style>