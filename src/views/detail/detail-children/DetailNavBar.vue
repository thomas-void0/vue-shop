<template>
    <div class='detail-nav-bar' >
        <nav-bar bgColor="white">
            <template #left>
                <div class="img-box" @click="backTo">
                    <img src="../../../assets/img/back/back.svg" alt="backLogo">
                </div>
            </template>
            <template #center>
                <div class="content-box">
                    <div 
                        v-for="(title,index) in titles" 
                        :key="index"
                        @click="jumpToDesc(index)"
                        :class="{item:currentIndex === index}"
                    >
                        {{title}}
                    </div>
                </div>
            </template>
        </nav-bar>
    </div>
</template>
<script>
    import NavBar from "../../../components/common/navbar/NavBar";
    export default {
        name:'detail-nav-bar',
        components: {
            NavBar
        },
        data () {
            return {
                titles:["商品","参数","评论","推荐"],
                currentIndex:0
            }
        },
        methods: {
            jumpToDesc(index){
                this.currentIndex = index;
               
            },
            backTo(){
                this.$router.back();
            }
        }
    }
</script>
<style lang='less' scoped>
    .img-box{
       img{
           margin-top: 5px;
       }
    }
    .content-box{
        width:250px;
        display: flex;
        font-size: 14px;
        color: gray;
        font-weight: 400;
        div{
            flex: 1;
        } 
        .item{
            color: pink;
        }       
    }
</style>