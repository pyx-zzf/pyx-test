import {request} from 'network/request'

export function getDetail(iid){
    return request({
        url:'/detail',
        params:{
            iid,
        }
    })
}

export function getRecommend(){
    return request({
        url:'/recommend'
    })
}

export class getGoodsBaseInfo{
    constructor(itemInfo,columns,services){
        this.title=itemInfo.title
        this.desc=itemInfo.desc
        this.discountDesc=itemInfo.discountDesc
        this.oldprice=itemInfo.oldPrice
        this.newprice=itemInfo.price
        this.columns=columns
        this.services=services
        this.realprice=itemInfo.lowNowPrice
        this.discountDesc = itemInfo.discountDesc
    }
}

export class getGoodsShopInfo{
    constructor(shopInfo){
        this.name=shopInfo.name
        this.score=shopInfo.score
        this.shopLogo=shopInfo.shopLogo
        this.cFans=shopInfo.cFans
        this.cGoods=shopInfo.cGoods
        this.cSells=shopInfo.cSells
    }
}

export class getGoodsParam{
    constructor(info, rule){
        // 注: images可能没有值(某些商品有值, 某些没有值)
        this.image = info.images ? info.images[0] : '';
        this.infos = info.set;
        this.sizes = rule.tables;
  
    }
}