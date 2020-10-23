/*
  GLOW COOKIES
  CREATED BY GLOW MEDIA
  WWW.GLOWMEDIA.ES
  2020 - v 1.7
*/

// ADD THE CSS WITH CDN
var linkElement = document.createElement('link');
linkElement.setAttribute('rel', 'stylesheet');
// CHANGE THE LINK BELOW TO "v1/cookiesGlow.css" IF YOU DONT WANT TO USE A CDN
linkElement.setAttribute('href', 'v1/cookiesGlow.css'); 
document.body.appendChild(linkElement);

// ============================================
// CHECK USER VARIABLES & SET DEFAULTS
// ============================================
var bannerDescription = bannerDescription  || 'We use our own and third-party cookies to personalize content and to analyze web traffic.';
var linkTexto = linkTexto  || 'Read more about cookies';
var linkHref = linkHref  || '#';
var bannerPosition = bannerPosition  || 'left';
var bannerBackground = bannerBackground  || '#fff';
var descriptionColor = descriptionColor  || '#505050';
var cookiesPolicy = cookiesPolicy || 'no';
// Accept cookies btn
var btn1Text = btn1Text  || 'Aceptar cookies';
var btn1Background = btn1Background  || '#24273F';
var btn1Color = btn1Color  || '#fff';
// Disable cookies btn
var btn2Text = btn2Text  || 'Denegar';
var btn2Background = btn2Background  || '#E8E8E8';
var btn2Color = btn2Color  || '#636363';
// Manage cookies Btn
var manageColor = manageColor  || '#24273F';
var manageBackground = manageBackground  || '#fff';
var manageText = manageText  || 'Manage cookies';
// Extras
var border = border  || 'yes';
if(border == "yes"){
  var border = "border";
} else if (border == "none"){
  var border = "border-none";
} else {
  var border = "border";
}
// ============================================
// END USER VARIABLES
// ============================================


// COOKIES BUTTON
var preBanner = document.createElement("div");
preBanner.innerHTML = `<button type="button" id="prebanner" onClick="abrirSelector()" class="prebanner prebanner-${bannerPosition} ${border}" style="color: ${manageColor}; background-color: ${manageBackground};">
                          <svg fill="currentColor" style="margin-right: 0.25em; margin-top: 0.15em; vertical-align: text-top;" height="1.05em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path d="M510.52 255.82c-69.97-.85-126.47-57.69-126.47-127.86-70.17 0-127-56.49-127.86-126.45-27.26-4.14-55.13.3-79.72 12.82l-69.13 35.22a132.221 132.221 0 0 0-57.79 57.81l-35.1 68.88a132.645 132.645 0 0 0-12.82 80.95l12.08 76.27a132.521 132.521 0 0 0 37.16 72.96l54.77 54.76a132.036 132.036 0 0 0 72.71 37.06l76.71 12.15c27.51 4.36 55.7-.11 80.53-12.76l69.13-35.21a132.273 132.273 0 0 0 57.79-57.81l35.1-68.88c12.56-24.64 17.01-52.58 12.91-79.91zM176 368c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm32-160c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm160 128c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z"/>
                          </svg>
                          ${manageText}
                      </button>`;
preBanner.style.display = "none";
document.body.appendChild(preBanner);

if ( cookiesPolicy === 'si' ){
  var policyLink = `<button type="button" class="link-btn" style="color: ${descriptionColor};" id="myBtn">${linkTexto}</button>`;
} else {
  var policyLink = `<a href="${linkHref}" class="link-btn" style="color: ${descriptionColor};" target="_blank">${linkTexto}</a>`;
}

