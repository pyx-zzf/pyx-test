<template>
    <div class="goodslist" >
        <goods-list-item v-for="item,index in goodsobj" :key="index" :goodslist="item"  />
    </div>
</template>

<script>
import GoodsListItem from './GoodsListItem'
export default {
    name:'GoodsList',
    props:{
        goodsobj:{
            type:Array,
            default(){
                return []
            }

        }
    },
    components:{
        GoodsListItem
    },
    
}
</script>

<style scoped>
    .goodslist{
        display: grid;
        grid-template-columns: 50% 50%;
        
        
    }
</style>