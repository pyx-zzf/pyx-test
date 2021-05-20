export default{
    // 相当于计算属性computed
    // addgereninfo(state){
        //     return info =>{
        //         return state.name.filter(s=>s.age >info)
        //     }
        // }


        // 获取购物车列表的商品长度，并不是总数量
        goodsCartCount(state){
            return state.cartList.length
        },
        // 获取购物车列表
        goodsInCart(state){
            return state.cartList
        },
        
        
}