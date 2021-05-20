<template>
  <div>
    <tabbar>
      <tabbar-item path='/home'>
        <img slot="item-icon" src="~assets/img/home-page.png" />
        <img slot="item-icon-active" src="~assets/img/home-page-active.png" />
        <div slot="item-text">首页</div>
      </tabbar-item>
      <tabbar-item path='/classify'>
        <img slot="item-icon" src="~assets/img/category.png" />
        <img slot="item-icon-active" src="~assets/img/category-active.png" />
        <div slot="item-text">分类</div>
      </tabbar-item>
      <tabbar-item path='/cart'>
        <img slot="item-icon" src="~assets/img/cart.png" />
        <img slot="item-icon-active" src="~assets/img/cart-active.png" />
        <div slot="item-text">购物车</div>
      </tabbar-item>
      <tabbar-item path='/personal'>
        <img slot="item-icon" src="~assets/img/personal.png" />
        <img slot="item-icon-active" src="~assets/img/personal-active.png" />
        <div slot="item-text">我的</div>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import Tabbar from 'components/comment/TabBar/tabbar.vue'
import tabbarItem from 'components/comment/TabBar/tabbar-item'
export default {
  name:'mainTabbar',
  components: {
    Tabbar,
    tabbarItem

 },
  
        
}
</script>