<template>
    <div class="bottom-bar">
        <div class="left">
            <div>
                <img src="~assets/img/detail/customer-service.png" />
                <span class="text">客服</span>
            </div>
            <div>
                <img src="~assets/img/detail/store.png" />
                <span class="text">店铺</span>
            </div>
            <div>
                <img src="~assets/img/detail/collect.png" />
                <span class="text">收藏</span>
            </div>
        </div>
        <div class="right">
            <div class="cart" @click="addCart">加入购物车</div>
            <div class="buy">购买</div>
        </div>
    </div>
</template>

<script>
export default {
    name:'bottomBar',
    methods:{
        addCart(product){
            this.$emit('addCart',product)
        }
    }





}
</script>

<style scoped>
    .bottom-bar{
        width: 100vw;
        height: 49px;
    }
    .bottom-bar,.right{
        display: flex;
        flex-direction: row;
        
    }
    .left{
        width: 45%;
        background-color:#fff;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .left img{
        width: 22px;
        height: 22px;
    }
    .left div{
        display: flex;
        flex-direction: column;
    }
    .right{
        width: 55%;
       
    }
    .right .cart,.right .buy{
        width: 50%;
        height:49px;
        line-height: 49px;
        text-align: center;
        
    }
    .right .cart{
        background-color: yellow;
    }
    .right .buy{
        background-color: rgb(250, 170, 214);
    }
</style>