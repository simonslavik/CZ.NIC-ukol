import { describe, it, expect } from '@jest/globals'
import { mount } from '@vue/test-utils'
import AppBar from '../AppBar.vue'
import { mountOptions } from './setup'
import { h } from 'vue'
import { VApp } from 'vuetify/components'

function mountInApp(props = {}) {
  const opts = mountOptions()
  return mount(VApp, {
    ...opts,
    slots: {
      default: () => h(AppBar, props),
    },
  })
}

describe('AppBar', () => {
  it('shows Ferda title', () => {
    const wrapper = mountInApp()
    expect(wrapper.text()).toContain('Ferda')
  })

  it('shows user name', () => {
    const wrapper = mountInApp()
    expect(wrapper.text()).toContain('Jan Musílek')
  })

  it('nav icon emits toggle-drawer', async () => {
    const emitted = []
    const wrapper = mountInApp({ onToggleDrawer: () => emitted.push(true) })

    const navIcon = wrapper.find('.v-app-bar-nav-icon')
    await navIcon.trigger('click')
    expect(emitted.length).toBe(1)
  })
})
