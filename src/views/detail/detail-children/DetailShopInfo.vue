<template>
    <div class='detail-shop-info'>
        <div class="shop-name">
            <div class="img-box">
                <img src="../../../assets/img/detail/apple.svg" alt="shopLogo">
            </div>
            <div>{{shopInfo.name}}</div>
        </div>
        <div class="shop-info">
            <div class="left">
                <div>
                    <div>{{shopInfo.salesVolume}}</div>
                    <div>总销量</div>
                </div>
                <div>
                    <div>{{shopInfo.allGoods}}</div>
                    <div>全部宝贝</div>
                </div>
            </div>
            <div class="right">
                    <div>
                        <label>描述相符</label>
                        <span :style="isHigh(shopInfo.descPoint) ? {color:'red'} : {color:'green'}">{{shopInfo.descPoint}}</span>
                        <span v-if="shopInfo.descPoint > 4.8" class="high">高</span>
                        <span v-else class="low">低</span>
                    </div>
                    <div>
                        <label>价格合理</label>
                        <span :style="isHigh(shopInfo.pricePoint) ? {color:'red'} : {color:'green'}">{{shopInfo.pricePoint}}</span>
                        <span v-if="shopInfo.pricePoint > 4.8" class="high">高</span>
                        <span v-else class="low">低</span>
                    </div>                
                    <div>
                        <label>质量满意</label>
                        <span :style="isHigh(shopInfo.qualityPoint) ? {color:'red'} : {color:'green'}">{{shopInfo.qualityPoint}}</span>
                        <span v-if="shopInfo.qualityPoint > 4.8" class="high">高</span>
                        <span v-else class="low">低</span>
                    </div>
            </div>
        </div>
        <div class="into-shop">
            {{shopInfo.other}}
        </div>
    </div>
</template>
<script>

    export default {
        name:'detail-shop-info',
        props:{
            shopInfo:{
                type:Object,
                default:()=>({})
            },
        },
        methods: {
            isHigh(point){
                return point > 4.8 ? true : false;
            },
        },
        
    }
</script>
<style lang='less' scoped>
    .detail-shop-info{
        margin-top: 0.2rem;
        background-color: #fff;
        padding-bottom: 2rem;
        .shop-name{
            display: flex;
            padding:2rem 0 1rem 1rem;
            .img-box{
                width: 3rem;
                height: 3rem;
                border: 1px solid #ccc;
                display: flex;
                justify-content: center;
                border-radius: 1.5rem;
            }
            div:last-child{
                line-height: 3rem;
                margin-left: 1rem;
            }
        }
        .shop-info{
            display: flex;
            .left{
                display: flex;
                width: 50%;
                justify-content: space-around;
                border-right: 1px solid #ccc;
                text-align: center;
                height: 50%;
                margin-top:4%;
            }
            .right{
                width: 50%;
                padding-left: 1.6rem;
                font-size: 0.9rem;
                div{
                    margin-bottom: 0.5rem;
                    width: 100%;
                    span:last-child{
                        color: #fff;
                    }
                    span{
                        margin-left: 0.5rem;
                    }
                    .high{
                        background-color: red;
                    }
                    .low{
                        background-color: green;
                    }
                }
            }
        }
        .into-shop{
            background-color: #ccc;
            width: 8rem;
            border-radius: 1rem;
            height: 1.3rem;
            font-size: 0.9rem;
            text-align: center;
            line-height: 1.3rem;
            margin:  0.5rem auto 0 auto;
            color: white;
        }
    }
</style>