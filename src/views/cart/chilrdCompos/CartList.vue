<template>
    <div class="cartList">
        <div class="cartListItem" 
            v-for="item,index in goodsInCart" :key="index">
            <div class="cart-left">
                
                <checked slot="cartListChecked" v-model="item.checked" />
                <img :src="item.image" alt="">
            </div>
            <div class="cart-right">
                <p class="title">{{item.title}}</p>
                <p class="description">{{item.desc}}</p>
                <div class="priceAndNumber">
                    <span class="price">￥{{item.price}}</span>
                    <span class="number">X{{item.count}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
import Checked from 'components/comment/Checked/Checked'
export default {
    
    name:'CartList',
    components:{
        Checked
    },
    data(){
        return{
            resultPrice:0,
            amount:0,
            isSelectAll:false,
            
        }
    },
    computed:{
        ...mapGetters({
            goodsInCart:'goodsInCart'
            }),
        
    },
    watch: {
        goodsInCart: {
            handler (newVal) {
                console.log(newVal)
                this.resultPrice = newVal.filter(item => {
                    return item.checked
                }).reduce((preValue,item) => {
                    return preValue + item.price * item.count
                },0).toFixed(2)
                this.amount =newVal.filter(item => {
                    return item.checked
                }).reduce((pre,item)=>{
                    return pre + item.count
                },0)
                this.isSelectAll = !newVal.find(item => !item.checked)
                console.log(this.resultPrice,this.amount,this.isSelectAll)
                this.$bus.$emit('sumResultPrice',this.resultPrice)
                this.$bus.$emit('sumAmount',this.amount)
                this.$bus.$emit('SelectAll',this.isSelectAll)
            },
            deep: true,
            immediate:true
        },
    },
    
}
</script>

<style scoped>
    
    .cartListItem{
        width: 100vw;
        border-bottom: 1px solid #ccc;
        display: flex;
        height: 100px;
        padding: 5px 3px;
    }
    .cart-left{
        display: flex;
        
        align-items: center;
    }
    .cartListItem img{
        width: 100px;
        height: 100px;
        /* 调整图片的比例 */
        object-fit: cover; 
    }
    .cart-right{
        width: calc(100vw - 100px - 60px);
        margin-left:10px;
    }
    .cart-right .title,.cart-right .description{
        width: 90%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        padding: 5px 3px;

    }
    .priceAndNumber{
        margin: 15px auto;
        display: flex;
        justify-content: space-between;

    }
    .priceAndNumber .price{
        color: red;
    }
    
</style>