<template>
    <div class="goodslistItem" @click="todetail">
        <img :src="showImg" alt="" @load="imageLoad">
        <div class="goodsdetail">
            <p>{{goodslist.title}}</p>
            <span class="goodsprice">￥{{goodslist.price}}</span>
            <span class="goodscfav">{{goodslist.cfav}}</span>
        </div>
    </div>
    
</template>

<script>
export default {
    props:{
        goodslist:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    computed:{
        showImg(){return this.goodslist.show? this.goodslist.show.img : this.goodslist.image} 
    },
    methods:{
        imageLoad(){
            // console.log('imageLoad')
            this.$bus.$emit('imageLoad')
        },
        todetail(){
            // console.log(this.goodslist)
            this.$router.push('/detail/'+ this.goodslist.iid)
        }
    }
}
</script>

<style scoped>
    .goodslistItem{
        padding: 5px;
    }
    .goodslistItem img{
        width: 100%;
       
    }
    .goodslistItem .goodsdetail{
        width: 100%;
    }
    .goodslistItem .goodscfav{
        position: relative;
        left: 20px;
        padding-left: 15px;
        vertical-align: middle;
    }
    .goodslistItem .goodscfav::before{
        content: '';
        background: url('~assets/img/home/Collecting.png') 0 0/14px 14px;
        position: absolute;
        left: 0px;
        top: 0px;
        width: 14px;
        height: 14px;

       
    }
    
    .goodsdetail .goodsprice{
        color:red;
    }
    .goodsdetail p{
        /* 设置描述在一行显示且隐藏超出的部分，超出部分用省略号代替 */
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin-bottom: 3px;
    }



</style>