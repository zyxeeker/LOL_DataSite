import {createApp} from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from "@/router.js";
import animate from "animate.css"
const app = createApp(App)

app.use(ElementPlus)
app.use(router)
app.use(animate)
app.mount('#app')
