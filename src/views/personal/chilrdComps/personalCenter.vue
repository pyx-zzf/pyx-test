<template>
    <div class="personalInfo">
            <div class="personalInfo-left">
                <img src="~assets/img/personal/headerimg.png" alt="">
                <span>去登陆</span>
            </div>
            <van-icon class="personalInfo-detail" name="arrow" />
            
    </div>
</template>

<script>
export default {
    name:'personalCenter',

}
</script>

<style lang="less" scoped>
    .personalInfo{
        background-color: red;
        display: flex;
        padding: 20px;
        justify-content: space-between;
        
        .personalInfo-left{
            display: flex;
            img{
            padding: 10px;
            width: 50px;
            height: 50px;
            }
            span{
                font-size: 20px;
                line-height: 60px;
            }
        } 
        
        
        .personalInfo-detail{
            font-size: 40px;
            line-height: 70px;
            
        }
    }
</style>