// COOKIES BANNER
var cookies = document.createElement("div");
cookies.innerHTML = `<div class="banner banner-${bannerPosition} ${border}" style="background-color: ${bannerBackground};">
                        <div class="cookie-consent-banner__inner">
                          <div class="cookie-consent-banner__copy">
                              <div class="cookie-consent-banner__description" style="color: ${descriptionColor};">
                                ${bannerDescription} ${policyLink}
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
cookies.style.display = "none";
document.body.appendChild(cookies);

// COOKIES POLICY - BETA
var cookiesPolicy = document.createElement("div");
cookiesPolicy.innerHTML = `<div id="myModal" class="modal">
                              <div class="modal-content border">
                                <span class="close">&times;</span>
                                <h1>Política de cookies</h1><br>
                                <h3 class="c-p">Sobre esta política de cookies</h3>
                                <p>Esta Política de cookies explica qué son las cookies y cómo las usamos. Debe leer esta política para comprender qué son las cookies, cómo las usamos, los tipos de cookies que usamos, es decir, la información que recopilamos usando cookies y cómo se usa esa información y cómo controlar las preferencias de cookies. Para obtener más información sobre cómo usamos, almacenamos y mantenemos seguros sus datos personales, consulte nuestra Política de privacidad. En cualquier momento puede cambiar o retirar su consentimiento de la Declaración de cookies en nuestro sitio web. Obtenga más información sobre quiénes somos, cómo puede contactarnos y cómo procesamos los datos personales en nuestra Política de privacidad. Su consentimiento se aplica a los siguientes dominios: www.dresscodeshop.es</p>
                                <h3 class="c-p">¿Qué son las cookies?</h3>
                                <p>Las cookies son pequeños archivos de texto que se utilizan para almacenar pequeños fragmentos de información. Las cookies se almacenan en su dispositivo cuando el sitio web se carga en su navegador. Estas cookies nos ayudan a hacer que el sitio web funcione correctamente, hacer que el sitio web sea más seguro, brindar una mejor experiencia de usuario y comprender cómo funciona el sitio web y analizar qué funciona y dónde necesita mejorar.</p>
                                <h3 class="c-p">¿Cómo utilizamos las cookies?</h3>
                                <p>Como la mayoría de los servicios en línea, nuestro sitio web utiliza cookies propias y de terceros para varios propósitos. Las cookies de origen son principalmente necesarias para que el sitio web funcione de la manera correcta, y no recopilan ninguno de sus datos de identificación personal.Las cookies de terceros utilizadas en nuestros sitios web se utilizan principalmente para comprender cómo funciona el sitio web, cómo interactúa con nuestro sitio web, mantener nuestros servicios seguros, proporcionar anuncios que sean relevantes para usted y, en general, brindarle una mejor y mejor experiencia del usuario y ayudar a acelerar sus futuras interacciones con nuestro sitio web.</p>
                                <h3 class="c-p">¿Qué tipos de cookies utilizamos?</h3>
                                <p>Esencial: algunas cookies son esenciales para que pueda experimentar la funcionalidad completa de nuestro sitio. Nos permiten mantener sesiones de usuario y evitar amenazas de seguridad. No recopilan ni almacenan ninguna información personal. Por ejemplo, estas cookies le permiten iniciar sesión en su cuenta y agregar productos a su carrito y realizar el pago de forma segura.Estadísticas: estas cookies almacenan información como el número de visitantes del sitio web, el número de visitantes únicos, qué páginas del sitio web han sido visitadas, la fuente de la visita, etc. Estos datos nos ayudan a comprender y analizar qué tan bien funciona el sitio web y donde necesita mejorar.Marketing: nuestro sitio web muestra anuncios. Estas cookies se utilizan para personalizar los anuncios que le mostramos para que sean significativos para usted. Estas cookies también nos ayudan a realizar un seguimiento de la eficiencia de estas campañas publicitarias.Los proveedores de publicidad de terceros también pueden utilizar la información almacenada en estas cookies para mostrarle anuncios en otros sitios web en el navegador.Funcional: Son las cookies que ayudan a ciertas funcionalidades no esenciales en nuestro sitio web. Estas funcionalidades incluyen incrustar contenido como videos o compartir contenido en el sitio web en plataformas de redes sociales.Preferencias: estas cookies nos ayudan a almacenar su configuración y preferencias de navegación, como las preferencias de idioma, para que tenga una mejor y más eficiente experiencia en futuras visitas al sitio web.</p>
                                <h3 class="c-p">¿Cómo puedo controlar mis preferencias?</h3>
                                <p>Si decide cambiar sus preferencias más adelante a través de su sesión de navegación, puede hacer clic en la pestaña «Política de privacidad y cookies» en su pantalla. Esto mostrará nuevamente el aviso de consentimiento que le permitirá cambiar sus preferencias o retirar su consentimiento por completo.Además de esto, diferentes navegadores proporcionan diferentes métodos para bloquear y eliminar las cookies utilizadas por los sitios web. Puede cambiar la configuración de su navegador para bloquear / eliminar las cookies. Para obtener más información sobre cómo administrar y eliminar cookies, visite wikipedia.org, www.allaboutcookies.org.</p>
                                  <br>
                                </div>
                            </div>`;
document.body.appendChild(cookiesPolicy);


// START TRACKING FUNCTION
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

// Disable Tracking - Future update
function desactivarSeguimiento(){
  console.log("Seguimiento desactivado");
}

// COOKIE NAME -- We use de hostname for the cookies name
var hostname = window.location.hostname;
var cookieName = 'GlowCookies';
  var d = new Date();
  d.setTime(d.getTime() + (30*24*60*60*1000));
var cookieExpTime = "expires="+ d.toUTCString();

// FUNCTIONS -- ACCEPT AND DENY COOKIES
// Accept Cookies
function aceptarCookies(){
  document.cookie = `${cookieName}=1; ${cookieExpTime}; domain:${hostname}`;
  abrirManageCookies();
  activarSeguimiento();
}
// Deny Cookies
function rechazarCookies(){
  document.cookie = `${cookieName}=0; ${cookieExpTime}; domain:${hostname}`;
  abrirManageCookies();
  desactivarSeguimiento();
}

// FUNCTIONS -- OPEN AND CLOSE BANNER & BUTTON
// OPEN COOKIES BUTTON
function abrirSelector(){
  preBanner.style.display = "none";
  cookies.style.display = "block";
}
// OPEN MANAGE COOKIES BUTTON
function abrirManageCookies(){
  preBanner.style.display = "block";
  cookies.style.display = "none";
}

// VERIFY IF COOKIE EXISTS & VALUE
function readCookie(name) {
  return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + name.replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;
}

  // VERIFY -- ACCEPTED OR DISABLED
  var cookieValue = readCookie( cookieName );
  switch(cookieValue) {
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


// MODAL
var modal = document.getElementById("myModal");
var btnModal = document.getElementById("myBtn");
var spanModal = document.getElementsByClassName("close")[0];
btnModal.onclick = function() {
  modal.style.display = "block";
  abrirManageCookies();
}
spanModal.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}