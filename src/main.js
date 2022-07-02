import { createApp } from 'vue'
import { useRouter } from 'vue-router'
import App from './App.vue'
import './index.css'
import router from './routes'
createApp(App) .use(router).mount('#app')
