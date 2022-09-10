import { createRouter, createWebHistory } from 'vue-router'
import { Camera, VideoCameraFilled } from '@element-plus/icons-vue'

const menuRoutes = [
	{
		name: 'Device',
		path: 'device',
		component: () => import('@/views/Device.vue'),
		children: [],
		meta: {
			label: '设备',
			icon: Camera
		}
	},
	{
		name: 'Record',
		path: 'record',
		component: () => import('@/views/Record.vue'),
		children: [],
		meta: {
			label: '录制',
			icon: VideoCameraFilled
		}
	}
]

const routes = [
	{
		path: '/',
		name: 'Layout',
		component: () => import('@/views/Layout.vue'),
		redirect: '/device',
		children: menuRoutes
	}
]

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes
})

export default router
