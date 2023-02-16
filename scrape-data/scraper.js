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
      //console.log("Write categories to file...");
      // const data = JSON.stringify(dataCategories);
      // await page.close();
      // fs.writeFile("dataCategoryies.json", data, function (err) {
      //   if (err) {
      //     console.log(err);
      //   }
      // });
      resolve(dataCategories);
    } catch (error) {
      console.log("Error in scaper.js: " + error);
      reject(error);
    }
  });

const scraper = (browser, url) =>
  new Promise(async (resolve, reject) => {
    try {
      let newPage = await browser.newPage();
      console.log("Opening browser... ");
      await newPage.goto(url);
      console.log("Opening url: " + url);
      await newPage.waitForSelector("#main");
      console.log("Loading complete website...");

      const scrapeData = {};

      //Header Data
      const headerData = await newPage.$eval("header", (element) => {
        return {
          title: element.querySelector("h1").innerText,
          discription: element.querySelector("p").innerText,
        };
      });
      scrapeData.header = headerData;
      //list link items Data
      const detailLinks = await newPage.$$eval(
        "#left-col > section.section-post-listing > ul > li ",
        (elements) => {
          detailLinks = elements.map((element) => {
            return element.querySelector(".post-meta > h3 > a").href;
          });
          return detailLinks;
        }
      );
      console.log(detailLinks);

      await browser.close();
      console.log("Closed browser...");
      resolve();
    } catch (error) {
      console.log("Error in scaper.js: " + error);
      reject(error);
    }
  });
module.exports = {
  scrapeCategory,
  scraper,
};
