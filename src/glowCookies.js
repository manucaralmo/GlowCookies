/*
    GLOW COOKIES
    CREATED BY MANUEL CARRILLO
    WWW.GLOWMEDIA.ES
    2020 - v 3.0.1
*/

class GlowCookies {
    constructor() {
        // Cookies banner
        this.banner = undefined
        // Config
        this.config = undefined
        this.tracking = undefined
        // DOM ELEMENTS
        this.PreBanner = undefined
        this.Cookies = undefined
    }

    render() {
        this.addCss()
        this.createDOMElements()
        this.checkStatus()
    }

    addCss() {
        const stylesheet = document.createElement('link');
        stylesheet.setAttribute('rel', 'stylesheet');
        stylesheet.setAttribute('href', `https://cdn.jsdelivr.net/gh/manucaralmo/GlowCookies@3.0.1/src/glowCookies.min.css`);
        document.head.appendChild(stylesheet);
    }

    createDOMElements() {
        // COOKIES BUTTON
        this.PreBanner = document.createElement("div");
        this.PreBanner.innerHTML = `<button type="button" id="prebannerBtn" class="prebanner prebanner-${this.config.position} ${this.config.border} animation" style="color: ${this.banner.manageCookies.color}; background-color: ${this.banner.manageCookies.background};">
                                    <svg fill="currentColor" style="margin-right: 0.25em; margin-top: 0.15em; vertical-align: text-top;" height="1.05em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path d="M510.52 255.82c-69.97-.85-126.47-57.69-126.47-127.86-70.17 0-127-56.49-127.86-126.45-27.26-4.14-55.13.3-79.72 12.82l-69.13 35.22a132.221 132.221 0 0 0-57.79 57.81l-35.1 68.88a132.645 132.645 0 0 0-12.82 80.95l12.08 76.27a132.521 132.521 0 0 0 37.16 72.96l54.77 54.76a132.036 132.036 0 0 0 72.71 37.06l76.71 12.15c27.51 4.36 55.7-.11 80.53-12.76l69.13-35.21a132.273 132.273 0 0 0 57.79-57.81l35.1-68.88c12.56-24.64 17.01-52.58 12.91-79.91zM176 368c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm32-160c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm160 128c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z"/>
                                    </svg>${this.banner.manageCookies.text}</button>`;
        this.PreBanner.style.display = "none";
        document.body.appendChild(this.PreBanner);

        // COOKIES BANNER
        this.Cookies = document.createElement("div");
        this.Cookies.innerHTML = `<div class="glow-banner banner-${this.config.position} ${this.config.border}" style="background-color: ${this.banner.background};">
                                    <div class="glow-banner-content">
                                        <div class="glow-banner-description" style="color: ${this.banner.color};">
                                            ${this.banner.heading}
                                            ${this.banner.description} 
                                            <a href="${this.banner.link}" class="link-btn" style="color: ${this.banner.color};" target="_blank">${this.banner.linkText}</a>
                                        </div>
                                        <div class="glow-buttons">
                                            <button type="button" id="acceptCookies" class="cookie-consent-btn animation" style="background-color: ${this.banner.acceptBtn.background}; color: ${this.banner.acceptBtn.color};">
                                                <svg fill="currentColor" style="margin-right: 0.25em; margin-top: 0.15em; vertical-align: text-top;" height="1.05em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                    <path d="M510.52 255.82c-69.97-.85-126.47-57.69-126.47-127.86-70.17 0-127-56.49-127.86-126.45-27.26-4.14-55.13.3-79.72 12.82l-69.13 35.22a132.221 132.221 0 0 0-57.79 57.81l-35.1 68.88a132.645 132.645 0 0 0-12.82 80.95l12.08 76.27a132.521 132.521 0 0 0 37.16 72.96l54.77 54.76a132.036 132.036 0 0 0 72.71 37.06l76.71 12.15c27.51 4.36 55.7-.11 80.53-12.76l69.13-35.21a132.273 132.273 0 0 0 57.79-57.81l35.1-68.88c12.56-24.64 17.01-52.58 12.91-79.91zM176 368c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm32-160c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm160 128c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z"/>
                                                </svg>
                                                ${this.banner.acceptBtn.text}
                                            </button>
                                            <button type="button" id="rejectCookies" class="cookie-consent-btn-secondary animation" style="background-color: ${this.banner.rejectBtn.background}; color: ${this.banner.rejectBtn.color};">
                                                ${this.banner.rejectBtn.text}
                                            </button>
                                        </div>
                                    </div>
                                </div>`;
        this.Cookies.style.display = "none";
        document.body.appendChild(this.Cookies);

        // SET EVENT LISTENERS
        document.getElementById('prebannerBtn').addEventListener('click', () => this.openSelector())
        document.getElementById('acceptCookies').addEventListener('click', () => this.acceptCookies())
        document.getElementById('rejectCookies').addEventListener('click', () => this.rejectCookies())
    }

    checkStatus() {
        switch (localStorage.getItem("GlowCookies")) {
            case "1":
                this.openManageCookies();
                this.activateTracking();
                this.addCustomScript();
                break;
            case "0":
                this.openManageCookies();
                break;
            default:
                this.openSelector();
        }
    }

    openManageCookies() {
        if (this.config.hideAfterClick) {
            this.PreBanner.style.display = "none";
        } else {
            this.PreBanner.style.display = "block";
        }
        this.Cookies.style.display = "none";
    }

