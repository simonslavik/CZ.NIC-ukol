import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        colors: {
          primary: '#F5C518',
          secondary: '#424242',
          accent: '#E88A2A',
          surface: '#FFFFFF',
          background: '#FAFAFA',
        },
      },
    },
  },
})

export default vuetify
