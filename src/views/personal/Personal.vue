<template>
    <div id="personal">
        <personal-center /> 
        <van-notice-bar
            scrollable
            left-icon="volume-o"
            text="慎防假冒客服诈骗！学习安全小知识 "
        />
        <van-tabbar v-model="active" 
            :fixed="false"
            active-color="#f00"
            inactive-color="#ff976a"
            class="personal-tabbar">
            <van-tabbar-item icon="comment-circle" inactive-color="#8BE4E0">消息</van-tabbar-item>
            <van-tabbar-item icon="star">收藏</van-tabbar-item>
            <van-tabbar-item icon="like">关注</van-tabbar-item>
            <van-tabbar-item icon="eye">足迹</van-tabbar-item>
        </van-tabbar>
        <person-coupon />
        <van-divider />
        <div class="order">我的订单</div>
        <van-tabbar v-model="active" 
            :fixed="false"
            active-color="#f00"
            inactive-color="#ed6a0c">
            <van-tabbar-item icon="paid" >待付款</van-tabbar-item>
            <van-tabbar-item icon="logistics" >待收货</van-tabbar-item>
            <van-tabbar-item icon="records">待评价</van-tabbar-item>
            <van-tabbar-item icon="after-sale">退换/售后</van-tabbar-item>
            <van-tabbar-item icon="certificate">全部订单</van-tabbar-item>
        </van-tabbar>
        <van-divider
            :style="{ color: 'black', borderColor: 'red', padding: '5px 16px' }"
            >
            <van-icon name="fire" color='red' />热门精选
        </van-divider>
        <goods-list :goodsobj="goodsRecommend" />

    </div>
</template>

<script>
import personalCenter from './chilrdComps/personalCenter'
import personCoupon from './chilrdComps/personalCoupon'

import goodsList from 'components/context/GoodsList/GoodsList'
import { mapState, mapActions } from 'vuex'

export default {
    name:'personal',
    components:{
        personalCenter,
        personCoupon,
        goodsList
    },
    data() {
        return {
            active: 'home',
            
        };
        
    },
    computed:{
        ...mapState(['goods','goodsRecommend']),
        ...mapActions(['getGoodsRecommend'])
    },
    mounted(){
        this.$store.dispatch('getGoodsRecommend')
    }
}
</script>

<style lang="less" scoped>
    #personal{
        margin-bottom: 49px;
        .personal-tabbar{
            padding:15px 0;
        }
        .order{
            padding-left: 5px;
            margin: 10px 10px 20px;
        }

        
    }
    
</style>
    
