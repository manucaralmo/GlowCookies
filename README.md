<img src="https://cabas.b-cdn.net/glowcookies/glowcookies.png" data-canonical-src="https://cabas.b-cdn.net/glowcookies/glowcookies.png" width="100%" />

![Badge-glow](https://img.shields.io/badge/GlowCookies-v.3.1.6-blue?style=flat-square) ![jsDelivr hits (GitHub)](https://img.shields.io/jsdelivr/gh/hm/manucaralmo/GlowCookies?style=flat-square) [![GitHub contributors](https://img.shields.io/github/contributors/manucaralmo/GlowCookies?style=flat-square)](https://github.com/AmauriC/tarteaucitron.js/graphs/contributors) ![GitHub Repo stars](https://img.shields.io/github/stars/manucaralmo/GlowCookies?style=social)

# GlowCookies 🍪 - Powerful Cookie Consent Banner In JavaScript
Simple and full automated cookies banner for any website. Complies with the new European regulations with GlowCookies. Activate and deactivate Google Analytics, Facebook Pixel, Hotjar (and coming soon) cookies whenever the user wishes, with just 1 click.

[![Foo](https://cdn.glowmedia.es/upload/uploads/ed1952btn.svg)](https://manucaralmo.github.io/glow-cookies-web/)


## The cookies banner
<img src="https://cdn.glowmedia.es/upload/uploads/90c82dbanner.png" data-canonical-src="https://cdn.glowmedia.es/upload/uploads/90c82dbanner.png" width="375" />

## How it works
You just have to install the code. When the user clicks on accept cookies, the google analytics tracking code, Facebook Pixel and/or Hotjar starts tracking. If the user rejects cookies, the tracking code will not start working.

## How to use
Add this code to your html `<head>` or `<body>` tag.
```html
<script src="https://cdn.jsdelivr.net/gh/manucaralmo/GlowCookies@3.1.6/src/glowCookies.min.js"></script>
<script>
    glowCookies.start('en', { 
        style: 1,
        analytics: 'G-FH87DE17XF', 
        facebookPixel: '990955817632355',
        policyLink: 'https://link-to-your-policy.com'
    });
</script>
```

## Banner styles
Now you can choose between these available banner styles:
- Style `1`, `2` or `3` 

Set style in config object `glowCookies.start('en', { style: 3 })`

## Languages
Now you can choose between these available languages: 
- English (`en`)
- Spanish (`es`)
- German (`de`)
- French (`fr`)
- Norwegian (`no`)
- Swedish (`sv`)
- Danish (`da`)
- Thai (`th`)
- Slovak (`sk`)
- Polish (`pl`)
- Brazilian portugese (`pt_BR`)
- Japanese (`ja`)
- Italian (`it`)
- Bulgarian (`bg`)
- Turkish (`tr`)
- Occitan (`oc`)
- Dutch (`nl`)
- Afrikaans (`af`)
- Malagasy (`mg`)
- Russian (`ru`)
- Chinese Traditional (`zh_TW`)
- Chinese Simple (`zh`)

Set language in the first parameter of `glowCookies.start('en', { })` method.

## Tracking options
These are the parameters that you can modify to add your tracking codes or custom scripts.

| Parameter               | Type   | Values                                                                                                              |
| ----------------------- | ------ | ------------------------------------------------------------------------------------------------------------------- |
| `analytics`             | String | Example: `"G-FH87DE17XF"` (Analytics tracking code)                                                                 |
| `facebookPixel`         | String | Example: `"990955817632355"` (Facebook Pixel code)                                                                  |
| `HotjarTrackingCode`    | String | Example: `"990955817632355"` (Hotjar tracking code)                                                                 |
| `customScript` (Inline) | Object | Example: `[{ type: 'custom', position: 'body', content: 'console.log('custom script');' }]`                         |
| `customScript` (src)    | Object | Example: `[{ type: 'src', position: 'head', content: 'https://www.googletagmanager.com/gtag/js?id=G-FH87DE17XF' }]` |

## Config Banner
These are the parameters that you can modify to change certain banner options

| Parameter        | Type    | Values                                                                           |
| ---------------- | ------- | -------------------------------------------------------------------------------- |
| `policyLink`     | String  | Example: `"https://yourlink.com"` (Your cookies policy link)                     |
| `hideAfterClick` | Boolean | (`true` or `false`) Default: `true` (Hide banner after Accept or Reject cookies) |


## Customize Banner
Now there are certain parameters that you can change to customize your banner.

| Parameter             | Type   | Values                                                                                                 |
| --------------------- | ------ | ------------------------------------------------------------------------------------------------------ |
| `border`              | String | (`"border"` or `"none"`) Default: `"border"`                                                           |
| `position`            | String | (`"left"` or `"right"`) Default: `"left"`                                                              |
| `bannerDescription`   | String | Example: `"We use our own and third-party cookies to personalize content and to analyze web traffic."` |
| `bannerLinkText`      | String | Example: `"Read more about cookies"`                                                                   |
| `bannerBackground`    | String | Example: `"#FAFAFA"` Example: `"lightblue"`                                                            |
| `bannerColor`         | String | Example: `"#000"` Example: `"blue"`                                                                    |
| `bannerHeading`       | String | Example: `"Use of cookies"` Default: None                                                              |
| `acceptBtnText`       | String | Example: `"Accept cookies"`                                                                            |
| `acceptBtnColor`      | String | Example: `"#000"` Example: `"blue"`                                                                    |
| `acceptBtnBackground` | String | Example: `"#fff"` Example: `"white"`                                                                   |
| `rejectBtnText`       | String | Example: `"Reject"`                                                                                    |
| `rejectBtnBackground` | String | Example: `"#000"` Example: `"blue"`                                                                    |
| `rejectBtnColor`      | String | Example: `"#fff"` Example: `"white"`                                                                   |
| `manageColor`         | String | Example: `"#fff"` Example: `"white"`                                                                   |
| `manageBackground`    | String | Example: `"#f2f2f2"` Example: `"blue"`                                                                 |
| `manageText`          | String | Example: `"Manage cookies"`                                                                            |


## Fully customized banner
```html
<script src="https://cdn.jsdelivr.net/gh/manucaralmo/GlowCookies@3.1.6/src/glowCookies.min.js"></script>
<script>
    glowCookies.start('en', { 
        style: 2,
        analytics: 'G-FH87DE17XF', 
        facebookPixel: '990955817632355',
        hideAfterClick: true,
        border: 'none',
        position: 'right',
        policyLink: 'https://google.es',
        customScript: [{ type: 'custom', position: 'body', content: `console.log('my custom js');` }],
        bannerDescription: 'banner desc',
        bannerLinkText: 'banner link text',
        bannerBackground: '#000',
        bannerColor: '#fafafa',
        bannerHeading: '<h2>Cookies</h2>',
        acceptBtnText: 'accept btn text',
        acceptBtnColor: 'green',
        acceptBtnBackground: 'red',
        rejectBtnText: 'reject btn text',
        rejectBtnBackground: 'lightblue',
        rejectBtnColor: 'blue',
        manageColor: 'white',
        manageBackground: 'blue',
        manageText: 'cookies text'
    });
</script>
```

## Contribute
If you know any other language, please help translate.
- Update the `arrLang` of the `LanguageGC` class in glowCookies.js (Add an entry in this fashion.)
- Update language documentation in README.md
- Create a pull request
```
en: {
    'bannerHeading': 'We use cookies',
    'bannerDescription' : 'We use our own and third-party cookies to personalize content and to analyze web traffic.',
    'bannerLinkText' : 'Read more about cookies',
    'acceptBtnText' : 'Accept cookies',
    'rejectBtnText' : 'Reject',
    'manageText' : 'Manage cookies'
}
```
Thanks for your help! 🎉

## Next steps
- [ ] Advanced cookies management
- [ ] Cookie settings

### Request features
info@glowmedia.es
