<template>
    <div class='recommend'>
        <div class="box" @click="jump(link)" v-for="{image,link,title,id} in recommend" :key="id">
            <img class="img-css" :src="image" alt="img" />
            <div>{{title}}</div>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex'

    export default {
        name:'recommend',
        methods: {
          jump(link){
              window.location.href = link;
          }  
        },
        computed: {
            ...mapState([
                "recommend"
            ])
        }
    }
</script>
<style lang='less' scoped>
    .recommend{
        display: flex;
        justify-content: space-around;
        padding: 10px 0;
        .box{
            .img-css{
                width: 60px;
                height: 60px;
            }
        }
    }
</style>