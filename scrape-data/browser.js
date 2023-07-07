const puppeteer = require("puppeteer");
const startBrowser = async () => {
  let browser;
  try {
    browser = await puppeteer.launch({
    //   executablePath:
    //     "C:\\Program Files (x86)\\Microsoft\\Edge Dev\\Application\\msedge.exe",
      headless: false,
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
      ignoreHTTPSErrors: true,
    });
  } catch (error) {
    console.log("Can't create browser: " + error);
  }
  return browser;
};

module.exports = startBrowser;
