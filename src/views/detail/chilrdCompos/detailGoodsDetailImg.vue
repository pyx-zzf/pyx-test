<template>
    <div id="goodsDetailImg" v-if="Object.keys(goodsDetailImg).length !== 0">
        <div class="goodsDetailImg" v-for="num in goodsDetailImg.detailImage.length" :key="num">
            <div class="detail-introduce">{{goodsDetailImg.detailImage[num-1].key}}</div>
            <img v-for="item,index in goodsDetailImg.detailImage[num-1].list" :key="index"
                 :src="item" alt=""
                 @load="isImageLoad">
                 
        </div>
        
    </div>
</template>

<script>
export default {
    name:"goodsDetailImg",
    data(){
        return{
            count:0,
            imgLength:0
        }
    },
    props:{
        goodsDetailImg:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    methods:{
        isImageLoad(){
            if(++this.count === this.imgLength){
                this.$emit('imageLoad')
            }
            
        },

    },
    watch:{
        goodsDetailImg(){
            for(let i in this.goodsDetailImg.detailImage){
                this.imgLength= this.goodsDetailImg.detailImage[i].list.length + this.imgLength
            }
            
            
        }
        
    }

}
</script>

<style scoped>

    #goodsDetailImg{
        width: 100vw;
        border-top: 3px solid #efefef;
        margin-top: 30px;
    }
    .detail-introduce{
        font-size: 20px;
        padding: 15px 10px;
    }
    .goodsDetailImg img{
        width: 100%;
        height: auto;
    }
</style>