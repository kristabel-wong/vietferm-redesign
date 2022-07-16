import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import VueI18n from 'vue-i18n'

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
