<template>
    <div id="cart">
        <!-- 顶部导航栏 -->
        <nav-bar><div slot="center">购物车（{{length}}）</div></nav-bar>
        <!-- 商品列表 -->
        <scroll
            :pullingUp='true'
            :probeType='3'
            ref="scroll"
            class="cartScroll">
            <cart-list  />
        </scroll>
        <!-- 底部结算栏 -->
        <cart-sub  />
    </div>
</template>

<script>
import NavBar from 'components/comment/NavBar/NavBar'
import Scroll from 'components/comment/Scroll/Scroll'

import CartList from './chilrdCompos/CartList'
import CartSub from './chilrdCompos/CartSub'

import {mapGetters} from 'vuex'

export default {
    name:'cart',
    components:{
        NavBar,
        CartList,
        Scroll,
        CartSub,
    },   
    computed:{
        ...mapGetters({
            length:'goodsCartCount',
        }) 
    },
    activated(){
        this.$refs.scroll.refresh()
    },
}
</script>

<style scoped>
    #cart{
        height: 100vh;
    }
    .cartScroll{
        height: calc(100% - 133px);
        overflow: hidden;
    }

</style>