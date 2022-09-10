import { Plugin } from 'vite'
import { visualizer } from 'rollup-plugin-visualizer'

//显示编译信息
export default (plugins: Plugin[]) => {
	plugins.push(visualizer() as Plugin)
}
