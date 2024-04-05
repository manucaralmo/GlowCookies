/*
    GLOW COOKIES
    CREATED BY MANUEL CARRILLO
    https://github.com/manucaralmo/GlowCookies
    2021 - v 3.1.3
*/

class GlowCookies {
  constructor() {
    // Cookies banner
    this.banner = undefined
    // Selection banner
    this.selector = undefined
    // Config
    this.config = undefined
    this.tracking = undefined
    // DOM ELEMENTS
    this.PreBanner = undefined
    this.CustomizeSwitches = [undefined, undefined, undefined, undefined] // At most 3 valid switches
    this.cookiesAllowed = [undefined, undefined, undefined, undefined] // Upon saving a selection or selecting accept/ reject these will be updated accordingly
    this.Cookies = undefined
    this.DOMbanner = undefined
  }

  render() {
    this.addCss()
    this.createDOMElements()
    this.checkStatus()
  }

  addCss() {
    const stylesheet = document.createElement('link');
    // stylesheet.setAttribute('rel', 'stylesheet');
    // stylesheet.setAttribute('href', `GlowCookies/src/glowCookies.css`);
    document.head.appendChild(stylesheet);
  }

  createDOMElements() {
    // COOKIES BUTTON
    this.PreBanner = document.createElement("div");
    this.PreBanner.innerHTML = `<button type="button" id="prebannerBtn" class="prebanner prebanner__border__${this.config.bannerStyle} glowCookies__${this.config.position} glowCookies__${this.config.border} animation" style="color: ${this.banner.manageCookies.color}; background-color: ${this.banner.manageCookies.background};">
                                    <svg fill="currentColor" style="margin-right: 7px; margin-top: 2px; vertical-align: text-top;" height="15px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path d="M510.52 255.82c-69.97-.85-126.47-57.69-126.47-127.86-70.17 0-127-56.49-127.86-126.45-27.26-4.14-55.13.3-79.72 12.82l-69.13 35.22a132.221 132.221 0 0 0-57.79 57.81l-35.1 68.88a132.645 132.645 0 0 0-12.82 80.95l12.08 76.27a132.521 132.521 0 0 0 37.16 72.96l54.77 54.76a132.036 132.036 0 0 0 72.71 37.06l76.71 12.15c27.51 4.36 55.7-.11 80.53-12.76l69.13-35.21a132.273 132.273 0 0 0 57.79-57.81l35.1-68.88c12.56-24.64 17.01-52.58 12.91-79.91zM176 368c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm32-160c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm160 128c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z"/>
                                    </svg>${this.banner.manageCookies.text}</button>`;
    this.PreBanner.style.display = "none";
    document.body.appendChild(this.PreBanner);

    // COOKIES BANNER
    this.Cookies = document.createElement("div");
    this.Cookies.innerHTML = `<div
                                    id="glowCookies-banner"
                                    class="glowCookies__banner glowCookies__banner__${this.config.bannerStyle} glowCookies__${this.config.border} glowCookies__${this.config.position}"
                                    style="background-color: ${this.banner.background};
                                    -webkit-box-shadow: 0 .625em 1.875em rgba(2,2,3,.2);
                                    -moz-box-shadow: 0 .625em 1.875em rgba(2,2,3,.2);
                                    box-shadow: 0 .625em ${this.banner.shadowSpread} ${this.banner.shadowColor};"
                                >
                                    <span class="close_btn_styles" ${this.banner.closeBtnHiddenText} style="color: ${this.banner.closeColor}; cursor: pointer" onclick="this.parentNode.parentNode.remove(); return false;">&#10006;</span>
                                    <h3 style="color: ${this.banner.color};">${this.banner.heading}</h3>
                                    <p style="color: ${this.banner.color};">
                                        ${this.banner.description}
                                        <a
                                            href="${this.banner.link}"
                                            target="_blank"
                                            class="read__more"
                                            style="color: ${this.banner.color};"
                                        >
                                            ${this.banner.linkText}
                                        </a>
                                    </p>
                                    <div class="btn__section">
                                        <button type="button" id="acceptCookies" class="btn__accept accept__btn__styles" style="color: ${this.banner.acceptBtn.color}; background-color: ${this.banner.acceptBtn.background};">
                                            ${this.banner.acceptBtn.text}
                                        </button>
                                        <button type="button" id="customizeButton" class="btn__settings settings__btn__styles" style="color: ${this.banner.customizeButton.color}; display: ${this.banner.customizeButton.display}; background-color: ${this.banner.customizeButton.background};">
                                        ${this.banner.customizeButton.text}
                                        </button>
                                        <button type="button" id="rejectCookies" class="btn__settings settings__btn__styles" style="color: ${this.banner.rejectBtn.color}; background-color: ${this.banner.rejectBtn.background};">
                                            ${this.banner.rejectBtn.text}
                                        </button>
                                    </div>
                                </div>
                            `;
    document.body.appendChild(this.Cookies);
    this.DOMbanner = document.getElementById('glowCookies-banner')

    // COOKIES BANNER
    this.switch_on = ["glowCookies__customize_switch_button_off", "glowCookies__customize_switch_button_off", "glowCookies__customize_switch_button_off", "glowCookies__customize_switch_button_off"];
    this.switch_colors = ["switch_color_off", "switch_color_off", "switch_color_off", "switch_color_off"]
    this.Customizer = document.createElement("div");
    this.Customizer.innerHTML = `<div
                                    id="glowCookies-customize"
                                    class="glowCookies__customize glowCookies__${this.config.position}"
                                    style="">
                                    <span class="close_btn_styles" ${this.banner.closeBtnHiddenText} style="color: ${this.banner.closeColor}; cursor: pointer" onclick="this.parentNode.parentNode.remove(); return false;">&#10006;</span>
                                    <h1 style="align-self: ${"center"}; color: ${this.selector.titleColor};">${this.selector.titleText}</h1>
                                    <div style="display: ${this.selector.customizeUserPreferences.display};" class ="glowCookies__customize_item_container"> 
                                      <div class ="glowCookies__customize_text"> 
                                        User Preferences
                                      </div>
                                      <div>
                                        <button id="glowCookies-customize-switch-1"  class="glowCookies__customize_switch_button">
                                        <div class=glowCookies__customize_switch_circle>

                                        </div>
                                        </button>
                                      </div>
                                    </div>
                                    <div style="display: ${this.selector.customizeAnalytics.display};" class ="glowCookies__customize_item_container"> 
                                      <div class ="glowCookies__customize_text"> 
                                        Analytics
                                      </div>
                                      <div>
                                        <button id="glowCookies-customize-switch-2"  class="glowCookies__customize_switch_button">
                                        <div class=glowCookies__customize_switch_circle>

                                        </div>
                                        </button>
                                      </div>
                                    </div>
                                    <div style="display: ${this.selector.customizeThirdParty.display};"class ="glowCookies__customize_item_container"> 
                                    <div class ="glowCookies__customize_text"> 
                                      Third Party Cookies
                                    </div>
                                    <div>
                                      <button id="glowCookies-customize-switch-3"  class="glowCookies__customize_switch_button">
                                      <div class=glowCookies__customize_switch_circle>

                                      </div>
                                      </button>
                                    </div>
                                  </div>
                                  <div style="display: ${this.selector.customizeSessionCookies.display};"class ="glowCookies__customize_item_container"> 
                                  <div class ="glowCookies__customize_text"> 
                                    Session Only Cookies
                                  </div>
                                  <div>
                                    <button id="glowCookies-customize-switch-4"  class="glowCookies__customize_switch_button">
                                    <div class=glowCookies__customize_switch_circle>

                                    </div>
                                    </button>
                                  </div>
                                </div>
                                  <button id="glowCookies-customize-save" style="background-color: ${this.selector.btnBackground}; 
                                  color: ${this.selector.btnColor};" class="glowCookies-customize-save">
                                    ${this.selector.btnText}
                                  </button>
                                </div>
                                </div>
                            `;
    document.body.appendChild(this.Customizer);
    for(let i = 1; i < 5; i++){
      this.CustomizeSwitches[i - 1] = document.getElementById('glowCookies-customize-switch-' + i)
    }


    // SET EVENT LISTENERS
    document.getElementById('prebannerBtn').addEventListener('click', () => this.openSelector())
    document.getElementById('acceptCookies').addEventListener('click', () => this.acceptCookies())
    document.getElementById('rejectCookies').addEventListener('click', () => this.rejectCookies())
    document.getElementById('customizeButton').addEventListener('click', () => this.openCustomizer())
    document.getElementById('glowCookies-customize-switch-1').addEventListener('click', () => this.switchCustomizer(1))
    document.getElementById('glowCookies-customize-switch-2').addEventListener('click', () => this.switchCustomizer(2))
    document.getElementById('glowCookies-customize-switch-3').addEventListener('click', () => this.switchCustomizer(3))
    document.getElementById('glowCookies-customize-switch-4').addEventListener('click', () => this.switchCustomizer(4))
    document.getElementById('glowCookies-customize-save').addEventListener('click', () => this.savePreferences())
    // Add a new click listener for the 'closeManager'
  }

