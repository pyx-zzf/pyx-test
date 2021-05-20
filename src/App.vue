<template>
  <div id="app">
    <keep-alive exclude="detail">
      <router-view></router-view>
    </keep-alive>
    
    <main-tabbar />
    
  </div>
</template>

<script>
import mainTabbar from 'components/context/mainTabbar/mainTabbar.vue'

export default {
  components: { mainTabbar },
  name: 'App',
  component:{
    mainTabbar
  }

}
</script>

<style>
  *{
       margin: 0;
       padding:0;
   }
  
</style>
