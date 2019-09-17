import Vue from 'vue'
import App from './App'

import despBasePlugin from 'desp-base-plugin'
import 'desp-base-plugin/dist/styles/despBasePlugin.css'
Vue.use(despBasePlugin)

import despComponentPlugin from 'desp-components-plugin'
Vue.use(despComponentPlugin)

/** 开发过程中，您可以使用从src/indes.js中直接引用编写的组件，可以实现热更新等操作方便开发**/
import despComponents from '../src/index.js'
Vue.use(despComponents)


//全局挂载：焦点图
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper);



/** 当组件开发完成并打包后，可以使用以下方案来加载并测试插件，请完全按照下列代码进行测试**/
/*import {module} from '../dist/despComponent.min.js'
Vue.use(module.default)*/

Vue.config.productionTip = false;
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
