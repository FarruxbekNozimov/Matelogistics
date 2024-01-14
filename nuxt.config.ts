export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: ["@nuxt/ui", "nuxt-icon", "nuxt-swiper", "@nuxt/image", "nuxt-aos"],
	app: {
		head: {
			charset: "utf-8",
			viewport: "width=device-width, initial-scale=1",
			link: [
				{ rel: "logo", href: "@/public/logo.png" },
				{
					rel: "stylesheet",
					href: "https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css",
				},
				{
					rel: "stylesheet",
					href: "https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;600;700;900;1000&display=swap",
				},
			],
		},
	},
	ui: {
		notifications: {
			position: "top-0 bottom-auto",
		},
	},
	colorMode: { preference: "light" },
});
