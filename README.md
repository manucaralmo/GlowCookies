![Badge-glow](https://img.shields.io/badge/GlowCookies-v.1.4-blue)
# GlowCookies - Automatic GDPR Cookies Banner for Google Analytics (more coming soon)
Simple and full automated cookies banner for any website. Complies with the new European regulations with only two lines of code. Activate and deactivate Google Analytics (more coming soon) cookies whenever the user wishes, with just 1 click.

<br>
The cookies banner
<img src="https://cdn.glowmedia.es/upload/uploads/6c8121glowCookies.png" data-canonical-src="https://cdn.glowmedia.es/upload/uploads/6c8121glowCookies.png" height="175" />
<br>
Manage cookies: when cookies have been accepted or rejected
<img src="https://cdn.glowmedia.es/upload/uploads/b3a46bbtnGlowcookies.png" data-canonical-src="https://cdn.glowmedia.es/upload/uploads/b3a46bbtnGlowcookies.png" height="75" />
<br>

## How it works?
You just have to install the code. When the user clicks on accept cookies, the google analytics tracking code starts tracking. If the user rejects cookies, the tracking code will not start working.

## How to install it?
Add this code to your html `<head>` tag.
```html
<script src="https://cdn.jsdelivr.net/gh/manucaralmo/GlowCookies@1.4/v1/cookiesGlow.js" async></script>
<script>
    var AnalyticsCode = "UA-156900259-00";
    var linkHref = "https://link-to-your-cookies.html";
</script>
```

## Important
1. In `AnalyticsCode` you must add your tracking id that you can find in Google Analytics.
2. In `linkHref` you must add the link where users can read more about cookies.

## Customize banner
And that's it. Now there are certain parameters that you can change to customize your banner.

1. `bannerPosition` (left or right) Left default
2. `colorBtn1` You can choose the color of the main button.
3. `colorTextoBtn1` You can choose the color of the main button text.
4. `bannerDescription` You can choose the text that appears on the banner. The default text is: "Utilizamos cookies propias y de terceros para personalizar el contenido y para analizar el tráfico de la web."
5. `btn2Text` Change the decline cookies text button.
6. `colorPrebanner`
7. `colorPrebannerTexto`
8. `linkTexto`

## how to contribute?
Coming soon
