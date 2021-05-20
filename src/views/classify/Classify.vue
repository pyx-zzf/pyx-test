<template>
    <div id="classify">
        <nav-bar><span slot="center">分类</span></nav-bar>
        <div class="classify">
            <div class="classify-left">
                <van-sidebar v-model="activeKey">
                    <van-sidebar-item 
                        ref="sidebarItem"
                        v-for="item,index in categoryList" :key="index"
                        :title="item.title"  @click="changeCategory(item.maitKey)" />
                </van-sidebar>
            </div>
            <div class="classify-right">
                <van-grid :gutter="12">
                    <van-grid-item v-for="imgitem,imgindex in maitKeyList" :key="imgindex" 
                    :icon="imgitem.image" 
                    :text="imgitem.title" 
                    :url="imgitem.link" />
                </van-grid>
            </div>
        </div>
        
    </div>
</template>

<script>
import NavBar from 'components/comment/NavBar/NavBar'
import {getCategory,getSubcategory} from 'network/category.js'
export default {
    name:'classify',
    data(){
        return{
            activeKey: 0,
            categoryList:[],
            maitKeyList:[],
            maitKey:'',
        }
    },
    components:{
        NavBar
    },
    created(){
        this.getCategory()
        this.getSubcategory('3627')
    },
    methods:{
        // 监听点击事件切换对应的分类商品
        changeCategory(maitKey){
            this.maitKey = maitKey
            this.getSubcategory(this.maitKey)
        },

        // 获取左边导航栏的分类导航列表
        getCategory(){
            getCategory().then(res =>{
                console.log(res)
                this.categoryList = res.data.category.list
            })
        },
        // 获取右边每一个分类中的分类商品
        getSubcategory(maitKey){
            getSubcategory(maitKey).then(res =>{
                console.log(res)
                this.maitKeyList=res.data.list
            })
        },
    },
}
</script>

<style lang="less" scoped>
    
    .classify{
        display: flex;
        height: calc(100vh - 49px);
        .classify-left{
            /deep/ .van-sidebar{
               height: calc(100vh - 49px); 
            }
        }
        .classify-right{
            
            overflow-y: auto;
            
            /deep/ .van-grid {
                margin-bottom: 50px;
            }
            /deep/ .van-icon__image{
                width: 2em;
                height: 2em;
            }
            /deep/ .van-grid-item__content--surround::after{
                    border-width:0;
            } 
        }
       
    }
</style>