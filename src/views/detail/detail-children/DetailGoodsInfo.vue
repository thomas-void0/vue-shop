<template>
    <div class='detail-goods-info'>
        <div class="price">
            <div>￥</div>
            <div>{{goodsInfo.price}}</div>
        </div>
        <div class="title">
            <div>{{goodsInfo.title}}</div>
            <div>
                <img src="../../../assets/img/detail/help.svg" alt="helpImg">
                <span>{{goodsInfo.help}}</span>
            </div>
        </div>
        <div class="tip">{{goodsInfo.tip}}</div>
        <div class="send-out-goods">
            <div>{{goodsInfo.freeShipping}}</div>
            <div>{{goodsInfo.deliveryTime}}</div>
        </div>
    </div>
</template>
<script>
    export default {
        name:'detail-goods-info',
        props:{
            goodsInfo:{
                type:Object,
                default:()=>({})
            }
        }
    }
</script>
<style lang='less' scoped>
    .detail-goods-info{
        background-color: #fff;
        padding: .7rem;
        padding-right: 0;
        .price{
            display: flex;
            div:last-child{
                font-size: 2rem;
            }
        }
        .title{
            display: flex;
            justify-content: space-between;
            div:first-child{
                width: 70%;
                font-size: 0.9rem;
                margin-left: 1rem;
            }
            div:last-child{
                width: 20%;
                font-size: 0.8rem;
                background-color: #ccc; 
                height: 1.5rem;       
                line-height: 1.5rem;    
                border-top-left-radius: .75rem;  
                border-bottom-left-radius: .75rem; 
                display: flex;
                justify-items: center;
                justify-content: center;
                img{
                    width: 16px;
                }
            }
        }
        .tip{
            font-size: 0.8rem;
            color: red;
            margin: 0.5rem 0 0 1rem;
        }
        .send-out-goods{
            display: flex;
            color: #ccc;
            font-size: 0.8rem;
            justify-content: space-between;
            margin:1.2rem 1rem 0 1rem;
        }
    }
</style>