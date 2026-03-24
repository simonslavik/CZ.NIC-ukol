import { describe, it, expect } from '@jest/globals'
import { mount } from '@vue/test-utils'
import EventsCard from '../EventsCard.vue'
import { mountOptions } from './setup'

const events = [
  { label: 'Create date:', date: 'Jan 14, 2002, 2:56:00 PM', registrar: 'REG-CZNIC' },
  { label: 'Update date:', date: 'Dec 27, 2016, 2:12:25 PM', registrar: 'REG-GENREG' },
  { label: 'Delete date:', date: '', registrar: null },
]

describe('EventsCard', () => {
  it('renders header, labels and dates for each event', () => {
    const wrapper = mount(EventsCard, {
      props: { events },
      ...mountOptions(),
    })

    const text = wrapper.text()
    expect(text).toContain('Events:')
    expect(text).toContain('Create date:')
    expect(text).toContain('Update date:')
    expect(text).toContain('Delete date:')
    expect(text).toContain('Jan 14, 2002')
    expect(text).toContain('Dec 27, 2016')
  })

  it('registrar handles are links', () => {
    const wrapper = mount(EventsCard, {
      props: { events },
      ...mountOptions(),
    })

    const links = wrapper.findAll('.handle-link')
    expect(links.length).toBe(2)
    expect(links[0].text()).toBe('REG-CZNIC')
    expect(links[1].text()).toBe('REG-GENREG')
  })
})
