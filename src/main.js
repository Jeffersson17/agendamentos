import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import naive from 'naive-ui'

import vuetify from './plugins/vuetify'

import { loadFonts } from './plugins/webfontloader'

loadFonts()

createApp(App)
  .use(router)
  .use(vuetify)
  .use(ElementPlus)
  .use(naive)
  .mount('#app')
