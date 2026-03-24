import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export function createTestVuetify() {
  return createVuetify({ components, directives })
}

export function mountOptions(extra = {}) {
  return {
    global: {
      plugins: [createTestVuetify()],
      stubs: {
        'router-link': { template: '<a><slot /></a>' },
      },
      ...extra,
    },
  }
}
