<template>
    <div id="detailGoodsRate">
        <div class="commentBar">
            <h4>宝贝评论({{goodsRate.cRate}})</h4>
            <span>更多</span>
        </div>
        <div class="goodsRateList"
            v-for="item,index in goodsRate.list" :key="index">
            <img class="userHeadImg" :src="item.user.avatar" alt="">
            <span class="userName">{{item.user.uname}}</span>
            <div>
                <span class="commentTime">{{item.created | showDate}}</span>
                <span class="goodsStyle">{{item.style}}</span>
                <p class="userComment">{{item.content}}</p>
                <img  class="userCommentImg"
                    v-for="imgitem,imgindex in item.images" :key="imgindex"
                    :src="imgitem" alt="">
            </div>
        </div>
    </div>
</template>

<script>
import {formatDate} from '@/common/utils'
export default {
    name:'detailGoodsRate',
    props:{
        goodsRate:{}
    },
    filters:{
        showDate(value){
            // 1.将时间戳转成Date对象
            const data =new Date(value*1000)
            // 2.将data格式化
            return formatDate(data,'yyyy-MM-dd hh:mm:ss')
        }
    },
   
}
</script>

<style scoped>
    .commentBar{
        display: flex;
        justify-content: space-between;
        border-bottom: 2px solid #ccc;
        margin: 20px 5px 25px;
        padding: 8px;
        font-size: 20px;
    }
    #detailGoodsRate .goodsRateList{
        font-size: 18px;
        padding: 10px;
        
    }
    #detailGoodsRate .userHeadImg{
        width: 46px;
        height: 46px;
        border-radius: 23px;
        margin: 3px 5px;
    }
    #detailGoodsRate .userName{
        font-size: 19px;
        position: relative;
        left:15px;
        top:-20px;
        
    }
    #detailGoodsRate .commentTime,#detailGoodsRate .goodsStyle{
        font-size: 17px;
        color: #aaa;
        padding-left: 5px;
    }
    #detailGoodsRate .userComment{
        margin: 5px;
    }
    #detailGoodsRate .userCommentImg{
        width: 30%;
        margin-top: 2%;
        margin-left: 2%;
        margin-bottom: 2%;
    }
</style>