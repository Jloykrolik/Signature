import Vue from 'vue'
import App from './App.vue'
import VueSignaturePad from 'vue-signature-pad';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import locale from 'element-ui/lib/locale/lang/en'

Vue.use(VueSignaturePad)
Vue.use(ElementUI, { locale })
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
