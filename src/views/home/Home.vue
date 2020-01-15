<template>
    <div class="home">
        <nav-bar>
            <template #center>
                 <span>测试购物</span>
            </template>
        </nav-bar>
        <swiper></swiper>
        <recommend></recommend>
        <popular></popular>
    </div>
</template>

<script>
    import NavBar from "../../components/common/navbar/NavBar";
    import Swiper from "./home-children/Swiper";
    import Recommend from "./home-children/Recommend";
    import Popular from "./home-children/Popular";
    
    export default {
        name:"home",
        components: {
            NavBar,
            Swiper,
            Recommend,
            Popular
        }

    }
</script>

<style scoped>

</style>