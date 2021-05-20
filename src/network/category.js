import {request} from 'network/request'
// 分类左边数据
export function getCategory(){
    return request({
        url:'/category',
       
    })
}
// 分类右边数据
export function getSubcategory(maitKey) {
    return request({
      url: '/subcategory',
      params: {
        maitKey
      }
    })
  }