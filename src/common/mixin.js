import BackTop from 'components/comment/Back-Top/Back-Top'

export const backTopShow={
    data(){
        return{
            // 是否显示回到顶部的箭头
            isShowBackTop:false,
        }
    },
    components:{
        BackTop
    },
    methods:{
        // 点击回到顶部
        BackTop(){
            this.$refs.scroll.scrollTo(0,0,600)
        },
        backTopDemo(position){
            this.isShowBackTop = -position.y >1000
        }
       
    },
}
