export const renderCookiesManager = (config, banner) => {
  const cookiesManager = document.createElement("div")
  cookiesManager.innerHTML = `
    <div 
      id="glowCookies-manager" 
      class="glowCookies__manager"
      style="background-color: ${banner.background};"
    >
      <h3 style="color: ${banner.color};">Cookies management</h3>
      <div class="glowCookies__manager__content" style="color: ${banner.color};">Utilizamos cookies propias y de terceros para personalizar el contenido y para analizar el tráfico de la web. Ver más sobre las cookies Utilizamos cookies propias y de terceros para personalizar el contenido y para analizar el tráfico de la web. Ver más sobre las cookies Utilizamos cookies propias y de terceros para personalizar el contenido y para analizar el tráfico de la web. Ver más sobre las cookies
        Utilizamos cookies propias y de terceros para personalizar el contenido y para analizar el tráfico de la web. Ver más sobre las cookiesUtilizamos cookies propias y de terceros para personalizar el contenido y para analizar el tráfico de la web. Ver más sobre las cookies Utilizamos cookies propias y de terceros para personalizar el contenido y para analizar el tráfico de la web. Ver más sobre las cookies Utilizamos cookies propias y de terceros para personalizar el contenido y para analizar el tráfico de la web. Ver más sobre las cookies Utilizamos cookies propias y de terceros para personalizar el contenido y para analizar el tráfico de la web. Ver más sobre las cookies
        Utilizamos cookies propias y de terceros para personalizar el contenido y para analizar el tráfico de la web. Ver más sobre las cookiesUtilizamos cookies propias y de terceros para personalizar el contenido y para analizar el tráfico de la web. Ver más sobre las cookies
        Utilizamos cookies propias y de terceros para personalizar el contenido y para analizar el tráfico de la web. Ver más sobre las cookiesUtilizamos cookies propias y de terceros para personalizar el contenido y para analizar el tráfico de la web. Ver más sobre las cookies
        Utilizamos cookies propias y de terceros para personalizar el contenido y para analizar el tráfico de la web. Ver más sobre las cookiesUtilizamos cookies propias y de terceros para personalizar el contenido y para analizar el tráfico de la web. Ver más sobre las cookies
        Utilizamos cookies propias y de terceros para personalizar el contenido y para analizar el tráfico de la web. Ver más sobre las cookiesUtilizamos cookies propias y de terceros para personalizar el contenido y para analizar el tráfico de la web. Ver más sobre las cookies
      </div>
      <div class="btn__section">
        <button type="button" id="acceptAllCookies" class="btn__accept accept__btn__styles" style="color: ${banner.acceptBtn.color}; background-color: ${banner.acceptBtn.background};">
          Save preferences
        </button>
      </div>
    </div>
  `;
  document.body.appendChild(cookiesManager)

  return document.getElementById('glowCookies-manager')
}