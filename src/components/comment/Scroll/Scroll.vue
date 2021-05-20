<template>
    <div class="wrapper" ref="wrapper">
        <div class="content" >
            <slot></slot>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
    name:'Scroll',
    props:{
        probeType:{
            type:Number,
            default:0
            },
        pullingUp:{
            default:false
        }
    },
    data(){
        return{
            scroll:null,
            
        }
    },
    mounted(){
        // 创建滚动对象
        this.scroll = new BScroll(this.$refs.wrapper,{
            click:true,
            observeDOM:true,
            mouseWheel:true,
            // 监听scroll事件的开关
            probeType:this.probeType,
            // 监听上拉事件的开关
            pullUpLoad:this.pullingUp
        })
        // 监听滚动位置，并传递到父组件Home.vue,detail.vue
        this.scroll.on('scroll',(position)=>{
            this.$emit('scrolllength',position)
        })
        // 监听上拉事件
        this.scroll.on('pullingUp',()=>{
            // console.log('上拉加载更多')
            this.$emit('pullup')

            
        })
        

        

    
    },
    methods:{
        scrollTo(x,y,time=500){
            this.scroll && this.scroll.scrollTo(x,y,time)
        },
        finishPullUp(){
            this.scroll && this.scroll.finishPullUp()
        },
        // 刷新
        refresh(){
            this.scroll && this.scroll.refresh()
        },
    }
}
</script>

<style scoped>
    .wrapper{
        height: 100%;
    }
</style>