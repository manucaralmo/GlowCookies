export const addAnalyticsTrackingScript = (analyticsTrackingCode) => {
  let Analytics = document.createElement('script');
  Analytics.setAttribute('src', `https://www.googletagmanager.com/gtag/js?id=${analyticsTrackingCode}`);
  document.head.appendChild(Analytics);
  let AnalyticsData = document.createElement('script');
  AnalyticsData.text = `window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                            gtag('config', '${analyticsTrackingCode}');`;
  document.head.appendChild(AnalyticsData);
}

export const addFacebookTrackingScript = (facebookTrackingCode) => {
  let FacebookPixelData = document.createElement('script');
      FacebookPixelData.text = `
                                    !function(f,b,e,v,n,t,s)
                                    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                                    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                                    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                                    n.queue=[];t=b.createElement(e);t.async=!0;
                                    t.src=v;s=b.getElementsByTagName(e)[0];
                                    s.parentNode.insertBefore(t,s)}(window, document,'script',
                                    'https://connect.facebook.net/en_US/fbevents.js');
                                    fbq('init', '${facebookTrackingCode}');
                                    fbq('track', 'PageView');
                                `;
      document.head.appendChild(FacebookPixelData);
      let FacebookPixel = document.createElement('noscript');
      FacebookPixel.setAttribute('height', `1`);
      FacebookPixel.setAttribute('width', `1`);
      FacebookPixel.setAttribute('style', `display:none`);
      FacebookPixel.setAttribute('src', `https://www.facebook.com/tr?id=${facebookTrackingCode}&ev=PageView&noscript=1`);
      document.head.appendChild(FacebookPixel);
}

export const addHotjarTrackingScript = (hotjarTrackingCode) => {
  let hotjarTrackingData = document.createElement('script');
  hotjarTrackingData.text = `
                            (function(h,o,t,j,a,r){
                                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                                h._hjSettings={hjid:${hotjarTrackingCode},hjsv:6};
                                a=o.getElementsByTagName('head')[0];
                                r=o.createElement('script');r.async=1;
                                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                                a.appendChild(r);
                            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
                            `;
  document.head.appendChild(hotjarTrackingData);
}