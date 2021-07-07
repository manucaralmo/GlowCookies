export default class LanguagesGC {
  constructor(code) {
    this.init()
    let lang = this.arrLang[code] || this.arrLang['en']
    this.bannerHeading = lang['bannerHeading']
    this.bannerDescription = lang['bannerDescription']
    this.bannerLinkText = lang['bannerLinkText']
    this.acceptBtnText = lang['acceptBtnText']
    this.rejectBtnText = lang['rejectBtnText']
    this.manageText = lang['manageText']
  }

  init() {
    this.arrLang = {
      bg: {
        'bannerHeading': 'Ние използваме бисквитки',
        'bannerDescription': 'Използваме наши и бисквитки на трети страни, за да запазим Вашите предпочитания и да събираме аналитични данни.',
        'bannerLinkText': 'Прочетете повече за бисквитките',
        'acceptBtnText': 'Приеми бисквитките',
        'rejectBtnText': 'Откажи',
        'manageText': 'Настрой бисквитките'
      },
      de: {
        'bannerHeading': 'Verwendung von Cookies',
        'bannerDescription': 'Wir nutzen Eigene und Cookies Dritter um Inhalte zu personalisieren und Surfverhalten zu analysieren.',
        'bannerLinkText': 'Mehr über Cookies',
        'acceptBtnText': 'Cookies akzeptieren',
        'rejectBtnText': 'Ablehnen',
        'manageText': 'Cookies verwalten'
      },
      en: {
        'bannerHeading': 'We use cookies',
        'bannerDescription': 'We use our own and third-party cookies to personalize content and to analyze web traffic.',
        'bannerLinkText': 'Read more about cookies',
        'acceptBtnText': 'Accept cookies',
        'rejectBtnText': 'Reject',
        'manageText': 'Manage cookies'
      },
      es: {
        'bannerHeading': 'Uso de cookies',
        'bannerDescription': 'Utilizamos cookies propias y de terceros para personalizar el contenido y para analizar el tráfico de la web.',
        'bannerLinkText': 'Ver más sobre las cookies',
        'acceptBtnText': 'Aceptar cookies',
        'acceptAllBtnText': 'Aceptar todas',
        'rejectBtnText': 'Rechazar',
        'rejectAllBtnText': 'Rechazar todas',
        'manageText': 'Cookies'
      },
      fr: {
        'bannerHeading': 'Nous utilisons des cookies',
        'bannerDescription': 'Nous utilisons nos propres cookies et ceux de tiers pour adapter le contenu et analyser le trafic web.',
        'bannerLinkText': 'En savoir plus sur les cookies',
        'acceptBtnText': 'Accepter les cookies',
        'rejectBtnText': 'Refuser',
        'manageText': 'Paramétrez les cookies'
      },
      nl: {
        'bannerHeading': 'We gebruiken cookies',
        'bannerDescription': 'We gebruiken onze en third-party cookies om content te personaliseren en web traffic te analyseren.',
        'bannerLinkText': 'Lees meer over cookies',
        'acceptBtnText': 'Accepteren cookies',
        'rejectBtnText': 'Wijgeren',
        'manageText': 'Cookies beheren'
      },
      pt_BR: {
        'bannerHeading': 'Uso de cookies',
        'bannerDescription': 'Usamos cookies próprios e de terceiros para personalizar o conteúdo e analisar o tráfego da web.',
        'bannerLinkText': 'Leia mais sobre os cookies',
        'acceptBtnText': 'Aceitar cookies',
        'rejectBtnText': 'Rejeitar',
        'manageText': 'Gerenciar cookies'
      },
      sk: {
        'bannerHeading': 'Používame cookies',
        'bannerDescription': 'Na prispôsobenie obsahu a analýzu webovej stránky používame vlastné cookies a cookies tretích strán.',
        'bannerLinkText': 'Čo sú cookies?',
        'acceptBtnText': 'Povoliť cookies',
        'rejectBtnText': 'Nepovoliť',
        'manageText': 'Spravovať cookies'
      },
      th: {
        'bannerHeading': 'Cookies',
        'bannerDescription': 'พวกเราใช้คุกกี้บุคคลที่สาม เพื่อปรับแต่งเนื้อหาและวิเคราะห์การเข้าชมเว็บ',
        'bannerLinkText': 'อ่านเพิ่มเติมเกี่ยวกับคุกกี้',
        'acceptBtnText': 'ยอมรับคุกกี้',
        'rejectBtnText': 'ปฏิเสธคุกกี้',
        'manageText': 'Cookies'
      },
      tr: {
        'bannerHeading': 'Çerez kullanımı',
        'bannerDescription': 'İçeriği kişiselleştirmek ve web trafiğini analiz etmek için kendi ve üçüncü taraf çerezlerimizi kullanıyoruz.',
        'bannerLinkText': 'Çerezler hakkında daha fazlasını okuyun',
        'acceptBtnText': 'Çerezleri kabul et',
        'rejectBtnText': 'Reddet',
        'manageText': 'Çerezleri yönet'
      }
    }
  }
}