import {getRecommend} from 'network/detail'
export default{
    // //异步方法
        // getData (){
        //     request({
        //         url:'/home/multidata'

        //     }).then(res=>{
        //         console.log(res)
        //         store.commit('getData')
        //     })
        // }
    addInCart(context,payload){
        // 1、获取要加入购物车的商品的iid,以便后续操作
        let productIid = context.state.cartList.find(item => item.iid === payload.iid)
        // 2、检查购物车中是否有正要加入的商品，有的话就在数量上+1，没有的话就把商品加入购物车，数量为1
        if(productIid){
            context.commit('addCount',productIid)
        }else{
            payload.count=1
            context.commit('addToCart',payload)
        }
    },
    getGoodsRecommend(context){
        getRecommend().then(res =>{
            console.log(res)
            context.state.goodsRecommend = res.data.list
            console.log(context.state.goodsRecommend )
            
        })
    }
    
   
    
    
    
    
}