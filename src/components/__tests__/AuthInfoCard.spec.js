import { describe, it, expect } from '@jest/globals'
import { mount } from '@vue/test-utils'
import AuthInfoCard from '../AuthInfoCard.vue'
import { mountOptions } from './setup'

describe('AuthInfoCard', () => {
  it('initially shows SHOW button, not the password', () => {
    const wrapper = mount(AuthInfoCard, {
      props: { expiresAt: '2021-01-15T00:00:00Z', authInfo: 'c4R93hDZRkv4' },
      ...mountOptions(),
    })

    expect(wrapper.text()).toContain('SHOW')
    expect(wrapper.text()).not.toContain('c4R93hDZRkv4')
  })

  it('clicking SHOW reveals the authinfo', async () => {
    const wrapper = mount(AuthInfoCard, {
      props: { expiresAt: '2021-01-15T00:00:00Z', authInfo: 'c4R93hDZRkv4' },
      ...mountOptions(),
    })

    await wrapper.find('.v-btn').trigger('click')
    await wrapper.vm.$nextTick()

    expect(wrapper.text()).toContain('c4R93hDZRkv4')
    expect(wrapper.text()).not.toContain('SHOW')
  })

  it('formats the expiration date', () => {
    const wrapper = mount(AuthInfoCard, {
      props: { expiresAt: '2021-01-15T00:00:00Z', authInfo: 'c4R93hDZRkv4' },
      ...mountOptions(),
    })

    expect(wrapper.text()).toContain('Expires at')
    expect(wrapper.text()).toContain('Jan')
    expect(wrapper.text()).toContain('2021')
  })
})
