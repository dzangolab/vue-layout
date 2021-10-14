import Copyright from './components/Copyright'
import Footer from './components/Footer'
import Header from './components/Header'
import LayoutBroker from './LayoutBroker'
import Logo from './components/Logo'
import Page from './Page'
import PageTitle from './PageTitle'

const Plugin = {
  /**
   * Install user plugin
   *
   * @param {Vue} Vue
   */
  install: (Vue) => {
    Vue.component('LayoutBroker', LayoutBroker)
    Vue.component('Page', Page)
  }
}

export default Plugin

export {
  Copyright,
  Footer,
  Header,
  LayoutBroker,
  Logo,
  Page,
  PageTitle
}