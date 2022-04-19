import {mount, shallowMount} from '@vue/test-utils'
import Page from '@/Page'
import PageTitle from '@/components/PageTitle'

describe('Page', () => {
  const props = {
    contentClass: 'content',
    subtitle: "Page subtitle",
    title: 'Page title'
  }

  it('renders page component', async () => {
    const wrapper = mount(Page, {})

    const page = wrapper.findComponent(Page)

    expect(page.exists()).toBe(true)
    expect(page.classes()).toContain('page')

    wrapper.unmount()
  })

  it('sets props correctly', async () => {
    const wrapper = mount(Page, { props })

    const page = wrapper.findComponent(Page)

    expect(page.vm.subtitle).toBe(props.subtitle)
    expect(page.vm.title).toBe(props.title)

    wrapper.unmount()
  })

  it('renders content section with expected content class', async () => {
    const wrapper = mount(Page, { props })

    const content = wrapper.find('div.page__content')

    expect(content.classes()).toContain(props.contentClass)

    wrapper.unmount()
  })

  it('renders subtitle slot', async () => {
    const slots = {
      subtitle: '<div>Custom subtitle</div>'
    }

    const wrapper = mount(Page, { props, slots })

    const title = wrapper.findComponent(PageTitle)
    const h1 = title.find('h1')

    expect(h1.html()).toContain(slots.subtitle)

    wrapper.unmount()
  })

  it('renders toolbar slot', async () => {
    const slots = {
      toolbar: '<nav>Toolbar</nav>'
    }

    const wrapper = mount(Page, { props, slots })

    const title = wrapper.findComponent(PageTitle)

    expect(title.html()).toContain(slots.toolbar)

    wrapper.unmount()
  })

  it('renders default slot', async () => {
    const slots = {
      default: '<div>Main content</div>'
    }

    const wrapper = mount(Page, { props, slots })

    const content = wrapper.find('div.page__content')

    expect(content.html()).toContain(slots.default)

    wrapper.unmount()
  })
})
