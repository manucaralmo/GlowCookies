export const renderCookiesBanner = (config, banner) => {
  const cookiesBanner = document.createElement("div")
  cookiesBanner.innerHTML = `
    <div 
      id="glowCookies-banner" 
      class="glowCookies__banner glowCookies__banner__${config.bannerStyle} glowCookies__${config.border} glowCookies__${config.position}"
      style="background-color: ${banner.background};"
    >
        <h3 style="color: ${banner.color};">${banner.heading}</h3>
        <p style="color: ${banner.color};">
            ${banner.description} 
            <a 
                href="${banner.link}"
                target="_blank" 
                class="read__more"
                style="color: ${banner.color};"
            >
                ${banner.linkText}
            </a>
            <button id="openManager">manager</button>
        </p>
        <div class="btn__section">
            <button type="button" id="acceptAllCookies" class="btn__accept accept__btn__styles" style="color: ${banner.acceptBtn.color}; background-color: ${banner.acceptBtn.background};">
                ${banner.acceptBtn.text}
            </button>
            <button type="button" id="rejectAllCookies" class="btn__settings settings__btn__styles" style="color: ${banner.rejectBtn.color}; background-color: ${banner.rejectBtn.background};">
                ${banner.rejectBtn.text}
            </button>
        </div>
    </div>
  `;
  document.body.appendChild(cookiesBanner)

  return document.getElementById('glowCookies-banner')
}