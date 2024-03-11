export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxt/ui",
    "nuxt-icon",
    "nuxt-swiper",
    "@nuxt/image",
    "nuxt-aos",
    "nuxt-marquee",
  ],
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      link: [
        { rel: "icon", type: "image/png", href: "/img/logo-top.png" },
        {
          rel: "stylesheet",
          href: "https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;600;700;900;1000&display=swap",
        },
      ],
      script: [
        {
          src: "https://www.googletagmanager.com/ns.html?id=GTM-WSFJR2KK",
          async: true,
        },
        {
          hid: "gtmHead",
          innerHTML: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-WSFJR2KK');
      `,
        },
      ],
    },
  },
  colorMode: { preference: "light" },
});
