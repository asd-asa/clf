import { createApp } from 'vue'
import {createPinia} from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import App from './App.vue'
import router from './router'

import '@/styles/common.scss'


import {getCategory} from '@/apis/testAPI.js'

// 引入懒加载指令插件并且注册
import {lazyPlugin} from '@/directives'

// 引入全局组件插件
import { componentPlugin } from '@/components'




getCategory().then(res=>{
    console.log(res)
})

const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
app.use(lazyPlugin)
app.use(pinia)
app.use(router)
app.use(componentPlugin)


// createApp(App).mount('#app')
app.mount('#app')


