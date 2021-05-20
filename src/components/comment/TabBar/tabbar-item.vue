<template>
    <div class="tab-bar-item" @click="itemClick">
        <div v-if="!isShow"><slot name="item-icon"></slot></div>
        <div v-else><slot name="item-icon-active"></slot></div>
        <div :style="colorStyle"><slot name="item-text"></slot></div>
    </div>
</template>

<script>
export default {
    name:'tabbarItem',
    props:{
        path:String,
        activeColor:{
           type:String,
           default:'red'    
        }
    },
    computed:{
        isShow(){
            return this.$route.path.indexOf(this.path) !== -1
        },
        colorStyle(){
            return this.isShow?{color:this.activeColor}:{}
        }
    },
    methods:{
        itemClick(){
           this.$router.replace(this.path).catch(err => err);
        
        },
            
    }
    
}
</script>
<style scoped>
    .tab-bar-item{
    flex:1;
    text-align: center;
    height: 49px;
    
}
    .tab-bar-item img{
        margin-top: 3px;
        width: 24px;
        height: 24px;
        vertical-align: middle;
    }
</style>