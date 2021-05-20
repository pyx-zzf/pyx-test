<template>
  <div id="tab-bar">  
    <slot></slot>
  </div>
</template>


  
<style scoped>
  body{
    margin: 0;
    padding: 0;
    }

#tab-bar{
    display: flex;
    position: fixed;
    left: 0;
    bottom: 0;
    right: 0;
    background: #f6f6f6;
    box-shadow: 0 -2px 1px rgba(60,60,60,0.07);
    }
</style>