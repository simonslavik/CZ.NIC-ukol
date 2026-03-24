import { describe, it, expect } from '@jest/globals'
import { mount } from '@vue/test-utils'
import StateFlagsCard from '../StateFlagsCard.vue'
import { mountOptions } from './setup'

const stateFlags = {
  flags: [
    { name: 'serverDeleteProhibited', active: true, description: 'Deletion forbidden' },
    { name: 'expirationWarning', active: true, description: 'The domain expires in 30 days' },
    { name: 'serverBlocked', active: false, description: 'Administratively blocked' },
    { name: 'expired', active: false, description: 'Domain expired' },
  ],
  groups: [
    ['serverBlocked', 'serverDeleteProhibited'],
    ['expired'],
  ],
}

describe('StateFlagsCard', () => {
  it('compact mode only shows active flags', () => {
    const wrapper = mount(StateFlagsCard, {
      props: { stateFlags, verbose: false },
      ...mountOptions(),
    })

    const text = wrapper.text()
    expect(text).toContain('Deletion forbidden')
    expect(text).toContain('The domain expires in 30 days')
    expect(text).not.toContain('Administratively blocked')
    expect(text).not.toContain('Domain expired')
  })

  it('verbose mode shows everything', () => {
    const wrapper = mount(StateFlagsCard, {
      props: { stateFlags, verbose: true },
      ...mountOptions(),
    })

    const text = wrapper.text()
    expect(text).toContain('Deletion forbidden')
    expect(text).toContain('The domain expires in 30 days')
    expect(text).toContain('Administratively blocked')
    expect(text).toContain('Domain expired')
  })

  it('renders an icon per flag in verbose', () => {
    const wrapper = mount(StateFlagsCard, {
      props: { stateFlags, verbose: true },
      ...mountOptions(),
    })

    const icons = wrapper.findAll('.v-icon')
    expect(icons.length).toBeGreaterThanOrEqual(4)
  })

  it('groups flags into 3 columns', () => {
    const wrapper = mount(StateFlagsCard, {
      props: { stateFlags, verbose: true },
      ...mountOptions(),
    })

    const cols = wrapper.findAll('.v-col')
    expect(cols.length).toBe(3)
  })
})
