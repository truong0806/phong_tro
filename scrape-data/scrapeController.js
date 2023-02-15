const scrapers = require("./scraper");

const scrapeController = async (browserInstance) => {
  const url = "https://phongtro123.com";
  try {
    let browser = await browserInstance;
    //let categories = scrapers.scrapeCategory(browser, url);
    let city = scrapers.fillter(browser, url);
  } catch (error) {
    console.log("Error in controller: " + error);
  }
};

module.exports = scrapeController;
