const sharedConfig = require("./wdio-shared.conf");

exports.config = {
	...sharedConfig,
	...{
		capabilities: [{
			maxInstances: 3,
			browserName: 'firefox',
			"moz:firefoxOptions": {
				args: [
					"--width=1920",
					"--height=1200",
					"--start-maximized"
				],
				windowSize: "1920x1200",
			}
		}]
	}
}