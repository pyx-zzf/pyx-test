<template>
    <swiper>
        <swiper-item v-for="(item,index) in banners" :key="index">
            <a :href="item.link">
                <img :src="item.image" alt="" @load="imgLoad">
            </a>
        </swiper-item>
    </swiper>
</template>

<script>
import {Swiper,SwiperItem} from 'components/comment/swiper/index.js'
export default {
    name:'homeSwiper',
    components:{Swiper,SwiperItem},
    props:{
        banners:{
            type:Array,
            default(){
                return []
            }
        },
      
    },
    data(){
        return{
            isLoad:false
        }
    },
    methods:{
        imgLoad(){
            if(!this.isLoad){
                this.$emit('isimgLoad')
                this.isLoad=true
            }
            
        }
    }
}
</script>

<style scoped>

</style>