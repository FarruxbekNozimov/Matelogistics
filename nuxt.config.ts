const decodedScript = decodeURIComponent(`
  <script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('ts', new Date());
  gtag('config', 'G-RMWZKQTN4R');
</script>
`);

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
          src: "https://www.googletagmanager.com/gtag/js?id=G-RMWZKQTN4R",
          async: true,
        },
        { innerHTML: decodedScript, type: "text/typescript", charset: "utf-8" },
      ],
    },
  },
  colorMode: { preference: "light" },
});
