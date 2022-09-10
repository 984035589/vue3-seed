import { Plugin } from 'vite'
import autoImport from './autoImport'
import setupMockPlugin from './mock'
import setupVisualizer from './visualizer'
import setupVue from './vue'

const plugins: Plugin[] = []

export default function setupPlugins(isBuild: boolean) {
	setupVue(plugins)
	setupVisualizer(plugins)
	setupMockPlugin(plugins, isBuild)
	autoImport(plugins)

	return plugins
}