  checkStatus() {
    switch (localStorage.getItem("GlowCookies")) {
      case "1":
        this.openManageCookies();
        this.activateTracking();
        this.addCustomScript();
        this.setRetentionPeriod(this.tracking.retentionPeriod);
        break;
      case "0":
        this.openManageCookies();
        break;
      default:
        this.openSelector();
    }
  }

  openManageCookies() {
    this.PreBanner.style.display = this.config.hideAfterClick ? "none" : "block"
    this.DOMbanner.classList.remove('glowCookies__show')
    this.Customizer.style.display = "none"
  }

  openSelector() {
    this.PreBanner.style.display = "none";
    this.DOMbanner.classList.add('glowCookies__show')
    this.Customizer.style.display = "none"
  }

  acceptCookies() {
    localStorage.setItem("GlowCookies", "1")
    this.openManageCookies()
    this.activateTracking()
    this.addCustomScript()
    this.setRetentionPeriod(this.tracking.retentionPeriod)
  }
  

  rejectCookies() {
    localStorage.setItem("GlowCookies", "0");
    this.openManageCookies();
    this.disableTracking();
  }

  openCustomizer() {
    // Close out the banner, and we need to open the new banner
    this.DOMbanner.classList.remove('glowCookies__show');
    this.Customizer.style.display = "block";
    for(let i = 1; i < 5; i++){
      if(this.cookiesAllowed[i - 1] == undefined || this.cookiesAllowed[i - 1] == false){
        this.switch_on[i - 1] = "glowCookies__customize_switch_button_off";
        this.switch_colors[i - 1] = "switch_color_off";
      }else{
        this.switch_on[i - 1] = "glowCookies__customize_switch_button_on";
        this.switch_colors[i - 1] = "switch_color_on";
      }
      this.CustomizeSwitches[i - 1].classList.add(this.switch_on[i-1]);
      this.CustomizeSwitches[i - 1].classList.add(this.switch_colors[i-1]);
    }
  }

