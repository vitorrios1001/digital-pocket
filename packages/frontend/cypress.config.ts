const { defineConfig } = require("cypress");

module.exports = defineConfig({
	e2e: {
		watchForFileChanges: false,
		baseUrl: "http://localhost:5173/",
		setupNodeEvents(on, config) {},
	},

	component: {
		watchForFileChanges: false,
		devServer: {
			framework: "react",
			bundler: "vite",
		},
	},
});
