<template>
    <div class="personCoupon">
        <div class="personCoupon-left">
            <div>购物车</div>
            <div class="shopNum">{{length}}件商品 ></div>
            <van-icon class="van-icon"
            name="shopping-cart-o" color="#ff976a" size="3rem"/>
        </div>

        <div class="personCoupon-right">
            <van-cell title="卡券红包" is-link value="我的活动券"  />
            <van-cell title="补贴保障" is-link value="退货补运费" />
            <van-cell title="我的钱包" is-link value="白付美在这" />
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    name:'personCoupon',
    computed:{
        ...mapGetters({
            length:'goodsCartCount',
        }) 
    }
}
</script>

<style lang="less" scoped>
    *{
        margin: 0;
        padding: 0;

    }
    .personCoupon{
        display: flex;
        justify-content: space-between;
        margin: 10px 10px 5px 0;
        
        
        .personCoupon-left{
            width: 30%;
            padding:0 15px ;
            .shopNum{
                font-size: 14px;
                color: #ccc;
                
            }
            
        }
        .personCoupon-right{
            width: 70%;
            padding: 10px 0;
            background-color: #fffbe8;
            border-radius: 10px;
            /deep/ .van-cell{
                background-color: #fffbe8;
                padding: 2px;
            }
            
            
        }
    }
</style>