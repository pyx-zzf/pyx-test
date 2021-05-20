<template>
    <div>
        <nav-bar class="detailNavbar" bgcolor="#fff">
            <img src="~assets/img/back.png" alt="" slot="left" @click="getBack">
            <div slot="center" 
                class="centerItem" 
                v-for="item,index in lists" :key="index"
                :currentindex="index"
                @click="chooseitem(index)"
                :class="{fontcolor:index===currentindex}"> 
                {{item}}
            </div>
        </nav-bar>  
    </div>
</template>

<script>
import NavBar from 'components/comment/NavBar/NavBar'



export default {
    name:'detailNavBar',
    components:{
        NavBar,
    },
    data(){
        return{
            lists:['商品','参数','评论','推荐'],
            currentindex:0,

        }
    },
    methods:{
        // 监听选择的下标来改变导航的选中盒子
        chooseitem(index){
            this.currentindex=index
            this.$emit('listsClick',index)
           
        },
        getBack(){
            this.$router.go(-1)
        }
        

    }

}
</script>

<style scoped>
    
    .detailNavbar img{
        width: 25px;
        height: 25px;
        vertical-align: middle;
        
    }

    .detailNavbar>>>.center{
        display: flex;
        font-size: 13px;
        
        
    }
    .centerItem{
        font-size: 19px;
        flex: 1;
    }
    .fontcolor{
        color: red;
    }
</style>