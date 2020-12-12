/*
  GLOW COOKIES
  CREATED BY MANUEL CARRILLO
  WWW.GLOWMEDIA.ES
  2020 - v 2.0.2
*/

/* ======================================
ADD THE CSS WITH CDN
====================================== */
const linkElement = document.createElement('link');
linkElement.setAttribute('rel', 'stylesheet');
linkElement.setAttribute('href', `https://cdn.jsdelivr.net/gh/manucaralmo/GlowCookies@2.0.2/src/glowCookies.min.css`); 
document.head.appendChild(linkElement);


/* ======================================
CHECK USER VARIABLES & SET DEFAULTS
====================================== */
var bannerDescription, linkTexto, linkHref, bannerPosition, bannerBackground, descriptionColor, cookiesPolicy, btn1Text,
btn1Background, btn1Color, btn2Text, btn2Background, btn2Color, manageColor, manageBackground, manageText, border, policyLink, hideAfterClick

bannerDescription = bannerDescription || 'We use our own and third-party cookies to personalize content and to analyze web traffic.';
linkTexto = linkTexto  || 'Read more about cookies';
linkHref = linkHref  || '#';
bannerPosition = bannerPosition  || 'left';
bannerBackground = bannerBackground  || '#fff';
descriptionColor = descriptionColor  || '#505050';
cookiesPolicy = cookiesPolicy || 'no';
// Accept cookies btn
btn1Text = btn1Text  || 'Accept cookies';
btn1Background = btn1Background  || '#24273F';
btn1Color = btn1Color  || '#fff';
// Disable cookies btn
btn2Text = btn2Text  || 'Reject';
btn2Background = btn2Background  || '#E8E8E8';
btn2Color = btn2Color  || '#636363';
// Manage cookies Btn
manageColor = manageColor  || '#24273F';
manageBackground = manageBackground  || '#fff';
manageText = manageText  || 'Manage cookies';
hideAfterClick = hideAfterClick || false;
// Extras
border === "none" ? border = "none" : border = "border";

/* ======================================
HTML ELEMENTS
====================================== */
// COOKIES BUTTON
const PreBanner = document.createElement("div");
PreBanner.innerHTML = `<button type="button" id="prebanner" onClick="abrirSelector()" class="prebanner prebanner-${bannerPosition} ${border}" style="color: ${manageColor}; background-color: ${manageBackground};">
                          <svg fill="currentColor" style="margin-right: 0.25em; margin-top: 0.15em; vertical-align: text-top;" height="1.05em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path d="M510.52 255.82c-69.97-.85-126.47-57.69-126.47-127.86-70.17 0-127-56.49-127.86-126.45-27.26-4.14-55.13.3-79.72 12.82l-69.13 35.22a132.221 132.221 0 0 0-57.79 57.81l-35.1 68.88a132.645 132.645 0 0 0-12.82 80.95l12.08 76.27a132.521 132.521 0 0 0 37.16 72.96l54.77 54.76a132.036 132.036 0 0 0 72.71 37.06l76.71 12.15c27.51 4.36 55.7-.11 80.53-12.76l69.13-35.21a132.273 132.273 0 0 0 57.79-57.81l35.1-68.88c12.56-24.64 17.01-52.58 12.91-79.91zM176 368c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm32-160c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm160 128c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z"/>
                          </svg>
                          ${manageText}
                      </button>`;
PreBanner.style.display = "none";
document.body.appendChild(PreBanner);

// COOKIES BANNER
const Cookies = document.createElement("div");
Cookies.innerHTML = `<div class="banner banner-${bannerPosition} ${border}" style="background-color: ${bannerBackground};">
                        <div class="cookie-consent-banner__inner">
                        <div class="cookie-consent-banner__copy">
                            <div class="cookie-consent-banner__description" style="color: ${descriptionColor};">
                                ${bannerDescription} 
                                <a href="${linkHref}" class="link-btn" style="color: ${descriptionColor};" target="_blank">${linkTexto}</a>
                            </div>
                        </div>
                        <div class="buttons">
                            <button type="button" id="aceptarCookies" onClick="aceptarCookies()" class="cookie-consent-btn" style="background-color: ${btn1Background}; color: ${btn1Color};">
                            <svg fill="currentColor" style="margin-right: 0.25em; margin-top: 0.15em; vertical-align: text-top;" height="1.05em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path d="M510.52 255.82c-69.97-.85-126.47-57.69-126.47-127.86-70.17 0-127-56.49-127.86-126.45-27.26-4.14-55.13.3-79.72 12.82l-69.13 35.22a132.221 132.221 0 0 0-57.79 57.81l-35.1 68.88a132.645 132.645 0 0 0-12.82 80.95l12.08 76.27a132.521 132.521 0 0 0 37.16 72.96l54.77 54.76a132.036 132.036 0 0 0 72.71 37.06l76.71 12.15c27.51 4.36 55.7-.11 80.53-12.76l69.13-35.21a132.273 132.273 0 0 0 57.79-57.81l35.1-68.88c12.56-24.64 17.01-52.58 12.91-79.91zM176 368c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm32-160c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm160 128c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z"/>
                            </svg>
                            ${btn1Text}
                            </button>
                            <button type="button" id="rechazarCookies" onClick="rechazarCookies()" class="cookie-consent-btn-secondary" style="background-color: ${btn2Background}; color: ${btn2Color};">
                            ${btn2Text}
                            </button>
                        </div>
                        </div>
                    </div>`;
Cookies.style.display = "none";
document.body.appendChild(Cookies);


