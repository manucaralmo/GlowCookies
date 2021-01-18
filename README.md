![Badge-glow](https://img.shields.io/badge/GlowCookies-v.2.0.4-blue) ![jsDelivr hits (GitHub)](https://img.shields.io/jsdelivr/gh/hm/manucaralmo/GlowCookies) ![GitHub repo size](https://img.shields.io/github/repo-size/manucaralmo/GlowCookies) ![GitHub Repo stars](https://img.shields.io/github/stars/manucaralmo/GlowCookies?style=social)
# GlowCookies - Cookie Consent Banner In JavaScript for Google Analytics, Facebook Pixel & more
Simple and full automated cookies banner for any website. Complies with the new European regulations with only two lines of code. Activate and deactivate Google Analytics, Facebook Pixel, Hotjar (and coming soon) cookies whenever the user wishes, with just 1 click.

[![Foo](https://cdn.glowmedia.es/upload/uploads/ed1952btn.svg)](https://manucaralmo.github.io/GlowCookies/)

<br>
The cookies banner
<img src="https://cdn.glowmedia.es/upload/uploads/6c8121glowCookies.png" data-canonical-src="https://cdn.glowmedia.es/upload/uploads/6c8121glowCookies.png" width="375" />
<br>

## How it works?
You just have to install the code. When the user clicks on accept cookies, the google analytics tracking code, Facebook Pixel and/or Hotjar starts tracking. If the user rejects cookies, the tracking code will not start working.

## How to install it?
Add this code to your html `<head>` tag.
```html
<script src="https://cdn.jsdelivr.net/gh/manucaralmo/GlowCookies@2.0.4/src/glowCookies.min.js" async></script>
<script>
    AnalyticsCode = "UA-156900259-00"; // Your Analytics tracking code (Optional)
    FacebookPixelCode = "96272777700000"; // Your Facebook Pixel code (Optional)
    HotjarTrackingCode = "2027553"; // Your Hotjar id (Optional)
    linkHref = "https://link-to-your-cookies.html"; // Your Cookies Policy link
</script>
```

## Important
1. In `AnalyticsCode` (optional) you must add your tracking id that you can find in Google Analytics.
2. In `FacebookPixelCode` (optional) you must add your Facebook Pixel Code (Event: PageView).
3. In `HotjarTrackingCode` (Optional) you must add your Hotjar ID.
4. In `linkHref` you must add the link where users can read more about cookies.

## Customize banner
And that's it. Now there are certain parameters that you can change to customize your banner.

### Texts & content
1. `btn1Text` - Change the text of "Accept cookies" button text.
2. `btn2Text` - Change the text of "Disable cookies" button.
3. `bannerDescription` - Change the text that appears on the banner. The default text is: "Utilizamos cookies propias y de terceros para personalizar el contenido y para analizar el tráfico de la web."
4. `linkTexto` - Change the text of the "Show more about cookies" link.
5. `linkHref` - Change the "Show more about cookies" link (Ej. https://link-to-your-cookies-policy.com).
6. `manageText` - Change the text of "manage cookies" button.

### Colors
1. `btn1Background` - Change the background color of the "Accept cookies" button.
2. `btn1Color` - Change the color of the text "Accept cookies" button.
3. `btn2Background` - Change the background color of the "Disable cookies" button.
4. `btn2Color` - Change the color of the text "Disable cookies" button.
5. `bannerBackground` - Change the background color of the cookies banner.
6. `descriptionColor` - Change the text color of the cookies description.
7. `manageColor` - Change the text color of "manage cookies" button.
8. `manageBackground` - Change the background color of "manage cookies" button.

### Alignment & extras
1. `bannerPosition` - ("left" or "right") Left default.
2. `border` - ("yes" or "none").
3. `hideAfterClick` - ("true" or "false") - Let the button disappear after a user decided. False is default.

## Example
```html
<script src="https://cdn.jsdelivr.net/gh/manucaralmo/GlowCookies@2.0.4/src/glowCookies.min.js" async></script>
<script>
    AnalyticsCode = "UA-156900259-00";
    FacebookPixelCode = "96272777700000";
    HotjarTrackingCode = "2027553";
    linkHref = "https://link-to-your-cookies.html";
    // texts
    btn1Text = "Aceptar cookies";
    btn2Text = "Rechazar";
    bannerDescription = "Utilizamos cookies propias y de terceros para personalizar el contenido y para analizar el tráfico de la web.";
    linkTexto = "Ver más sobre las cookies";
    manageText = "Cookies";
    // colors
    btn1Background = "#E8E8E8"; 
    btn1Color = "#17663D";
    btn2Background = "#E8E8E8";
    btn2Color = "#17663D";
    bannerBackground = "#17663D";
    descriptionColor = "#fff";
    manageColor = "#E8E8E8";
    manageBackground = "#17663D";
    // Extras
    border = "none";
    bannerPosition = "right";
    hideAfterClick = true;
</script>
```


## how to contribute?
Coming soon<br>
Email - manuel@glowmedia.es
