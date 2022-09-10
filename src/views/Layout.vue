<template>
	<div class="layout">
		<el-menu :default-active="childRoutes[0].path" :collapse="isCollapse" :router="true">
			<el-menu-item v-for="(item, index) of childRoutes" :key="item.name" :index="item.path">
				<el-icon> <component :is="item.meta?.icon" /></el-icon>
				<template #title>{{ item.meta?.label }}</template>
			</el-menu-item>
		</el-menu>
		<section class="content">
			<router-view />
		</section>
	</div>
</template>

<script lang="ts" setup>
	import { RouteRecordRaw } from 'vue-router'

	const router = useRouter()

	const childRoutes = router.options.routes[0].children as RouteRecordRaw[]

	const isCollapse = ref(false)
</script>

<style scoped lang="scss">
	.layout {
		width: 100%;
		height: 100%;
		display: flex;

		:deep(.el-menu) {
			width: 150px;
			display: flex;
			flex-direction: column;
			align-items: center;
		}
		.content {
			flex: 1;
			padding: 16px;
		}
	}
</style>
