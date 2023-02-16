const scrapers = require("./scraper");

const scrapeController = async (browserInstance) => {
  const url = "https://phongtro123.com";
  const indexs = [1, 2, 3, 4];
  try {
    let browser = await browserInstance;
    const categories = await scrapers.scrapeCategory(browser, url);
    const scrapeData = {};
    const selectedCategories = categories.filter((category, index) =>
      indexs.some((i) => i === index)
    );
    await scrapers.scraper(browser, selectedCategories[0].link);
  } catch (error) {
    console.log("Error in controller: " + error);
  }
};

module.exports = scrapeController;
