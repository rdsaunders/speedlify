module.exports = {
	name: "Scottish Unis", // optional, falls back to object key
	description: "Scottish University Sites",
	// skip if localhost
	options: {
		frequency: 60 * 23, // 23 hours
		// Use "run" if the sites don’t share assets on the same origin
		//           and we can reset chrome with each run instead of
		//           each site in every run (it’s faster)
		// Use "site" if sites are all on the same origin and share assets.
		freshChrome: "site"
	},
	urls: [
		"https://www.abertay.ac.uk/",
		"https://www.napier.ac.uk/",
		"https://www.gcu.ac.uk/",
		"https://www.gsa.ac.uk/",
		"http://www.hw.ac.uk/",
		"https://www.qmu.ac.uk/",
		"https://www.rgu.ac.uk/",
		"https://www.rcs.ac.uk/",
		"http://www.abdn.ac.uk/",
		"http://www.dundee.ac.uk/",
		"http://www.ed.ac.uk/",
		"http://www.gla.ac.uk/",
		"https://www.st-andrews.ac.uk/",
		"http://www.stir.ac.uk/",
		"http://www.strath.ac.uk/",
		"https://www.uhi.ac.uk/en/",
		"https://www.uws.ac.uk/"
	]
};
