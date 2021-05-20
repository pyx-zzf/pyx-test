<template>
    <div class="navbar">
        <div class="left" 
            :style="{'background-color':bgcolor,color:ftcolor}">
            <slot name="left"></slot></div>
        <div class="center" 
            :style="{'background-color':bgcolor,color:ftcolor}" >
            <slot name="center"></slot></div>
        <div class="right" 
            :style="{'background-color':bgcolor,color:ftcolor}">
            <slot name="right"></slot></div>
    </div>
</template>

<script>
export default {
    name:'navbar',
    props:{
        bgcolor:{
            type:String,
            default:'red',
            vaildator (value){
                return /^#([0-9a-fA-F]{3}|#[0-9a-fA-F]{6})$/.bgcolor(value)
            }
        },
        ftcolor:{
            type:String,
            default:'#000',
            vaildator (value){
                return /^#([0-9a-fA-F]{3}|#[0-9a-fA-F]{6})$/.ftcolor(value)
            }
        },
        
    }
}
</script>

<style scoped>
    .navbar{
        display: flex;
        width: 100%;
        height: 44px;
        line-height: 44px;
        text-align: center;
        

    }
    .left,.right{
        width: 40px;
    }
    .center{
        flex: 1;
        font-size: 20px;
        
    }
</style>