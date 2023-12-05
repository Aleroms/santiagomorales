import { plugin } from '@formkit/vue'
import { createThemePlugin } from '@formkit/themes'
import { createAutoAnimatePlugin } from '@formkit/addons'

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
    createThemePlugin()
  ]
}
export { plugin, customConfig }
