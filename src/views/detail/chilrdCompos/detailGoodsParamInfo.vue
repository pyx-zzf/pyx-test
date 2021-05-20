<template>
    <div id="goodsDetailParam">
        <h4 class="paramtitle">产品参数</h4>
        <table cellspacing="0">
            <tr class="paramitem"
                v-for="item,index in goodsParamInfo.infos" :key="index">
                <td class="paramkey">{{item.key}}</td>
                <td class="paramvalue">{{item.value}}</td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    name:'goodsDetailParam',
    props:{
        goodsParamInfo:{}
    },
    
}
</script>

<style scoped>
    #goodsDetailParam{
        margin: 10px auto;
        border-top: 3px solid #cfcfcf;
    }
    h4{
        font-size: 20px;
        padding: 20px 10px;
    }
    table{
        margin: 5px 5px;
    }
    .paramitem td{
        border-bottom: 1px solid pink;
        height: 35px;
        padding: 7px;
        font-size: 18px;
        
    }
    .paramitem .paramkey{
        width: 20%;
    }
</style>