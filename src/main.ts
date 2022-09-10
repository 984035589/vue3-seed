import directive from '@/common/directives'
import router from '@/router'
import { createApp } from 'vue'
import App from './App.vue'

async function bootstrap() {
	const app = createApp(App)
	directive(app)
	app.use(router)
	await router.isReady()
	app.mount('#app')
}

void bootstrap()
