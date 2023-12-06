import { plugin } from '@formkit/vue'
import { createThemePlugin } from '@formkit/themes'
import { createAutoAnimatePlugin, createAutoHeightTextareaPlugin } from '@formkit/addons'

const customConfig = {
  config: {
    classes: {
      input: 'fk-input-global'
    }
  },
  plugin: [
    createAutoAnimatePlugin({
      duration: 100
    }),
    createThemePlugin(),
    createAutoHeightTextareaPlugin()
  ]
}
export { plugin, customConfig }
