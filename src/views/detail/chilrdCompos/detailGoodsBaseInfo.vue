<template>
    <div id="goodsBaseInfo">
        <div class="goodsTitle">{{goodsBaseInfo.title}}</div>
        <div class="goodsPrice">
            <span class="realprice">{{goodsBaseInfo.newprice}}</span>
            <span class="oldprice">{{goodsBaseInfo.oldprice}}</span>
            <div class="todaySpecial" v-show="isShow">{{goodsBaseInfo.discountDesc}}</div>
        </div>

        <div class="goodscolumns">
            <div class="columnsitem" v-for="item,index in goodsBaseInfo.columns" :key="index">
                {{item}}
            </div>
        </div>

        <div class="goodsservices">
            <div  v-for="item,index in goodsBaseInfo.services" :key="index">
                <img :src="item.icon" alt="">
                <span>{{item.name}}</span>
            </div> 
        </div>
    </div>
</template>

<script>

export default {
    name:'goodsBaseInfo',
    computed:{
        isShow(){ return this.goodsBaseInfo.discountDesc ? true : false}
    },
    props:{
        goodsBaseInfo:{}
    },
    


}
</script>

<style scoped>
    .goodsTitle{
        font-size: 18px;
        padding: 15px 5px;

    }
    .goodsPrice{
        display: flex;
        
    }
    .goodsPrice .realprice{
        font-size: 25px;
        color: salmon;
        font-weight: bold;
        margin-right:2px ;
    }
    .goodsPrice .oldprice{
        padding:15px 5px 0;
        text-decoration: line-through;
        color: #ccc;

    }
    
    .goodsPrice .todaySpecial{
        height: 20px;
        padding: 3px;
        background-color: salmon;
        display: inline-block;
        border-radius: 6px;
        line-height: 20px;
        font-size: 18px;
        color: seashell;
    }
    .goodscolumns{
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #ccc;
    }
    .goodscolumns .columnsitem{
        padding: 13px 8px; 
    }
    .goodsservices{
        display: flex;
        justify-content: space-between;
        padding: 5px 5px 15px;
        margin: 5px 0;
        border-bottom: 1px solid #ccc;
        flex-wrap: wrap;
    }
    .goodsservices img{
        width: 12px;
        height: 12px;
    }
    .goodsservices span{
        font-size: 10px;
    }
</style>