  switchCustomizer(switch_num) {
    switch_num = switch_num - 1
    this.CustomizeSwitches[switch_num].classList.remove(this.switch_on[switch_num]);
    this.CustomizeSwitches[switch_num].classList.remove(this.switch_colors[switch_num]);
    if(this.switch_on[switch_num] == "glowCookies__customize_switch_button_off"){
      // Off to on
      this.switch_on[switch_num] = "glowCookies__customize_switch_button_on";
      this.switch_colors[switch_num] = "switch_color_on";
    }else{
      // On to off
      this.switch_on[switch_num] = "glowCookies__customize_switch_button_off"
      this.switch_colors[switch_num] = "switch_color_off";
    }
    this.CustomizeSwitches[switch_num].classList.add(this.switch_on[switch_num]);
    this.CustomizeSwitches[switch_num].classList.add(this.switch_colors[switch_num]);


  }

  savePreferences(){
    this.Customizer.style.display = "none";
    let isSessionOnly = 0;
    for(let switch_num = 0; switch_num < 4; switch_num++){
      if(this.switch_on[switch_num] == "glowCookies__customize_switch_button_off"){
        this.cookiesAllowed[switch_num] = false;
      }else{
        if(switch_num == 0){
          if(this.tracking.userPreferencesScript != undefined){
            this.addNewScript(this.tracking.userPreferencesScript)
          }
        }else if(switch_num == 1){
          if(this.tracking.userPreferencesScript != undefined){
            this.addNewScript(this.tracking.thirdPartyScript)
          }
        }else if(switch_num == 2){
          if(this.tracking.userPreferencesScript != undefined){
            this.addNewScript(this.tracking.analyticsScript)
          }
        }else{
          // if we are on switch 4 it must be session onl
          isSessionOnly = 1
        }
        this.cookiesAllowed[switch_num] = true;
      }
    }
    this.activateSessionCookies(isSessionOnly);
    this.PreBanner.style.display = this.config.hideAfterClick ? "none" : "block"
  }

