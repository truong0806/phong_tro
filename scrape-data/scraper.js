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
      //console.log(detailLinks);

      const scraperDetails = async (link) =>
        new Promise(async (resolve, reject) => {
          try {
            let pageDetail = await browser.newPage();
            await pageDetail.goto(link);
            console.log("Loading:" + link + "...");
            await pageDetail.waitForSelector("#main");

            //Scape Data
            //Image
            const detailData = {};
            const images = await pageDetail.$$eval(
              "#left-col > article > div > div > div.swiper-wrapper > div.swiper-slide",
              (els) => {
                image = els.map((el) => {
                  return el.querySelector("img").src;
                });
                return image;
              }
            );
            detailData.images = images;
            //Header
            const header = await pageDetail.$$eval(
              "#left-col > article > header.page-header",
              (el) => {
                return {
                  title: el.querySelector("h1 > a").innerText,
                  star: el.querySelector("h1.page-h1 > span.star").className,
                  class: {
                    content: el.querySelector("p").innerText,
                    classType: el.querySelector("p > a > strong").innerText,
                  },
                  address: el.querySelector("address").innerText,
                  attributes: {
                    price: el.querySelector(
                      "div.post-attributes > .price > span"
                    ).innerText,
                    creage: el.querySelector(
                      "div.post-attributes > .creage > span"
                    ).innerText,
                    published: el.querySelector(
                      "div.post-attributes > .published > span"
                    ).innerText,
                    hashtag: el.querySelector(
                      "div.post-attributes > .hashtag > span"
                    ).innerText,
                  },
                };
              }
            );

            console.log(header);

            await pageDetail.close();
            console.log("Closed browser...");
            resolve();
          } catch (error) {
            console.log("Error in scraperDetails: " + error);
            reject(error);
          }
        });
      for (let link of detailLinks) {
        await scraperDetails(link);
      }

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
