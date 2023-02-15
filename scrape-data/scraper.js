var fs = require("fs");

const scrapeCategory = (browser, url) =>
  new Promise(async (resolve, reject) => {
    try {
      let page = await browser.newPage();
      console.log("Opening browser... ");
      await page.goto(url);
      console.log("Opening: " + url);
      await page.waitForSelector("#webpage");
      console.log("Loading complete website...");

      const dataCategories = await page.$$eval(
        "#navbar-menu > ul > li ",
        (elements) => {
          dataCategories = elements.map((Element) => {
            return {
              category: Element.querySelector("a").innerText,
              link: Element.querySelector("a").getAttribute("href"),
            };
          });
          return dataCategories;
        }
      );
      console.log("Write categories to file...");
      const data = JSON.stringify(dataCategories);
      await page.close();
      fs.writeFile("dataCategoryies.json", data, function (err) {
        if (err) {
          console.log(err);
        }
      });
      resolve(page);
    } catch (error) {
      console.log("Error in scaper.js: " + error);
      reject(error);
    }
  });
const fillter = (browser, url) =>
  new Promise(async (resolve, reject) => {
    try {
      let page = await browser.newPage();
      console.log("Opening browser... ");
      await page.goto(url);
      console.log("Opening: " + url);
      await page.waitForSelector("#webpage");
      console.log("Loading complete website...");

      const dataCity = await page.$$eval(
        ".filter-popup > div filter-popup-content > div > ul  ",
        (elements) => {
          dataCity = elements.map((Element) => {
            return {
              city: Element.querySelector("li").innerText,
            };
          });
          return dataCity;
        }
      );
      console.log("Write city to file...");
      const data = JSON.stringify(dataCity);
      await page.close();
      fs.writeFile("city.json", data, function (err) {
        if (err) {
          console.log(err);
        }
      });
      resolve(page);
    } catch (error) {
      console.log("Error in scaper.js: " + error);
      reject(error);
    }
  });
module.exports = {
  scrapeCategory,
  fillter,
};