  activateSessionCookies(isSessionOnly){
    sessionStorage.setItem('isSessionOnly', isSessionOnly ? 'true' : 'false');

    // split document.cookie string to get all cookies
    let cookies = document.cookie.split(';');

    for (let i = 0; i < cookies.length; i++) {
      let cookie = cookies[i];
      let eqPos = cookie.indexOf('=');
      let name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      let value = eqPos > -1 ? cookie.substr(eqPos + 1) : null;
      if (isSessionOnly) {
        // makes it a session cookie
        document.cookie = `${name}=${value}; path=/`;
      } else {
        // set cookie with 8-hour expiration
        // need to change to the custom retention period
        const date = new Date();
        date.setTime(date.getTime() + (8 * 60 * 60 * 1000)); // 8 hours
        let expires = "expires=" + date.toUTCString();
        document.cookie = `${name}=${value}; ${expires}; path=/`;
      }
    }
  }


  activateTracking() {
    // Google Analytics Tracking
    if (this.tracking.AnalyticsCode) {
      let Analytics = document.createElement('script');
      Analytics.setAttribute('src', `https://www.googletagmanager.com/gtag/js?id=${this.tracking.AnalyticsCode}`);
      document.head.appendChild(Analytics);
      let AnalyticsData = document.createElement('script');
      AnalyticsData.text = `window.dataLayer = window.dataLayer || [];
                                function gtag(){dataLayer.push(arguments);}
                                gtag('js', new Date());
                                gtag('config', '${this.tracking.AnalyticsCode}');`;
      document.head.appendChild(AnalyticsData);
    }

    // Facebook pixel tracking code
    if (this.tracking.FacebookPixelCode) {
      let FacebookPixelData = document.createElement('script');
      FacebookPixelData.text = `
                                    !function(f,b,e,v,n,t,s)
                                    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                                    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                                    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                                    n.queue=[];t=b.createElement(e);t.async=!0;
                                    t.src=v;s=b.getElementsByTagName(e)[0];
                                    s.parentNode.insertBefore(t,s)}(window, document,'script',
                                    'https://connect.facebook.net/en_US/fbevents.js');
                                    fbq('init', '${this.tracking.FacebookPixelCode}');
                                    fbq('track', 'PageView');
                                `;
      document.head.appendChild(FacebookPixelData);
      let FacebookPixel = document.createElement('noscript');
      FacebookPixel.setAttribute('height', `1`);
      FacebookPixel.setAttribute('width', `1`);
      FacebookPixel.setAttribute('style', `display:none`);
      FacebookPixel.setAttribute('src', `https://www.facebook.com/tr?id=${this.tracking.FacebookPixelCode}&ev=PageView&noscript=1`);
      document.head.appendChild(FacebookPixel);
    }

    // Hotjar Tracking
    if (this.tracking.HotjarTrackingCode) {
      let hotjarTrackingData = document.createElement('script');
      hotjarTrackingData.text = `
                                (function(h,o,t,j,a,r){
                                    h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                                    h._hjSettings={hjid:${this.tracking.HotjarTrackingCode},hjsv:6};
                                    a=o.getElementsByTagName('head')[0];
                                    r=o.createElement('script');r.async=1;
                                    r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                                    a.appendChild(r);
                                })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
                                `;
      document.head.appendChild(hotjarTrackingData);
    }
  }

  disableTracking() {
    // Google Analytics Tracking ('client_storage': 'none')
    if (this.tracking.AnalyticsCode) {
      let Analytics = document.createElement('script');
      Analytics.setAttribute('src', `https://www.googletagmanager.com/gtag/js?id=${this.tracking.AnalyticsCode}`);
      document.head.appendChild(Analytics);
      let AnalyticsData = document.createElement('script');
      AnalyticsData.text = `window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', '${this.tracking.AnalyticsCode}' , {
                            'client_storage': 'none',
                            'anonymize_ip': true
                        });`;
      document.head.appendChild(AnalyticsData);
    }

    // Clear cookies - not working 100%
    this.clearCookies()
  }