/* ======================================
ENABLE TRACKING
====================================== */
function activarSeguimiento(){
    // Google Analytics Tracking
    if(typeof(AnalyticsCode) != "undefined" && AnalyticsCode !== null){
        var Analytics = document.createElement('script');
        Analytics.setAttribute('src',`https://www.googletagmanager.com/gtag/js?id=${AnalyticsCode}`);
        document.head.appendChild(Analytics);
        var AnalyticsData = document.createElement('script');
        AnalyticsData.text = `window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                            gtag('config', '${AnalyticsCode}');`;
        document.head.appendChild(AnalyticsData);
        console.log(`Activado el seguimiento de Analytics para: ${AnalyticsCode}`);
    }
    // Google Analytics Tracking
    // Facebook pixel tracking code
    if(typeof(FacebookPixelCode) != "undefined" && FacebookPixelCode !== null){
        var FacebookPixelData = document.createElement('script');
        FacebookPixelData.text = `
                                    !function(f,b,e,v,n,t,s)
                                    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                                    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                                    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                                    n.queue=[];t=b.createElement(e);t.async=!0;
                                    t.src=v;s=b.getElementsByTagName(e)[0];
                                    s.parentNode.insertBefore(t,s)}(window, document,'script',
                                    'https://connect.facebook.net/en_US/fbevents.js');
                                    fbq('init', '${FacebookPixelCode}');
                                    fbq('track', 'PageView');
                                `;
        document.head.appendChild(FacebookPixelData);
        var FacebookPixel = document.createElement('noscript');
        FacebookPixel.setAttribute('height',`1`);
        FacebookPixel.setAttribute('width',`1`);
        FacebookPixel.setAttribute('style',`display:none`);
        FacebookPixel.setAttribute('src',`https://www.facebook.com/tr?id=${FacebookPixelCode}&ev=PageView&noscript=1`);
        document.head.appendChild(FacebookPixel);
        console.log(`Activado el seguimiento de Facebook Pixel para: ${FacebookPixelCode}`);
    }
    // Facebook pixel tracking code
    // Hotjar Tracking
    if(typeof(HotjarTrackingCode) != "undefined" && HotjarTrackingCode !== null){
        var hotjarTrackingData = document.createElement('script');
        hotjarTrackingData.text = `
                                (function(h,o,t,j,a,r){
                                    h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                                    h._hjSettings={hjid:${HotjarTrackingCode},hjsv:6};
                                    a=o.getElementsByTagName('head')[0];
                                    r=o.createElement('script');r.async=1;
                                    r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                                    a.appendChild(r);
                                })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
                                `;
        document.head.appendChild(hotjarTrackingData);
        console.log(`Activado el seguimiento de Hotjar para: ${HotjarTrackingCode}`);
    }
    // Hotjar Tracking
}


/* ======================================
DISABLE TRACKING
====================================== */
let desactivarSeguimiento = () => {
    console.log("Seguimiento desactivado");
    // Google Analytics Tracking ('client_storage': 'none')
    if(typeof(AnalyticsCode) != "undefined" && AnalyticsCode !== null){
        var Analytics = document.createElement('script');
        Analytics.setAttribute('src',`https://www.googletagmanager.com/gtag/js?id=${AnalyticsCode}`);
        document.head.appendChild(Analytics);
        var AnalyticsData = document.createElement('script');
        AnalyticsData.text = `window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                            gtag('config', '${AnalyticsCode}' , {
                                'client_storage': 'none'
                            });`;
        document.head.appendChild(AnalyticsData);
        console.log(`Activado el seguimiento de Analytics para: ${AnalyticsCode}`);

        function clearCookie(name) {
            document.cookie = name +'=; Path=/; domain='+ window.location.hostname +'; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
          }
        clearCookie('_gat_gtag_' + AnalyticsCode.split('-').join('_'));
        clearCookie('_gid');
        clearCookie('_ga');
    }
    // Facebook pixel tracking code
    if(typeof(FacebookPixelCode) != "undefined" && FacebookPixelCode !== null){
        function clearCookie(name) {
            document.cookie = name +'=; Path=/; domain='+ window.location.hostname +'; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
          }
        clearCookie('_fbp');
    }
}

/* ======================================
FUNCTIONS
====================================== */
    
// === ACCEPT AND DENY COOKIES ===
// Accept Cookies
let aceptarCookies = () => {
    localStorage.setItem("GlowCookies", "1");
    abrirManageCookies();
    activarSeguimiento();
}
// Deny Cookies
let rechazarCookies = () => {
    localStorage.setItem("GlowCookies", "0");
    abrirManageCookies();
    desactivarSeguimiento();
}
    
// === OPEN AND CLOSE BANNER & BUTTON ===
// OPEN COOKIES BUTTON
let abrirSelector = () => {
    PreBanner.style.display = "none";
    Cookies.style.display = "block";
}
// OPEN MANAGE COOKIES BUTTON
let abrirManageCookies = () => {
    if (hideAfterClick) {
        PreBanner.style.display = "none";
    } else {
        PreBanner.style.display = "block";
    }
    Cookies.style.display = "none";
}

/* ======================================
VERIFY -- ACCEPTED OR DISABLED
====================================== */
switch(localStorage.getItem("GlowCookies")) {
    case "1":
        console.log('Cookies: Aceptadas');
        abrirManageCookies();
        activarSeguimiento();
        break;
    case "0":
        console.log('Cookies: Denegadas');
        abrirManageCookies();
        break;
    default:
        console.log('Cookies: Sin escoger');
        abrirSelector();
}