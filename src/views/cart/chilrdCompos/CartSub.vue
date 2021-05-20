<template>
    <div class="cartSubBar">
        <div class="chooseAll" >
            <checked ref="isSelectAll" v-model='isSelectAll' />
            <span>全选</span>
        </div>
        <div class="sumAll" >合计：{{resultPrice}}</div>
        <div class="goToPay" >去结算（{{amount}}）</div>
    </div>
</template>

<script>
import Checked from 'components/comment/Checked/Checked'
import {mapGetters} from 'vuex'
export default {
    name:'CartSub',
    data(){
        return{
            resultPrice:0,
            amount:0,
            isSelectAll:false
        }
    },
    compurted:{
        ...mapGetters({goodsInCart:'goodsInCart'})
    },
    components:{
        Checked,
    },
    mounted(){
        this.$bus.$on('sumResultPrice',resultPrice=>{
            this.resultPrice = resultPrice
        })
        this.$bus.$on('sumAmount',amount=>{
            this.amount =amount
        })
        this.$bus.$on('SelectAll',isSelectAll=>{
            this.isSelectAll = isSelectAll 
        }) 
        this.$refs.isSelectAll.$on(
            "input",function (value) {
                this.isSelectAll = !value
                if(this.isSelectAll){
                    this.$store.state.cartList.forEach(item => item.checked =false)
                }else{
                    this.$store.state.cartList.forEach(item => item.checked =true)  
                } 
            }
        )
    },
    
    
}
</script>

<style scoped>
    .cartSubBar{
        display: flex;
        background-color: #efefef;
        align-items: center;
        justify-content: space-between;
        text-align: center;
        padding: 2px 0;
    }
    .chooseAll{
        display: flex;
        width: 80px;
    }
    .chooseAll span{
        position: relative;
        left: 10px;
        top: 5px;
    }
    .sumAll{
        flex: 1;
        justify-content: center;
        height: 34px;
        line-height: 34px;
        
    }
    .goToPay{
        
        background-color: red;
        width: 120px;
        height: 34px;
        line-height: 34px;
        text-align: center;
    }
</style>