  clearCookies() {
    let cookies = document.cookie.split("; ");
    for (let c = 0; c < cookies.length; c++) {
      let d = window.location.hostname.split(".");
      while (d.length > 0) {
        let cookieBase = encodeURIComponent(cookies[c].split(";")[0].split("=")[0]) + '=; expires=Thu, 01-Jan-1970 00:00:01 GMT; domain=' + d.join('.') + ' ;path=';
        let p = location.pathname.split('/');
        document.cookie = cookieBase + '/';
        while (p.length > 0) {
          document.cookie = cookieBase + p.join('/');
          p.pop();
        };
        d.shift();
      }
    }
  }
  setRetentionPeriod(daystoLive) {
    let cookies = document.cookie.split("; ");
    for(let c = 0; c < cookies.length; c++) {
      let d  = window.location.hostname.split(".");
      const date = new Date();
      date.setTime(date.getTime() + (daystoLive * 24* 60 * 60 *1000));
      // date.setTime(date.getTime() + (daystoLive *1000));
      
      while (d.length > 0) {
        let cookieBase = encodeURIComponent(cookies[c].split(";")[0].split("=")[0]) + `=; expires=${date.toUTCString()}; domain=` + d.join('.') + ' ;path=';
        let p = location.pathname.split('/');
        document.cookie = cookieBase + '/';
        // while (p.length > 0) {
        //   document.cookie = cookieBase + p.join('/');
        //   p.pop();
        // };
        d.shift();
      }
    }
  }

  addCustomScript() {
    if (this.tracking.customScript !== undefined) {
      this.addNewScript(this.tracking.customScript)
    }
  }

  addNewScript(customScript) {
    let customScriptTag
    customScript.forEach(script => {
      if (script.type === 'src') {
        customScriptTag = document.createElement('script');
        customScriptTag.setAttribute('src', script.content);
      } else if (script.type === 'custom') {
        customScriptTag = document.createElement('script');
        customScriptTag.text = script.content;
      }

      if (script.position === 'head') {
        document.head.appendChild(customScriptTag);
      } else {
        document.body.appendChild(customScriptTag);
      }
    })
  }


  start(languaje, obj) {
    if (!obj) obj = {}
    const lang = new LanguagesGC(languaje)

    this.config = {
      border: obj.border || 'border',
      position: obj.position || 'left',
      hideAfterClick: obj.hideAfterClick || false,
      bannerStyle: obj.style || 2
    }

    this.tracking = {
      AnalyticsCode: obj.analytics || undefined,
      FacebookPixelCode: obj.facebookPixel || undefined,
      HotjarTrackingCode: obj.hotjar || undefined,
      customScript: obj.customScript || undefined,
      userPreferencesScript: obj.userPreferencesScript || undefined,
      thirdPartyScript: obj.thirdPartyScript || undefined,
      analyticsScript: obj.analyticsScript || undefined,
      retentionPeriod: obj.retentionPeriod || 1
    }
    let customizeBtnDisplayVal = 'block'; 
    if (!obj.customizeBtnDisplay){
        customizeBtnDisplayVal = 'none';
    }
    this.banner = {
      description: obj.bannerDescription || lang.bannerDescription,
      linkText: obj.bannerLinkText || lang.bannerLinkText,
      link: obj.policyLink || '#link',
      background: obj.bannerBackground || '#fff',
      shadowSpread: obj.shadowSpread || 0,
      shadowColor: obj.shadowColor || 'rgb(0,0,0,0)',
      color: obj.bannerColor || '#1d2e38',
      closeColor: obj.closeColor || '#000',
      closeBtnHiddenText: obj.closeBtnHidden ? 'hidden' : '',
      heading: obj.bannerHeading !== 'none' ? obj.bannerHeading || lang.bannerHeading : '',
      acceptBtn: {
        text: obj.acceptBtnText || lang.acceptBtnText,
        background: obj.acceptBtnBackground || '#253b48',
        color: obj.acceptBtnColor || '#fff'
      },
      customizeButton: {
        display: customizeBtnDisplayVal,
        text: obj.customizeBtnText || lang.customizeBtnText,
        background: obj.customizeBtnBackground || '#E8E8E8',
        color: obj.customizeBtnColor || '#636363'
      },
      rejectBtn: {
        text: obj.rejectBtnText || lang.rejectBtnText,
        background: obj.rejectBtnBackground || '#E8E8E8',
        color: obj.rejectBtnColor || '#636363'
      },
      manageCookies: {
        color: obj.manageColor || '#1d2e38',
        background: obj.manageBackground || '#fff',
        text: obj.manageText || lang.manageText,
      }
    }
    let customizeUserPreferencesDisplay = 'flex'; 
    if (obj.customizeUserPreferences == false){
      customizeUserPreferencesDisplay = 'none';
    }
    let customizeAnalyticsDisplay = 'flex'; 
    if (obj.customizeAnalytics == false){
      customizeAnalyticsDisplay = 'none';
    }
    let customizeThirdPartyDisplay = 'flex'; 
    if (obj.customizeThirdParty == false){
      customizeThirdPartyDisplay = 'none';
    }
    let customizeSessionCookiesDisplay = 'flex';
    if(obj.customizeSessionCookies == false){
      customizeSessionCookiesDisplay = 'none'
    }

    this.selector = {
      titleText: obj.selectorTitleText || 'Customize Cookies',
      titleColor: obj.selectorTitleColor || 'black',
      btnText: obj.selectorBtnText || 'Save cookie preferences',
      btnBackground: obj.selectorBtnBackground || 'blue',
      btnColor: obj.selectorBtnColor || 'white',
      customizeUserPreferences: {
        display: customizeUserPreferencesDisplay
      },
      customizeAnalytics: {
        display: customizeAnalyticsDisplay
      },
      customizeThirdParty: {
        display: customizeThirdPartyDisplay
      },
      customizeSessionCookies: {
        display: customizeSessionCookiesDisplay
      },
      customizeSwitch: {
        offColor: obj.customizeSwitchOffColor || 'gray',
        onColor: obj.customizeSwitchOnColor || 'blue',
      }
    }
    // Append two CSS classes to represent each background color for 
    for(let i = 0; i < 2; i++){
      var style = document.createElement('style');
      document.head.appendChild(style);
      let css = undefined
      if(i == 0){
        css = '.switch_color_off' + ' { background-color: ' + this.selector.customizeSwitch.offColor + ';}';
      }else{
        css = '.switch_color_on' + ' { background-color: ' + this.selector.customizeSwitch.onColor + ';}';
      }
      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
        style.appendChild(document.createTextNode(css));
      }
      document.head.appendChild(style);
      }
    // Draw banner
    window.addEventListener('load', () => { this.render() })
  }
}

