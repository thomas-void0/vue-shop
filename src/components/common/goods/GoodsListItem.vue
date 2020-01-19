<template>
    <div class='goods-list-item'>
        <img :src="data.img" alt="img" />
        <p>{{data.title}}</p>
        <p>{{data.price}}</p>
    </div>
</template>
<script>
    export default {
        name:'goods-list-item',
        props:{
            data:Object,
            default(){
                return {}
            }
        }
    }
</script>
<style lang='less' scoped>

</style>