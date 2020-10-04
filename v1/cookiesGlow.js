/*
  GLOW COOKIES
  CREATED BY GLOW MEDIA
  WWW.GLOWMEDIA.ES
  2020
*/

// Añadimos el CSS
var linkElement = document.createElement('link');
linkElement.setAttribute('rel', 'stylesheet');
//linkElement.setAttribute('href', 'https://cdn.jsdelivr.net/gh/manucaralmo/GlowCookies@1.2.2/v1/cookiesGlow.min.css'); 
linkElement.setAttribute('href', 'v1/cookiesGlow.css'); 
document.body.appendChild(linkElement);

//Variables del usuario
if (typeof(bannerDescription) == "undefined" && bannerDescription == null){
  var bannerDescription = "Utilizamos cookies propias y de terceros para personalizar el contenido y para analizar el tráfico de la web.";
}
if (typeof(linkHref) == "undefined" && linkHref == null){
  var linkHref = "#";
}
if (typeof(bannerPosition) == "undefined" && bannerPosition == null){
  var bannerPosition = "left";
}
if (typeof(btn1Text) == "undefined" && btn1Text == null){
  var btn1Text = "Aceptar cookies";
}
if (typeof(btn2Text) == "undefined" && btn2Text == null){
  var btn2Text = "Denegar";
}
if (typeof(colorBtn1) == "undefined" && colorBtn1 == null){
  var colorBtn1 = "#fafafa";
}
if (typeof(colorTextoBtn1) == "undefined" && colorTextoBtn1 == null){
  var colorTextoBtn1 = "#fff";
}
if (typeof(colorPrebannerTexto) == "undefined" && colorPrebannerTexto == null){
  var colorPrebannerTexto = "#34445C";
}
if (typeof(colorPrebanner) == "undefined" && colorPrebanner == null){
  var colorPrebanner = "#fff";
}
if (typeof(linkTexto) == "undefined" && linkTexto == null){
  var linkTexto = "Ver más sobre las cookies";
}

// SELECTOR DE PREFERENCIAS
var preBanner = document.createElement("div");
preBanner.innerHTML = `<button type="button" id="prebanner" onClick="abrirSelector()" class="prebanner prebanner-${bannerPosition}" style="color: ${colorPrebannerTexto}; background-color: ${colorPrebanner};">
                          <svg fill="currentColor" style="margin-right: 0.25em; margin-top: 0.15em; vertical-align: text-top;" height="1.05em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path d="M510.52 255.82c-69.97-.85-126.47-57.69-126.47-127.86-70.17 0-127-56.49-127.86-126.45-27.26-4.14-55.13.3-79.72 12.82l-69.13 35.22a132.221 132.221 0 0 0-57.79 57.81l-35.1 68.88a132.645 132.645 0 0 0-12.82 80.95l12.08 76.27a132.521 132.521 0 0 0 37.16 72.96l54.77 54.76a132.036 132.036 0 0 0 72.71 37.06l76.71 12.15c27.51 4.36 55.7-.11 80.53-12.76l69.13-35.21a132.273 132.273 0 0 0 57.79-57.81l35.1-68.88c12.56-24.64 17.01-52.58 12.91-79.91zM176 368c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm32-160c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm160 128c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z"/>
                          </svg>
                          Cookies
                      </button>`;
preBanner.style.display = "none";
document.body.appendChild(preBanner);

// Añadimos el HTML
var cookies = document.createElement("div");
cookies.innerHTML = `
<div class="banner banner-${bannerPosition}">
    <div class="cookie-consent-banner__inner">
      <div class="cookie-consent-banner__copy">
          <div class="cookie-consent-banner__description">${bannerDescription} 
          <a href="${linkHref}" class="link-btn" target="_blank">${linkTexto}</a></div>
      </div>
      <div class="buttons">
        <button type="button" id="aceptarCookies" onClick="aceptarCookies()" class="cookie-consent-btn" style="background-color: ${colorBtn1}; color: ${colorTextoBtn1};">
          <svg fill="currentColor" style="margin-right: 0.25em; margin-top: 0.15em; vertical-align: text-top;" height="1.05em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M510.52 255.82c-69.97-.85-126.47-57.69-126.47-127.86-70.17 0-127-56.49-127.86-126.45-27.26-4.14-55.13.3-79.72 12.82l-69.13 35.22a132.221 132.221 0 0 0-57.79 57.81l-35.1 68.88a132.645 132.645 0 0 0-12.82 80.95l12.08 76.27a132.521 132.521 0 0 0 37.16 72.96l54.77 54.76a132.036 132.036 0 0 0 72.71 37.06l76.71 12.15c27.51 4.36 55.7-.11 80.53-12.76l69.13-35.21a132.273 132.273 0 0 0 57.79-57.81l35.1-68.88c12.56-24.64 17.01-52.58 12.91-79.91zM176 368c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm32-160c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm160 128c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z"/>
          </svg>
          ${btn1Text}
        </button>
        <button type="button" id="rechazarCookies" onClick="rechazarCookies()" class="cookie-consent-btn-secondary">
          ${btn2Text}
        </button>
      </div>
    </div>
</div>`;
cookies.style.display = "none";
document.body.appendChild(cookies);


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

// Desactivar seguimientos - Future update
function desactivarSeguimiento(){
  console.log("Seguimiento desactivado");
}


// Nombre de las cookies
var hostname = window.location.hostname;
var cookieName = `cookies${hostname}`;


// FUNCIONES DE ACEPTAR Y DENEGAR COOKIES
// Aceptar Cookies
function aceptarCookies(){
  var d = new Date();
  d.setTime(d.getTime() + (30*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = `${cookieName}=aceptadas; ${expires}`;
  cookies.style.display = "none";
  preBanner.style.display = "block";
  activarSeguimiento();
}
// Denegar Cookies
function rechazarCookies(){
  var d = new Date();
  d.setTime(d.getTime() + (1*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = `${cookieName}=denegadas; ${expires}`;
  cookies.style.display = "none";
  preBanner.style.display = "block";
  desactivarSeguimiento();
}

// ABRIR SELECTOR DE COOKIES
// abrir selector de cookies
function abrirSelector(){
  preBanner.style.display = "none";
  cookies.style.display = "block";
}

// FUNCIONES DE VERIFICAR SI EXISTE LA COOKIE
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
          return "ok";
        } else if (c.substring(name.length, c.length) == "denegadas") {
          return "no";
        }
      }
    }
    return "";
  }

  // Verificamos si se han aceptado o no las cookies
  var isCookieSet = getCookie(cookieName);

  switch(isCookieSet) {
    case "ok":
      console.log('Cookies: Aceptadas');
      preBanner.style.display = "block";
      activarSeguimiento();
      break;
    case "no":
      console.log('Cookies: Denegadas');
      preBanner.style.display = "block";
      break;
    default:
      console.log('Cookies: Sin escoger');
      cookies.style.display = "block";
  }
