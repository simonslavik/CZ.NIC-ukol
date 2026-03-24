import { describe, it, expect } from '@jest/globals'
import { mount } from '@vue/test-utils'
import AdminContactsCard from '../AdminContactsCard.vue'
import { mountOptions } from './setup'

const contacts = [
  {
    handle: 'KNIHOVNIK',
    organization: 'Neviditelná univerzita',
    name: 'Knihovník',
    publish: { organization: true, name: true },
  },
  {
    handle: 'MRAKOPLAS',
    organization: 'Neviditelná univerzita',
    name: 'Mrakoplaš',
    publish: { organization: false, name: false },
  },
]

describe('AdminContactsCard', () => {
  it('compact view lists names with handle links', () => {
    const wrapper = mount(AdminContactsCard, {
      props: { contacts, verbose: false },
      ...mountOptions(),
    })

    const text = wrapper.text()
    expect(text).toContain('Administrative contacts:')
    expect(text).toContain('Knihovník')
    expect(text).toContain('Mrakoplaš')

    const links = wrapper.findAll('.handle-link')
    expect(links.length).toBe(2)
    expect(links[0].text()).toBe('KNIHOVNIK')
    expect(links[1].text()).toBe('MRAKOPLAS')
  })

  it('verbose mode shows full contact cards', () => {
    const wrapper = mount(AdminContactsCard, {
      props: { contacts, verbose: true },
      ...mountOptions(),
    })

    const text = wrapper.text()
    expect(text).toContain('Administrative contact:')
    expect(text).toContain('KNIHOVNIK')
    expect(text).toContain('MRAKOPLAS')
    expect(text).toContain('Organization:')
    expect(text).toContain('Name:')
  })

  it('no compact header in verbose mode', () => {
    const wrapper = mount(AdminContactsCard, {
      props: { contacts, verbose: true },
      ...mountOptions(),
    })
    expect(wrapper.text()).not.toContain('Administrative contacts:')
  })
})
