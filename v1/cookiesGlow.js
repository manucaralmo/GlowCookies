/*
  GLOW COOKIES V 1.0
  CREATED BY GLOW MEDIA
  WWW.GLOWMEDIA.ES
  2020
*/

// Añadimos el HTML
var cookies = document.createElement("cookieconsent");
cookies.innerHTML = `
<div class="cookie-consent-banner">
    <div class="cookie-consent-banner__inner">
    <div class="cookie-consent-banner__copy">
        <div class="cookie-consent-banner__description">Utilizamos cookies propias y de terceros para personalizar el contenido, para proporcionar funciones y para analizar nuestro tráfico.</div>
    </div>
        <a href="#" id="aceptarCookies" onClick="aceptarCookies()" class="cookie-consent-btn" style="background-color: ${colorBtnPrincipal}; color: ${colorTextoBtnPrincipal};">
          <svg fill="currentColor" style="margin-right: 0.25em; margin-top: 0.15em; vertical-align: text-top;" height="1.05em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M510.52 255.82c-69.97-.85-126.47-57.69-126.47-127.86-70.17 0-127-56.49-127.86-126.45-27.26-4.14-55.13.3-79.72 12.82l-69.13 35.22a132.221 132.221 0 0 0-57.79 57.81l-35.1 68.88a132.645 132.645 0 0 0-12.82 80.95l12.08 76.27a132.521 132.521 0 0 0 37.16 72.96l54.77 54.76a132.036 132.036 0 0 0 72.71 37.06l76.71 12.15c27.51 4.36 55.7-.11 80.53-12.76l69.13-35.21a132.273 132.273 0 0 0 57.79-57.81l35.1-68.88c12.56-24.64 17.01-52.58 12.91-79.91zM176 368c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm32-160c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm160 128c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z"/>
          </svg>
          Aceptar cookies
        </a>
        <a href="#" id="rechazarCookies" onClick="rechazarCookies()" class="cookie-consent-btn-secondary">Rechazar</a>
    </div>
</div>`;

// Seguimientos
function activarSeguimiento(){
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
}

// Añadimos el CSS
var linkElement = document.createElement('link');
linkElement.setAttribute('rel', 'stylesheet');
linkElement.setAttribute('href', 'https://glowcookies.b-cdn.net/v1/cookiesGlow.min.css'); 

// Nombre de las cookies
var hostname = window.location.hostname;
var cookieName = `cookies${hostname}`;

// Aceptar Cookies
function aceptarCookies(){
  var d = new Date();
  d.setTime(d.getTime() + (30*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = `${cookieName}=aceptadas; ${expires}`;
  cookies.innerHTML = "";
  activarSeguimiento();
}

// Denegar Cookies
function rechazarCookies(){
  var d = new Date();
  d.setTime(d.getTime() + (1*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = `${cookieName}=denegadas; ${expires}`;
  cookies.innerHTML = "";
}

// Verificar si existe la cookie
  function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        if(c.substring(name.length, c.length) == "aceptadas"){
          console.log('Cookies: Aceptadas');
          return "ok";
        } else if (c.substring(name.length, c.length) == "denegadas") {
          console.log('Cookies: Rechazadas');
          return "denegadas";
        }
      }
    }
    return "";
  }

  // Verificamos si se han aceptado o no las cookies
  var isCookieSet = getCookie(cookieName);

  if(isCookieSet != "ok" && "denegadas"){
    document.body.appendChild(linkElement);
    document.body.appendChild(cookies); 
  } else if (isCookieSet == "ok") {
    activarSeguimiento();
  } else if (isCookieSet == "denegadas"){
  }