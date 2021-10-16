import {mount, shallowMount} from '@vue/test-utils'
import PageTitle from '@/components/PageTitle'

describe('PageTitle', () => {
  const props = {
    subtitle: "Page subtitle",
    title: 'Page title'
  }

  it('renders component', async () => {
    const wrapper = mount(PageTitle, {})

    const page = wrapper.findComponent(PageTitle)

    expect(page.exists()).toBe(true)
    expect(page.classes()).toContain('page__title')

    wrapper.unmount()
  })

  it('sets props correctly', async () => {
    const wrapper = mount(PageTitle, { props })

    const title = wrapper.findComponent(PageTitle)

    expect(title.vm.subtitle).toBe(props.subtitle)
    expect(title.vm.title).toBe(props.title)

    wrapper.unmount()
  })

  it('renders title as H1 tag', async () => {
    const wrapper = mount(PageTitle, { props })

    const h1 = wrapper.find('h1')

    expect(h1.html()).toContain(props.title)

    wrapper.unmount()
  })

  it('renders subtitle as small tag', async () => {
    const wrapper = mount(PageTitle, { props })

    const subtitle = wrapper.find('h1 > small')

    expect(subtitle.html()).toContain(props.subtitle)
    expect(subtitle.classes()).toContain('page__subtitle')

    wrapper.unmount()
  })

  it('renders subtitle slot', async () => {
    const slots = {
      subtitle: '<div>Custom subtitle</div>'
    }

    const wrapper = mount(PageTitle, { props, slots })

    const title = wrapper.find('h1')

    expect(title.html()).toContain(slots.subtitle)

    wrapper.unmount()
  })

  it('renders toolbar slot', async () => {
    const slots = {
      toolbar: '<nav>Toolbar</nav>'
    }

    const wrapper = mount(PageTitle, { props, slots })

    const title = wrapper.findComponent(PageTitle)

    expect(title.html()).toContain(slots.toolbar)

    wrapper.unmount()
  })
})
