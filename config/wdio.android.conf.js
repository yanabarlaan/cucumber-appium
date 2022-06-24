const { config } = require("./wdio.shared.conf");
const path = require("path");

//
// ====================
// Runner Configuration
// ====================
//
config.port = 4723;

//
// ============
// Specs
// ============
config.specs = ["./test/spec/login*.feature"];

//
// ============
// Capabilities
// ============
config.capabilities = [
  {
    platformName: "Android",
    "appium:platformVersion": "12",
    "appium:deviceName": "Pixel 5.1",
    "appium:automationName": "UIAutomator2",
    "appium:app": path.join(process.cwd(), "app/android/app-dev-release.apk"),
    "appium:autoGrantPermissions": true,
  },
];

//
// Test runner services
// Services take over a specific job you don't want to take care of. They enhance
// your test setup with almost no effort. Unlike plugins, they don't add new
// commands. Instead, they hook themselves up into the test process.
(config.services = [
  [
    "appium",
    {
      args: {
        address: "localhost",
        port: 4723,
      },
      logPath: "./",
    },
  ],
]),
  (exports.config = config);
