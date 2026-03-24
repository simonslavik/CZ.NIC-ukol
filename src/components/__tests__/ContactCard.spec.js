import { describe, it, expect } from '@jest/globals'
import { mount } from '@vue/test-utils'
import ContactCard from '../ContactCard.vue'
import { mountOptions } from './setup'

const contact = {
  handle: 'ARCIKANCLER',
  organization: 'Neviditelná univerzita',
  name: 'Vzoromil Výsměšek',
  publish: { organization: true, name: false },
}

describe('ContactCard', () => {
  it('shows label, handle link, org and name when showDetails=true', () => {
    const wrapper = mount(ContactCard, {
      props: { label: 'Owner', contact, showDetails: true },
      ...mountOptions(),
    })

    expect(wrapper.text()).toContain('Owner:')
    const link = wrapper.find('.handle-link')
    expect(link.exists()).toBe(true)
    expect(link.text()).toBe('ARCIKANCLER')

    const text = wrapper.text()
    expect(text).toContain('Organization:')
    expect(text).toContain('Neviditelná univerzita')
    expect(text).toContain('Name:')
    expect(text).toContain('Vzoromil Výsměšek')
  })

  it('org and name hidden when showDetails=false', () => {
    const wrapper = mount(ContactCard, {
      props: { label: 'Owner', contact, showDetails: false },
      ...mountOptions(),
    })

    const text = wrapper.text()
    expect(text).not.toContain('Organization:')
    expect(text).not.toContain('Name:')
  })

  it('publish status icons are shown', () => {
    const wrapper = mount(ContactCard, {
      props: { label: 'Owner', contact, showDetails: true },
      ...mountOptions(),
    })

    expect(wrapper.findAll('.publish-icon').length).toBe(2)
  })
})
