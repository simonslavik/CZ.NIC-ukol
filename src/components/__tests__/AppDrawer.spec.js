import { describe, it, expect } from '@jest/globals'
import { mount } from '@vue/test-utils'
import AppDrawer from '../AppDrawer.vue'
import { mountOptions } from './setup'
import { h } from 'vue'
import { VApp } from 'vuetify/components'

function mountInApp(props = {}) {
  const opts = mountOptions()
  return mount(VApp, {
    ...opts,
    slots: {
      default: () => h(AppDrawer, { modelValue: true, ...props }),
    },
  })
}

describe('AppDrawer', () => {
  it('has APPLICATIONS header', () => {
    const wrapper = mountInApp()
    expect(wrapper.text()).toContain('APPLICATIONS')
  })

  it('has Registry nav item', () => {
    const wrapper = mountInApp()
    expect(wrapper.text()).toContain('Registry')
  })
})