    openSelector() {
        this.PreBanner.style.display = "none";
        this.Cookies.style.display = "block";
    }

    acceptCookies() {
        localStorage.setItem("GlowCookies", "1")
        this.openManageCookies()
        this.activateTracking()
        this.addCustomScript()
    }

    rejectCookies() {
        localStorage.setItem("GlowCookies", "0");
        this.openManageCookies();
        this.disableTracking();
    }

    activateTracking() {
        // Google Analytics Tracking
        if (typeof (this.tracking.AnalyticsCode) != "undefined" && this.tracking.AnalyticsCode !== null) {
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
        if (typeof (this.tracking.FacebookPixelCode) != "undefined" && this.tracking.FacebookPixelCode !== null) {
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
        if (typeof (this.tracking.HotjarTrackingCode) != "undefined" && this.tracking.HotjarTrackingCode !== null) {
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
        if (typeof (this.tracking.AnalyticsCode) != "undefined" && this.tracking.AnalyticsCode !== null) {
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

    addCustomScript() {
        if(this.tracking.customScript !== undefined) {
            let customScriptTag

            this.tracking.customScript.forEach(script => {
                if(script.type === 'src'){
                    customScriptTag = document.createElement('script');
                    customScriptTag.setAttribute('src', script.content);
                } else if (script.type === 'custom'){
                    customScriptTag = document.createElement('script');
                    customScriptTag.text = script.content;
                }

                if(script.position === 'head'){
                    document.head.appendChild(customScriptTag);
                } else {
                    document.body.appendChild(customScriptTag);
                }
            })
        }
    }

    start(languaje, obj) {
        // Set parameters
        if (obj === undefined || obj === null) { obj = {} }

        // Set Config
        this.config = {
            border: obj.border || 'border',
            position: obj.position || 'left',
            hideAfterClick: obj.hideAfterClick || false
        }
        // Set Tracking
        this.tracking = {
            AnalyticsCode: obj.analytics || undefined,
            FacebookPixelCode: obj.facebookPixel || undefined,
            HotjarTrackingCode: obj.hotjar || undefined,
            customScript: obj.customScript || undefined
        }

        if (languaje === 'en') {
            // Banner
            this.banner = {
                description: obj.bannerDescription || 'We use our own and third-party cookies to personalize content and to analyze web traffic.',
                linkText: obj.bannerLinkText || 'Read more about cookies',
                link: obj.policyLink || '#link',
                background: obj.bannerBackground ||'#fff',
                color: obj.bannerColor || '#505050',
                heading: obj.bannerHeading || '',
                acceptBtn: {
                    text: obj.acceptBtnText || 'Accept cookies',
                    background: obj.acceptBtnBackground || '#24273F',
                    color: obj.acceptBtnColor || '#fff'
                },
                rejectBtn: {
                    text: obj.rejectBtnText || 'Reject',
                    background: obj.rejectBtnBackground || '#E8E8E8',
                    color: obj.rejectBtnColor || '#636363'
                },
                manageCookies: {
                    color: obj.manageColor || '#red',
                    background: obj.manageBackground || '#fff',
                    text: obj.manageText || 'Manage cookies',
                }
            }
        } else if (languaje === 'es') {
            // Banner
            this.banner = {
                description: obj.bannerDescription || 'Utilizamos cookies propias y de terceros para personalizar el contenido y para analizar el tráfico de la web.',
                linkText: obj.bannerLinkText || 'Ver más sobre las cookies',
                link: obj.policyLink || '#link',
                background: obj.bannerBackground ||'#fff',
                color: obj.bannerColor || '#505050',
                heading: obj.bannerHeading || '',
                acceptBtn: {
                    text: obj.acceptBtnText || 'Aceptar cookies',
                    background: obj.acceptBtnBackground || '#24273F',
                    color: obj.acceptBtnColor || '#fff'
                },
                rejectBtn: {
                    text: obj.rejectBtnText || 'Rechazar',
                    background: obj.rejectBtnBackground || '#E8E8E8',
                    color: obj.rejectBtnColor || '#636363'
                },
                manageCookies: {
                    color: obj.manageColor || '#red',
                    background: obj.manageBackground || '#fff',
                    text: obj.manageText || 'Cookies',
                }
            }
        } else if (languaje === 'de') {
            // Banner
            this.banner = {
                description: obj.bannerDescription || 'Wir nutzen Eigene und Cookies Dritter um Inhalte zu personalisieren und Surfverhalten zu analysieren.',
                linkText: obj.bannerLinkText || 'Mehr über Cookies',
                link: obj.policyLink || '#link',
                background: obj.bannerBackground ||'#fff',
                color: obj.bannerColor || '#505050',
                heading: obj.bannerHeading || '',
                acceptBtn: {
                    text: obj.acceptBtnText ||  'Cookies akzeptieren',
                    background: obj.acceptBtnBackground || '#24273F',
                    color: obj.acceptBtnColor || '#fff'
                },
                rejectBtn: {
                    text: obj.rejectBtnText || 'Ablehnen',
                    background: obj.rejectBtnBackground || '#E8E8E8',
                    color: obj.rejectBtnColor || '#636363'
                },
                manageCookies: {
                    color: obj.manageColor || '#red',
                    background: obj.manageBackground || '#fff',
                    text: obj.manageText || 'Cookies verwalten',
                }
            }
        }
        
        // Draw banner
        window.addEventListener('load', () => { this.render() })
    }
}
const glowCookies = new GlowCookies();
