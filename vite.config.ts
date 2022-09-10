import { defineConfig } from 'vite'
import alias from './vite/alias'
import setupPlugins from './vite/plugins'
import vueJsx from '@vitejs/plugin-vue-jsx'

export default defineConfig(({ command, mode }) => {
	const isBuild = command == 'build'

	return {
		plugins: [...setupPlugins(isBuild), vueJsx({})],
		resolve: {
			alias
		},
		build: {
			emptyOutDir: true,
			rollupOptions: {
				output: {
					manualChunks(id: string) {
						if (id.includes('node_modules')) {
							return id.split('/node_modules/').pop()?.split('/')[0]
						}
					}
				}
			}
		},
		server: {
			host: true,
			proxy: {}
		}
	}
})
