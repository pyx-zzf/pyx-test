<template>
    <div class="detail">
        <detail-nav-bar @listsClick="listsClick" ref="navbar"/>
        <scroll :pullingUp='true' 
                :probeType='3'
                class="detailscroll"
                ref="scroll"
                @scrolllength='scrolllength'>
            <detailSwiper :topImages="topImages"  />
            <detail-goods-base-info :goodsBaseInfo="goodsBaseInfo" />
            <detail-goods-shop-info :goodsShopInfo="goodsShopInfo"/>
            <detail-goods-detail-img :goodsDetailImg="goodsDetailImg" @imageLoad="imageLoad" />
            <detail-goods-param-info ref="paramInfo" :goodsParamInfo="goodsParamInfo" />
            <detail-goods-rate ref="goodsRate" :goodsRate="goodsRate" />
            <div class="divider" ref="divider"><canvas class="divider1" />推荐<canvas class="divider2" /></div>
            <goods-list :goodsobj="goodsRecommend" />
        </scroll>
        <detail-bottom-bar class="bottomBar" @addCart="addCart" />
        <back-top class="Back-Top" @click.native="BackTop" v-show="isShowBackTop" />
    </div>
</template>


<script>
import detailNavBar from './chilrdCompos/detailNavBar'
import detailSwiper from './chilrdCompos/detailSwiper'
import detailGoodsBaseInfo from './chilrdCompos/detailGoodsBaseInfo'
import detailGoodsShopInfo from './chilrdCompos/detailGoodsShopInfo'
import detailGoodsDetailImg from './chilrdCompos/detailGoodsDetailImg'
import detailGoodsParamInfo from './chilrdCompos/detailGoodsParamInfo'
import detailGoodsRate from './chilrdCompos/detailGoodsRate'
import detailBottomBar from './chilrdCompos/detailBottomBar'

import Scroll from 'components/comment/Scroll/Scroll'
import goodsList from 'components/context/GoodsList/GoodsList'
import {getDetail,getGoodsBaseInfo,getGoodsShopInfo,getGoodsParam} from 'network/detail'
import {debounce} from '@/common/utils.js'
import {backTopShow} from '@/common/mixin.js'
import {mapState} from 'vuex'

export default {
    name:'detail',
    mixins: [backTopShow],
    data(){
        return{
            iid:null,
            topImages:[],
            goodsBaseInfo:{},
            goodsShopInfo:{},
            goodsDetailInfo:{},
            goodsDetailImg:{},
            goodsParamInfo:{},
            goodsRate:{},
            // goodsRecommend:[],//推荐区域的数据
            themeTopYs:[],//把各组件的offsetTop依次放入数组里
            getThemeTopY:null,//获取各组件的offsetTop的方法
            detailScrollY:0,//详情页滚动的Y值
            currentIndex:0, //初始化滚动时的navbar下标
            
        }
    },
    computed:{
        ...mapState(['goodsRecommend'])
    },
    components:{
        detailNavBar,
        detailSwiper,
        detailGoodsBaseInfo,
        detailGoodsShopInfo,
        detailGoodsDetailImg,
        detailGoodsParamInfo,
        detailGoodsRate,
        goodsList,
        Scroll,
        detailBottomBar,
        
    },
    created(){
        // 保存传入的iid
        this.iid=this.$route.params.iid

        
    },
    mounted(){
        // 获取详情页的数据
        getDetail(this.iid).then(res=>{ 
            console.log(res)
            const data = res.result
            // 获取顶部轮播图的图片
            this.topImages = data.itemInfo.topImages
            // 获取商品的基本信息
            this.goodsBaseInfo = new getGoodsBaseInfo(data.itemInfo,data.columns,data.shopInfo.services)
            // 获取商品店铺的信息
            this.goodsShopInfo = new getGoodsShopInfo(data.shopInfo)
            // 获取商品详情图及相关信息
            this.goodsDetailImg = data.detailInfo
            // 获取商品参数
            this.goodsParamInfo =new getGoodsParam(data.itemParams.info,data.itemParams.rule)
            // 获取商品评论
            this.goodsRate = data.rate
            // 获取推荐的数据
            // getRecommend().then(res =>{
            //     console.log(res)
            //     this.goodsRecommend =res.data.list
            //     console.log(this.goodsRecommend)
            // })
            this.$store.dispatch('getGoodsRecommend')

            
        })
        // this.$bus.$on('imageLoad',()=>{                                                                          
        //     this.$refs.scrollimg.refresh()
        // })
        this.getThemeTopY = debounce(()=>{
            this.themeTopYs=[]
            this.themeTopYs.push(0)
            this.themeTopYs.push(this.$refs.paramInfo.$el.offsetTop - 44)
            this.themeTopYs.push(this.$refs.goodsRate.$el.offsetTop - 44)
            this.themeTopYs.push(this.$refs.divider.offsetTop - 44)
            console.log(this.themeTopYs)
        },100)
    },
    methods:{
        // 监听图片加载完成后的操作
        imageLoad(){
           this.$refs.scroll.refresh()
        // 等图片加载完，获取组件所在的位置即真正的offsetTop，并放在数组里供调用
           this.getThemeTopY()
       },
        // 实现点击切换参数、评论等区域
        listsClick(index){
           console.log(index)
           this.$refs.scroll.scrollTo(0,-this.themeTopYs[index],200)
       },
        // 获取滚动的位置,根据滚动的高度和各个分项的高度做比较来
        scrolllength(position){
            this.detailScrollY= -position.y
            let length =this.themeTopYs.length
            for(let i=0; i<length;i++){
                if(this.currentIndex !== i &&
                    (i<length-1 && (this.detailScrollY >= this.themeTopYs[i] &&  this.detailScrollY < this.themeTopYs[i+1])
                    ||( i === length-1 && this.detailScrollY >this.themeTopYs[i]))){
                    this.currentIndex =i
                    this.$refs.navbar.currentindex = this.currentIndex
                }
            }
            // 调用混入的方法
            this.backTopDemo(position)
            
        },
        addCart(){
            console.log('成功加入购物车')
            const product ={}
            product.image = this.topImages[0]
            product.desc=this.goodsBaseInfo.desc
            product.title=this.goodsBaseInfo.title
            product.price=this.goodsBaseInfo.realprice
            product.iid=this.iid
            this.$store.dispatch('addInCart',product)
            this.$toast.show('成功添加1件商品')
        },
        
            
        
   }
}
</script>

<style scoped>
    .detail{
        height: 100vh;
    }
    .detailscroll{
        height: calc(100% - 99px);
        overflow: hidden;
    }
    .Back-Top >>> img{
      width: 33px;
      height: 33px;
      position: fixed;
      bottom: 100px;
      right: 20px;
      z-index: 9;
  }
  .bottomBar{
      position: fixed;
      bottom: 0px;
      z-index: 10;
  }
  .divider{
      margin: 20px 5px 10px;
  }
  .divider1,.divider2{
      width: 38%;
      height: 0;
      border: 1px solid #ccc;
      margin: 0 10px;
  }
  
  .divider2{
      position: relative;
      right: 1%;
  }
</style>