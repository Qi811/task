import Vue from 'vue'
import App from './App'
import uView from "uview-ui";
import VueClipboard from 'vue-clipboard2'
Vue.use(VueClipboard)

import HttpRequest from './common/httpRequest'
import HttpCache from './common/cache'
import Raichu from './common/raichu'
Vue.prototype.$Request = HttpRequest;
Vue.prototype.$Raichu = Raichu;

Vue.prototype.$Sysconf = HttpRequest.config;
Vue.prototype.$SysCache = HttpCache;
Vue.use(uView);

Vue.config.productionTip = false


App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
