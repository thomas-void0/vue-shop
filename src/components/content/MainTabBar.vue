<template>
    <div class="main-tab-bar">
        <tab-bar-item v-for="(item,index) in initInfo" :key="index" :path="item.path" :color="item.color"> 
            <template #defaultImg>
                <img :src="item.defaultImage" alt="img" />
            </template>
            <template v-slot:activeImg>
                <img :src="item.activeImage" alt="img" />
            </template>
            <template #text>
                <p>{{item.title}}</p>
            </template>
        </tab-bar-item>
    </div>
</template>

<script>
    import TabBarItem from "./TabBarItem";
    import initTabBar from "../../config/config";
    export default {
        data () {
            return {
                initInfo:initTabBar
            }
        },
        components: {
            TabBarItem
        }
    }
</script>

<style lang="less" scoped >
    .main-tab-bar{
        display: flex;
        text-align: center;
        background-color: #ccc;
        justify-content: space-around;
        align-items: center;
        font-size: 0;  
        height: 100%;
        img{
            width: 24px;
            height: 24px;
            vertical-align: middle;
            margin-bottom: 0;
        }
        p{
            font-size: 14px;
            font-weight: bold;
        }
    }
</style>