class LanguagesGC {
  constructor(code) {
    this.init()
    let lang = this.arrLang[code] || this.arrLang['en']
    this.bannerHeading = lang['bannerHeading']
    this.bannerDescription = lang['bannerDescription']
    this.bannerLinkText = lang['bannerLinkText']
    this.acceptBtnText = lang['acceptBtnText']
    this.rejectBtnText = lang['rejectBtnText']
    this.customizeBtnText = lang['customizeBtnText']
    this.manageText = lang['manageText']
  }

  init() {
    this.arrLang = {
      af: {
        'bannerHeading': 'Ons gebruik koekies',
        'bannerDescription': 'Ons gebruik ons eie koekies en die van derdepartye, om inhoud te verpersoonlik en om webverkeer te ontleed.',
        'bannerLinkText': 'Lees meer oor koekies',
        'acceptBtnText': 'Aanvaar koekies',
        'rejectBtnText': 'Weier',
        'manageText': 'Koekie-instellings'
      },
      bg: {
        'bannerHeading': 'Ние използваме бисквитки',
        'bannerDescription': 'Използваме наши и бисквитки на трети страни, за да запазим Вашите предпочитания и да събираме аналитични данни.',
        'bannerLinkText': 'Прочетете повече за бисквитките',
        'acceptBtnText': 'Приеми бисквитките',
        'rejectBtnText': 'Откажи',
        'manageText': 'Настрой бисквитките'
      },
      de: {
        'bannerHeading': 'Verwendung von Cookies',
        'bannerDescription': 'Wir nutzen Cookies (auch von Drittanbietern), um Inhalte zu personalisieren und Surfverhalten zu analysieren.',
        'bannerLinkText': 'Mehr über Cookies',
        'acceptBtnText': 'Cookies akzeptieren',
        'rejectBtnText': 'Ablehnen',
        'manageText': 'Cookies verwalten'
      },
      en: {
        'bannerHeading': 'We use cookies',
        'bannerDescription': 'We use our own and third-party cookies to personalize content and to analyze web traffic.',
        'bannerLinkText': 'Read more about cookies',
        'acceptBtnText': 'Accept cookies',
        'rejectBtnText': 'Reject',
        'customizeBtnText': 'More options',
        'manageText': 'Manage cookies'
      },
      sv: {
        'bannerHeading': 'Vi använder cookies',
        'bannerDescription' : 'Vi använder våra egna och tredjepartscookies för att personalisera innehåll och till statistik.',
        'bannerLinkText' : 'Läs mer om cookies',
        'acceptBtnText' : 'Acceptera cookies',
        'rejectBtnText' : 'Avslå',
        'manageText' : 'Hantera cookies'
      },
      no: {
        'bannerHeading': 'Vi benytter cookies',
        'bannerDescription' : 'Vi benytter våre egne og tredjepartscookies for å personalisere innehold og til statistikk.',
        'bannerLinkText' : 'Les mer om cookies',
        'acceptBtnText' : 'Aksepter cookies',
        'rejectBtnText' : 'Avslå',
        'manageText' : 'Håndter cookies'
      },
      da: {
        'bannerHeading': 'Vi bruger cookies',
        'bannerDescription' : 'Vi bruger vores egne og tredjepartscookies til at tilpasse indhold og måle statistik.',
        'bannerLinkText' : 'Læs mere om cookies',
        'acceptBtnText' : 'Accepter cookies',
        'rejectBtnText' : 'Afvis',
        'manageText' : 'Administrer cookies'
      },
      es: {
        'bannerHeading': 'Uso de cookies',
        'bannerDescription': 'Utilizamos cookies propias y de terceros para personalizar el contenido y para analizar el tráfico de la web.',
        'bannerLinkText': 'Ver más sobre las cookies',
        'acceptBtnText': 'Aceptar cookies',
        'rejectBtnText': 'Rechazar',
        'manageText': 'Cookies'
      },
      fr: {
        'bannerHeading': 'Nous utilisons des cookies',
        'bannerDescription': 'Nous utilisons nos propres cookies et ceux de tiers pour adapter le contenu et analyser le trafic web.',
        'bannerLinkText': 'En savoir plus sur les cookies',
        'acceptBtnText': 'Accepter les cookies',
        'rejectBtnText': 'Refuser',
        'manageText': 'Paramétrez les cookies'
      },
      it: {
        'bannerHeading': 'Utilizziamo i cookie',
        'bannerDescription': 'Utilizziamo cookie nostri e di terze parti per personalizzare il contenuto e analizzare il traffico web.',
        'bannerLinkText': 'Per saperne di più riguardo i cookie',
        'acceptBtnText': 'Accetta i cookie',
        'rejectBtnText': 'Rifiuta',
        'manageText': 'Gestisci i cookie'
      },
      mg: {
        'bannerHeading': 'Izahay dia mampiasa cookies',
        'bannerDescription': "Mampiasa ny cookies anay manokana sy ireo an'ny antoko fahatelo izahay hampifanarahana ny atiny sy hamakafaka ny fivezivezena amin'ny tranonkala.",
        'bannerLinkText': 'Maniry halala bebe kokoa momba ny cookies',
        'acceptBtnText': 'Manaiky ireo cookies',
        'rejectBtnText': 'Tsy mety',
        'manageText': 'Hamboarina ny cookies'
      },
      nl: {
        'bannerHeading': 'We gebruiken cookies',
        'bannerDescription': 'We gebruiken onze en third-party cookies om content te personaliseren en web traffic te analyseren.',
        'bannerLinkText': 'Lees meer over cookies',
        'acceptBtnText': 'Cookies accepteren',
        'rejectBtnText': 'Weigeren',
        'manageText': 'Cookies beheren'
      },
      oc: {
        'bannerHeading': 'Utilizam de cookies',
        'bannerDescription': 'Utilizam nòstres pròpris cookies e de cookies tèrces per adaptar lo contengut e analisar lo trafic web.',
        'bannerLinkText': 'Ne saber mai suls cookies',
        'acceptBtnText': 'Acceptar los cookies',
        'rejectBtnText': 'Refusar',
        'manageText': 'Configurar los cookies'
      },
      pl: {
        'bannerHeading': 'Używamy plików cookie',
        'bannerDescription': 'Ta strona używa plików cookie - zarówno własnych, jak i od zewnętrznych dostawców, w celu personalizacji treści i analizy ruchu.',
        'bannerLinkText': 'Więcej o plikach cookie',
        'acceptBtnText': 'Zaakceptuj pliki cookie',
        'rejectBtnText': 'Odrzuć',
        'manageText': 'Ustawienia plików cookie'
      },
      pt_BR: {
        'bannerHeading': 'Uso de cookies',
        'bannerDescription': 'Usamos cookies próprios e de terceiros para personalizar o conteúdo e analisar o tráfego da web.',
        'bannerLinkText': 'Leia mais sobre os cookies',
        'acceptBtnText': 'Aceitar cookies',
        'rejectBtnText': 'Rejeitar',
        'manageText': 'Gerenciar cookies'
      },
      ru: {
        'bannerHeading': 'Позвольте использовать куки?',
        'bannerDescription': 'Мы используем собственные и сторонние куки для персонализации контента и анализа веб-трафика.',
        'bannerLinkText': 'Узнать больше про куки.',
        'acceptBtnText': 'Ок, используйте',
        'rejectBtnText': 'Не разрешаю',
        'manageText': 'Разрешите использовать куки?'
      },
      sk: {
        'bannerHeading': 'Používame cookies',
        'bannerDescription': 'Na prispôsobenie obsahu a analýzu webovej stránky používame vlastné cookies a cookies tretích strán.',
        'bannerLinkText': 'Čo sú cookies?',
        'acceptBtnText': 'Povoliť cookies',
        'rejectBtnText': 'Nepovoliť',
        'manageText': 'Spravovať cookies'
      },
      th: {
        'bannerHeading': 'Cookies',
        'bannerDescription': 'พวกเราใช้คุกกี้บุคคลที่สาม เพื่อปรับแต่งเนื้อหาและวิเคราะห์การเข้าชมเว็บ',
        'bannerLinkText': 'อ่านเพิ่มเติมเกี่ยวกับคุกกี้',
        'acceptBtnText': 'ยอมรับคุกกี้',
        'rejectBtnText': 'ปฏิเสธคุกกี้',
        'manageText': 'Cookies'
      },
      tr: {
        'bannerHeading': 'Çerez kullanımı',
        'bannerDescription': 'İçeriği kişiselleştirmek ve web trafiğini analiz etmek için kendi ve üçüncü taraf çerezlerimizi kullanıyoruz.',
        'bannerLinkText': 'Çerezler hakkında daha fazlasını okuyun',
        'acceptBtnText': 'Çerezleri kabul et',
        'rejectBtnText': 'Reddet',
        'manageText': 'Çerezleri yönet'
      },
      uk: {
        'bannerHeading': 'Ми використовуємо кукі',
        'bannerDescription': 'Ми використовуємо власні та сторонні cookie для персоналізації досвіду користування та аналізу веб-трафіку.',
        'bannerLinkText': 'Дізнайтеся більше про cookie',
        'acceptBtnText': 'Прийняти',
        'rejectBtnText': 'Відхилити',
        'manageText': 'Налаштування cookie'
      },
      ja: {
        'bannerHeading': 'Cookies を使用しています',
        'bannerDescription': '私たちは、コンテンツのパーソナライズやトラフィックの分析のために、独自およびサードパーティー製 Cookies を使用しています。',
        'bannerLinkText': 'Cookiesについて詳しく見る',
        'acceptBtnText': 'Cookiesを受け入れる',
        'rejectBtnText': '拒否',
        'manageText': 'cookies管理'
      },
      zh_TW: {
        'bannerHeading': '我們使用 Cookies',
        'bannerDescription' : '我們使用了自己和第三方的 cookies 來個人化您的內容和分析網頁的流量。',
        'bannerLinkText' : '閱讀更多關於 cookies',
        'acceptBtnText' : '同意 cookies',
        'rejectBtnText' : '拒絕',
        'manageText' : '管理 cookies'
      },
      zh: {
        'bannerHeading': '我们使用 Cookies',
        'bannerDescription': '我们使用了自己和第三方的 cookies 来个性化您的内容和分析网页的流量。',
        'bannerLinkText': '阅读更多关于 cookies',
        'acceptBtnText': '同意 cookies',
        'rejectBtnText': '拒绝',
        'manageText': '管理 cookies'
      },
      ca: {
        'bannerHeading': 'Ús de Cookies',
        'bannerDescription': 'Utilitzem cookies pròpies i de tercers per a personalitzar el contingut i per a analitzar el trànsit del lloc web.',
        'bannerLinkText': 'Vegeu més informació sobre les Cookies',
        'acceptBtnText': 'Acceptar les Cookies',
        'rejectBtnText': 'Declinar',
        'manageText': 'Cookies'
      }
    }
  }

}

const glowCookies = new GlowCookies()