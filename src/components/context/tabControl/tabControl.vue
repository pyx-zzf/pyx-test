<template>
    <div class='tabControl' > 
        <div class="tabCon" 
        v-for="item,index in list" :key="index"
        :class="{active:index===currentIndex}">
            <span @click="itemClick(index)">{{item}}</span>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        list:{
            type:Array,
            default(){
                return []
            }
        },
    },
    data(){
        return {
            currentIndex:0,
            
        }
    },
    methods:{
        itemClick(index){
            this.currentIndex=index
            this.$emit('tabClick',index)
        },
        

    }
}
</script>

<style scoped>
    .tabControl{
        display: flex;
        background-color: #fff;

    }
    .tabCon{
        text-align: center;
        font-size: 0px;
        flex: 1;
        padding: 5px 2px 20px;
        
    }
    .tabCon span{
        font-size: 20px;
    }
    .active{
        color:red;
        
    }
    .active span{
        padding:5px;
        border-bottom:3px solid red
        
    }
</style>