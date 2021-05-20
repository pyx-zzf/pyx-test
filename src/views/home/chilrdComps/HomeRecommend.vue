<template>
    <div class="recommend">
        <div class="recommendItem" v-for="item,index in recommends" :key="index">
            <a :href="item.link">
                <img :src="item.image" alt="">    
            </a>
            <div>{{item.title}}</div>
        </div>
    </div>
</template>

<script>
export default {
    name:'HomeRecommend',
    props:{
        recommends:{
            type:Array,
            default(){
                return [] 
            }
        }
    }
}
</script>

<style scoped>

    .recommend{
        display: flex;
        width: 100%;
        padding: 5px 1px 20px;
        border-bottom: 5px solid #efefef;
        
    }
    .recommendItem{
        flex:1;
        padding:5px;
        font-size: 15px;
        
    }
    .recommendItem img{
        width: 60px;
        height: 60px;
    }
</style>