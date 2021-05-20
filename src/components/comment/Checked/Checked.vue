<template>
    <div class="checked" @click="imgChange">
        <div v-if="!value"><img src="~assets/img/choose.png" alt="未选择" /></div>
        <div v-else><img src="~assets/img/choose-active.png" alt="已选择" /></div>
    </div>
</template>

<script>
export default {
    name:'checked',
    props:{
        value:{
            type:Boolean,
            default:true
        },
    },
    methods:{
        imgChange(){
            this.$emit('input',!this.value)
            this.$emit('SelectAll')
        }
    }
}
</script>

<style scoped>
    
    .checked img{
        width: 30px;
        height:30px;
        
    }
</style>