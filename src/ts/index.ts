import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createRouter, createWebHashHistory } from 'vue-router'
import PrimeVue from 'primevue/config'

import App from '@/components/App.vue'
import Generate from '@/components/Generate.vue'
import Editor from '@/components/Editor.vue'

import '@/scss/index.scss'
import 'primevue/resources/themes/lara-light-indigo/theme.css'

const routes = [
	{
		path: '/',
		component: Editor,
	},
	{
		path: '/editor',
		component: Editor,
	},
	{ path: '/generate', component: Generate },
]

const router = createRouter({
	history: createWebHashHistory(),
	routes,
})

const pinia = createPinia()
const app = createApp(App)

app.use(router)
app.use(pinia)
app.use(PrimeVue)
app.mount('#app')
