import { describe, it, expect } from '@jest/globals'
import { mount } from '@vue/test-utils'
import RegistryObjectCard from '../RegistryObjectCard.vue'
import { mountOptions } from './setup'

describe('RegistryObjectCard', () => {
  it('renders title and handle/registrar as links', () => {
    const wrapper = mount(RegistryObjectCard, {
      props: {
        title: 'NSSet',
        handle: 'ZEMEPLOCHA-NSSET',
        registrar: 'REG-CZNIC',
        rows: [],
      },
      ...mountOptions(),
    })

    expect(wrapper.text()).toContain('NSSet:')
    const links = wrapper.findAll('.handle-link')
    expect(links.length).toBe(2)
    expect(links[0].text()).toBe('ZEMEPLOCHA-NSSET')
    expect(links[1].text()).toBe('REG-CZNIC')
  })

  it('data rows have labels and values', () => {
    const rows = [
      { label: 'DNS', values: ['dns.zemeplocha.cz (1.1.1.1)', 'dns2.zemeplocha.cz (2.2.2.2)'] },
    ]

    const wrapper = mount(RegistryObjectCard, {
      props: { title: 'NSSet', handle: 'H1', registrar: 'R1', rows },
      ...mountOptions(),
    })

    const text = wrapper.text()
    expect(text).toContain('DNS:')
    expect(text).toContain('dns.zemeplocha.cz (1.1.1.1)')
    expect(text).toContain('dns2.zemeplocha.cz (2.2.2.2)')
  })

  it('keyset dns keys show up', () => {
    const rows = [
      { label: 'DNS keys', values: ['AwEAAddt2AkLfYGKgiEZB5SmIF8EvrjxNMH6HtxW', 'EA4RJ9Ao6LCWheg8'] },
    ]

    const wrapper = mount(RegistryObjectCard, {
      props: { title: 'KeySet', handle: 'ZEMEPLOCHA-KEYSET', registrar: 'REG-CZNIC', rows },
      ...mountOptions(),
    })

    const text = wrapper.text()
    expect(text).toContain('KeySet:')
    expect(text).toContain('DNS keys:')
    expect(text).toContain('AwEAAddt2AkLfYGKgiEZB5SmIF8EvrjxNMH6HtxW')
  })
})
