import { renderCookiesBanner } from './components/banner'
import { renderCookiesManager } from './components/cookiesManagement'
import { renderfloatButton } from './components/floatButton'
import { addCssToDocument, clearCookies } from './functions'
import LanguagesGC from './languajes'
import { CONSTANTS, DEFAULT_VALUES } from './store/constants'
import { getFromStore, setToStore } from './store/store'
import { addAnalyticsTrackingScript, addFacebookTrackingScript, addHotjarTrackingScript } from './tracking/scripts'

export default class GlowCookies {
  constructor() {
    // Cookies banner
    this.banner = undefined
    this.config = undefined
    this.tracking = undefined

    // DOM Elements
    this.DOMFloatButton = undefined
    this.DOMBanner = undefined
    this.DOMCookiesManager = undefined

    // User selection
    this.userSelectionFromStore = getFromStore()
    this.userSelection = {
      necessary: true,
      marketing: true,
      preferences: true,
      analytics: true
    }
  }

  render() {
    addCssToDocument(CONSTANTS.cssUrl)
    this.createDOMElements()
    this.setEventListeners()
    this.checkStatus()
  }

  createDOMElements() {
    this.DOMFloatButton = renderfloatButton(this.config, this.banner)
    this.DOMBanner = renderCookiesBanner(this.config, this.banner)
    this.DOMCookiesManager = renderCookiesManager(this.config, this.banner)
  }

  setEventListeners() {
    document.getElementById('glowCookies-floatButton').addEventListener('click', () => this.openCookiesBanner())
    document.getElementById('acceptAllCookies').addEventListener('click', () => this.acceptAllCookies())
    document.getElementById('rejectAllCookies').addEventListener('click', () => this.rejectAllCookies())
    document.getElementById('openManager').addEventListener('click', () => this.openCookiesManager())
  }

  checkStatus() {
    if(this.userSelectionFromStore){
      this.activateTracking()
      this.openFloatButton()
    } else {
      this.openCookiesBanner()
    }
  }

  openFloatButton() {
    this.closeCookiesBanner()
    this.closeCookiesManager()
    this.config.hideAfterClick 
      && this.DOMFloatButton.classList.add('glowCookies__show')
  }

  closeFloatButton() {
    this.DOMFloatButton.classList.remove('glowCookies__show')
  }

  openCookiesBanner() {
    this.closeFloatButton()
    this.closeCookiesManager()
    this.DOMBanner.classList.add('glowCookies__show')
  }

  closeCookiesBanner() {
    this.DOMBanner.classList.remove('glowCookies__show')
  }

  openCookiesManager() {
    this.closeFloatButton()
    this.closeCookiesBanner()
    this.DOMCookiesManager.classList.add('glowCookies__show')
  }

  closeCookiesManager() {
    this.DOMCookiesManager.classList.remove('glowCookies__show')
  }

  acceptCookies() {
    setToStore(this.userSelection)
    this.openFloatButton()
    this.activateTracking()
  }

  acceptAllCookies() {
    Object.keys(this.userSelection).forEach(k => this.userSelection[k] = true)
    setToStore(this.userSelection)
    this.activateTracking()
    this.openFloatButton()
  }

  rejectAllCookies() {
    Object.keys(this.userSelection).forEach(k => this.userSelection[k] = false)
    setToStore(this.userSelection)
    this.disableTracking()
    this.openFloatButton()
  }

  activateTracking() {
    this.userSelectionFromStore = getFromStore()

    if(this.userSelectionFromStore){
      if(this.config.typeOfCookies.necessary && this.userSelectionFromStore.necessary){
        console.log('activamos necesarias') // DELETE =============
      }
      if(this.config.typeOfCookies.marketing && this.userSelectionFromStore.marketing){
        console.log('activamos marketing') // DELETE =============
      }
      if(this.config.typeOfCookies.preferences && this.userSelectionFromStore.preferences){
        console.log('activamos preferences') // DELETE =============
      }
      if(this.config.typeOfCookies.analytics && this.userSelectionFromStore.analytics){
        console.log('activamos analytics') // DELETE =============
        this.tracking.AnalyticsCode && addAnalyticsTrackingScript(this.tracking.AnalyticsCode)
        this.tracking.FacebookPixelCode && addFacebookTrackingScript(this.tracking.FacebookPixelCode)
        this.tracking.HotjarTrackingCode && addHotjarTrackingScript(this.tracking.HotjarTrackingCode)
      }
    }

    // Dispatch custom event
    this.createCustomEvent('glow_cookies_selected', this.userSelectionFromStore)
  }

  disableTracking() {
    clearCookies()
    this.createCustomEvent('glow_cookies_rejected')
  }

  createCustomEvent(name, content = {}) {
    window.dispatchEvent(new CustomEvent(name, { detail: content }))
  }

  getConfig(obj) {
    return {
      border: obj.border || 'border',
      position: obj.position || 'left',
      hideAfterClick: obj.hideAfterClick || true,
      bannerStyle: obj.style || 2,
      typeOfCookies: {
        necessary: obj.necessaryCookies || true,
        marketing: obj.marketingCookies || false,
        preferences: obj.preferencesCookies || false,
        analytics: obj.analyticsCookies || true
      }
    }
  }

  getTracking(obj) {
    return {
      AnalyticsCode: obj.analytics || undefined,
      FacebookPixelCode: obj.facebookPixel || undefined,
      HotjarTrackingCode: obj.hotjar || undefined,
      customScript: obj.customScript || undefined
    }
  }

  getBanner(obj) {
    const lang = new LanguagesGC(obj.languaje)

    return {
      description: obj.bannerDescription || lang.bannerDescription,
      linkText: obj.bannerLinkText || lang.bannerLinkText,
      link: obj.policyLink || DEFAULT_VALUES.link,
      background: obj.bannerBackground || DEFAULT_VALUES.background,
      color: obj.bannerColor || DEFAULT_VALUES.color,
      heading: obj.bannerHeading !== 'none' ? obj.bannerHeading || lang.bannerHeading : '',
      acceptBtn: {
        text: obj.acceptBtnText || lang.acceptBtnText,
        background: obj.acceptBtnBackground || DEFAULT_VALUES.acceptBtnBackground,
        color: obj.acceptBtnColor || DEFAULT_VALUES.acceptBtnColor
      },
      rejectBtn: {
        text: obj.rejectBtnText || lang.rejectBtnText,
        background: obj.rejectBtnBackground || DEFAULT_VALUES.rejectBtnBackground,
        color: obj.rejectBtnColor || DEFAULT_VALUES.rejectBtnColor
      },
      manageCookies: {
        color: obj.manageColor || DEFAULT_VALUES.manageColor,
        background: obj.manageBackground || DEFAULT_VALUES.manageBackground,
        text: obj.manageText || lang.manageText,
      }
    }
  }

  start(obj = {}) {
    this.config = this.getConfig(obj)
    this.tracking = this.getTracking(obj)
    this.banner = this.getBanner(obj)

    // Start GlowCookies
    window.addEventListener('load', () => this.render())
  }
}
