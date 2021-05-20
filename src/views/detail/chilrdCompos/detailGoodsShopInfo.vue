<template>
    <div id="goodsShopInfo">
        <div class="shop-name">
            <img :src="goodsShopInfo.shopLogo" alt="">
            <span>{{goodsShopInfo.name}}</span>
        </div>

        <div class="shop-info">
            <div class="left">
                <div class="goodsSells">
                    <div>{{goodsShopInfo.cSells}}</div>
                    <span>总销量</span>
                </div>
                <div class="goodsall">
                    <div>{{goodsShopInfo.cGoods}}</div>
                    <span>全部宝贝</span>
                </div>
            </div>
            <div class="right">
                <table>
                    <tr v-for="(item, index) in goodsShopInfo.score" :key="index">
                        <td>{{item.name}}</td>
                        <td class="score" :class="{'score-better': item.isBetter}">{{item.score}}</td>
                        <td class="better" :class="{'better-more': item.isBetter}"><span>{{item.isBetter ? '高':'低'}}</span></td>
                    </tr>
                </table>  
            </div>
        </div>
        <div class="shopIn">进店逛逛</div>
    </div>
</template>

<script>
export default {
    name:'goodsShopInfo',
    props:{
        goodsShopInfo:{},
    }
}
</script>

<style scoped>
    .score{
        color: rgb(8, 211, 86);
    }
    .better{
        color: white;
        background-color:rgb(8, 211, 86);
    }
    .score-better{
        color: tomato;
    }
    .better-more{
        background-color:tomato ;
    }

    .shop-info{
        display: flex;
        justify-content: space-evenly;
    }
    .shop-info .left{
        display: flex;
    }
    .goodsSells,.goodsall{
        margin: 15px;
    }

    .shop-name span{
        font-size: 18px;
        position: relative;
        left: 20px;
        top: -40px;
    }
    .shop-name img{
        margin: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
    }
    .right td{
        padding: 5px;
    }
    .shopIn{
        position: relative;
        left: calc(50% - 80px);
        width: 100px;
        height: 60px;
        line-height: 60px;
        background-color: #ccc;
        border-radius: 15px;
        text-align: center;
        margin: 20px;
    }
</style>