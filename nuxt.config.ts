export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: ["@nuxtjs/tailwindcss", "nuxt-icon", "nuxt-swiper"],
	app: {
		head: {
			link: [
				{
					rel: "stylesheet",
					href: "https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css",
				},
				{
					rel: "stylesheet",
					href: "https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;600;700&display=swap",
				},
			],
		},
	},
});
