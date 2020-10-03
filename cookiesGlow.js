// Añadimos el HTML
var cookies = document.createElement("cookieconsent");
cookies.innerHTML = `<div class="cookie-consent-banner">
    <div class="cookie-consent-banner__inner">
    <img src="https://img.icons8.com/fluent/48/000000/cookie.png" hidden/>
    <div class="cookie-consent-banner__copy">
        <div class="cookie-consent-banner__description">Utilizamos cookies para personalizar el contenido, para proporcionar funciones y para analizar nuestro tráfico.</div>
    </div>
        <a href="#" id="aceptarCookies" onClick="aceptarCookies()" class="cookie-consent-btn" style="background-color: ${colorBtnPrincipal}; color: ${colorTextoBtnPrincipal};">
        <i class="fas fa-cookie-bite mr-1"></i> Aceptar cookies
        </a>
        <a href="#" id="rechazarCookies" onClick="rechazarCookies()" class="cookie-consent-btn-secondary">Rechazar</a>
    </div>
</div>`;

// Añadimos el CSS
var linkElement = document.createElement('link');
linkElement.setAttribute('rel', 'stylesheet');
linkElement.setAttribute('href', 'https://glowcookies.b-cdn.net/v1/cookiesGlow.css'); 

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
}

// Denegar Cookies
function rechazarCookies(){
  var d = new Date();
  d.setTime(d.getTime() + (30*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = `${cookieName}=aceptadas; ${expires}`;
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
        return "ok";
      }
    }
    return "";
  }

  // Verificamos si se han aceptado o no las cookies
  var isCookieSet = getCookie(cookieName);
  if(isCookieSet != "ok"){
    document.body.appendChild(linkElement);
    document.body.appendChild(cookies); 
  } 