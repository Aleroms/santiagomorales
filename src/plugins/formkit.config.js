import { plugin } from '@formkit/vue'
import { createThemePlugin } from '@formkit/themes'
import { createAutoAnimatePlugin, createAutoHeightTextareaPlugin } from '@formkit/addons'

const date_val = (node) => {
  //should be group | start or end
  const form = node.at('$parent').at('$parent')
  const start = form.value.start
  const end = form.value.end
  const startDate = new Date(`${start.month} ${start.year}`)
  const endDate = new Date(`${end.month} ${end.year}`)

  if (!isNaN(startDate.getTime()) && !isNaN(endDate.getTime())) {
    if (startDate > endDate) {
      console.log("End date can't be earlier than start date")
      return false
    } else if (endDate > new Date()) {
      console.log('end date cannot be in the future')
      return false
    } else {
      console.log('dates are valid')
      return true
    }
  }
  return false
}

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
  ],
  rules: { date_val },
  messages: {
    en: {
      validation: {
        date_val({ name, node }) {
          const form = node.at('$parent').at('$parent')
          const start = form.value.start
          const end = form.value.end
          const startDate = new Date(`${start.month} ${start.year}`)
          const endDate = new Date(`${end.month} ${end.year}`)

          if (!isNaN(startDate.getTime()) && !isNaN(endDate.getTime())) {
            if (startDate > endDate) {
              return name === 'start date'
                ? "Start date can't be later than end date"
                : "End date can't be earlier than start date"
            } else if (endDate > new Date()) {
              return 'End Date cannot be in the future'
            }
          } else {
            return ''
          }
        }
      }
    }
  }
}

export { plugin, customConfig }
