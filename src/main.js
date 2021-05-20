import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './route'

import Vant from 'vant';
import 'vant/lib/index.css';
import 'vant/lib/index.less';
Vue.use(Vant);

// 自己封装的toast 弹窗插件
import Toast from 'components/comment/Toast'
Vue.use(Toast)

// 添加事件总线
Vue.prototype.$bus = new Vue()



Vue.config.productionTip = false
new Vue({ 

  render: h => h(App),
  router,
  store,
    
}).$mount('#app')
