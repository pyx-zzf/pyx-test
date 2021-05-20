export default{
    // //必须是同步方法
        // increment(state){ //默认参数是传入上面的state对象
        //     state.count++
        // },
        // decrement(state){ 
        //     state.count--
        // },
    addCount(state,payload){
        payload.count +=1
    },
    addToCart(state,payload){
        payload.checked=true,
        state.cartList.push(payload)
    },
    
    // context.commit('getGoodsRecommend')
     
}