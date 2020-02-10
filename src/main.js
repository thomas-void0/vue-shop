import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from "./router"
import toast from "./components/common/toast"
import fastClick from "fastclick";
import VueLazy from "vue-lazyload";

Vue.config.productionTip = false;
Vue.prototype.$bus = new Vue();
Vue.use(toast)
fastClick.attach(document.body);//解决移动端300ms的延迟

Vue.use(VueLazy,{
  loading:require("./assets/img/home/recommend_bg.jpg") //占位图
}); //图片懒加载插件

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
