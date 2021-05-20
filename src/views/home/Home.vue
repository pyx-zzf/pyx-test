<template>
    <div id="home">
        <navbar class="navbar" ><div slot="center" >购物街</div></navbar>
        <tab-control 
            class="tab-control" 
            :list="['流行','新款','精选']" 
            @tabClick='tabClick' 
            v-show="isShowtabcontrol"
            ref="tabControl1"
            ></tab-control>
        <scroll 
            class="content" 
            ref="scroll" 
            :probeType='3' 
            @scrolllength='scrolllength'
            :pullingUp='true'
            @pullup='pullup'>


            <home-swiper class="home-swiper" :banners='banners' @isimgLoad='isimgLoad' />
            <home-recommend :recommends='recommends' />
            <feature />
            <tab-control  :list="['流行','新款','精选']" @tabClick='tabClick' ref="tabControl"/>
            <goods-list :goodsobj="goods[currentIndex].lists" />
        </scroll>

        <back-top class="Back-Top" @click.native="BackTop" v-show="isShowBackTop" />
        
    </div>
</template>

<script>
import navbar from 'components/comment/NavBar/NavBar.vue'
import tabControl from 'components/context/tabControl/tabControl.vue'
import goodsList from 'components/context/GoodsList/GoodsList'
import Scroll from 'components/comment/Scroll/Scroll'


import homeSwiper from './chilrdComps/HomeSwiper'
import HomeRecommend from './chilrdComps/HomeRecommend'
import feature from './chilrdComps/feature'

import {getHomeMultiData,getHomeGoods} from 'network/home.js'
import {backTopShow} from '@/common/mixin.js'

export default {
    name:'home',
    mixins: [backTopShow],
    components:{
        navbar,
        homeSwiper,
        HomeRecommend,
        feature,
        tabControl,
        goodsList,
        Scroll,
        
        
    },
    data(){
        return {
            banners:[],
            recommends:[],
            goods:{
                'pop':{page:0,lists:[]},
                'new':{page:0,lists:[]},
                'sell':{page:0,lists:[]}
            },
            // 选择分类
            currentIndex:'pop',
            
            // 储存下拉的长度，以便后续在切换首页、购物车等页面时能够回到刚刚浏览的位置
            saveY:0,
            // 是否显示tab-control组件（better-scroll外的那个tab-control组件）
            isShowtabcontrol:false,
            // 储存滚动的距离
            tabscrollY:0

        }
    },
    created(){
        this.getHomeMultiData()
        this.getHomeGoods('pop')
        this.getHomeGoods('new')
        this.getHomeGoods('sell')
        
    },
    mounted(){
        this.$bus.$on('imageLoad',()=>{
            this.$refs.scroll.refresh()
        })
        
    },
    activated(){
        this.$refs.scroll.scroll.refresh()
        // 切回前一个页面的位置
        this.$refs.scroll.scrollTo(0,this.saveY,0)
    },
    deactivated(){
        // 记录切换前的位置
        this.saveY = this.$refs.scroll.scroll.y
    },
    methods:{
        // 事件监听方法
        tabClick(index){
            switch (index){
                case 0:
                    this.currentIndex='pop';
                    break;
                case 1:
                    this.currentIndex='new';
                    break;
                case 2:
                    this.currentIndex='sell';
                    break;
            }    
            // 确保两个tabControl的currentIndex保持一致
            this.$refs.tabControl.currentIndex=index
            this.$refs.tabControl1.currentIndex=index
        },
         // 根据滚动的位置判断是否显示回到顶部的标志
        scrolllength(position){
            this.backTopDemo(position)
            this.isShowtabcontrol = -position.y >= this.tabscrollY
        },
        // 上拉加载更多
        pullup(){
            // console.log('上拉加载更多')
            console.log(this.currentIndex)
            this.getHomeGoods(this.currentIndex)

        },
        // 
        isimgLoad(){
            // $el用于获取组件中的元素
            // 获取第二个tab-control组件距离顶部的距离
            this.tabscrollY = this.$refs.tabControl.$el.offsetTop
        },
        



        // 网络请求方法
        // 请求多个数据
        getHomeMultiData(){
            getHomeMultiData().then(res=>{
                this.banners = res.data.banner.list
                this.recommends = res.data.recommend.list
            
        })
        },
        
        // 请求商品数据
        getHomeGoods(type){
            const page = this.goods[type].page + 1
            getHomeGoods(type,page).then(res=>{
                // console.log(res.data.list)
                this.goods[type].lists.push(...res.data.list)
                this.goods[type].page += 1
                
                this.$refs.scroll.finishPullUp()
                
        })}
        

    }
    
}
</script>

<style scoped>
    #home{
        height: 100vh;
        position: relative;
    }
   .navbar{
    background-color: var(--color-tint);
    color: #fff;

    /* 这个设置是在原生滚动中起效，现在用了better-scroll局部滚动，所以这个设置是多余的 */
    /* position: fixed;
    top: 0;
    left: 0; 
    z-index: 9; */
   }
  .home-swiper{
      /* padding-top: 44px; */
  }
  .tab-control{
      position: absolute;
      top: 43px;
      left: 0;
      right: 0;
      z-index: 9;
  }
  .content{
      height: calc(100% - 110px);
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
  
</style>