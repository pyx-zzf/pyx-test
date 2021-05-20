<template>
    <swiper class="detailswiper">
        <swiper-item v-for="item,index in topImages" :key="index">
            <img :src="item" alt="">
        </swiper-item>
    </swiper>
</template>

<script>

import {Swiper,SwiperItem} from 'components/comment/swiper'


export default {
    name:'detailSwiper',
    props:{
        topImages:{
            type:Array,
            default(){
                return []
            }
        },
        
    },
    components:{
        Swiper,
        SwiperItem
    }
}
</script>

<style scoped>
    .detailswiper{
        height: 300px;
        overflow: hidden;
    }
</style>
 