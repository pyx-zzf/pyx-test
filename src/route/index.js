import Vue from 'vue'
import VueRouter from 'vue-router'

const home = ()=> import('../views/home/Home')
const classify = ()=> import('../views/classify/Classify')
const cart = ()=> import('../views/cart/Cart')
const personal = ()=> import('../views/personal/Personal')
const detail = ()=> import('../views/detail/detail')


// 安装插件
Vue.use(VueRouter)

//配置路由
const routes =[
    {
        path:'',    
        redirect:'/home',
        
        
    },
    {
        path:'/home', 
        component:home,
        
    },
    {
        path:'/classify', 
        component:classify,
        
    },
    {
        path:'/cart', 
        component:cart,
        
    },
    {
        path:'/personal', 
        
        component:personal,
        
    },
    {
        path:'/detail/:iid', 
        // name:detail,
        component:detail,
        // meta:{
        //     keepAlive:true
        // }
    },
]
const router = new VueRouter({
    routes,
    // mode:'history'
})


//导出
export default router