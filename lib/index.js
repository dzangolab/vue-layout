import Copyright from './components/Copyright'
import Footer from './components/Footer'
import Header from './components/Header'
import LayoutBroker from './LayoutBroker'
import Logo from './components/Logo'
import Page from './Page'
import PageTitle from './components/PageTitle'

const LayoutBrokerPlugin = {
  /**
   * Install plugin
   *
   * @param {Vue} app
   */
  install: (app) => {
    app.component('LayoutBroker', LayoutBroker)
    app.component('Page', Page)
  }
}

export default LayoutBrokerPlugin

export {
  Copyright,
  Footer,
  Header,
  LayoutBroker,
  Logo,
  Page,
  PageTitle
}
