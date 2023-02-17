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

      const scraperDetail = async (link) =>
        new Promise(async (resolve, reject) => {
          try {
            let pageDetail = await browser.newPage();
            console.log("Opening browser get link detail... ");
            await pageDetail.goto(link);
            console.log("Opening link... " + link);
            await pageDetail.waitForSelector("#main");
            console.log("Loading complete website...");

            //Scape Data
            //Image
            const detailData = {};
            const images = await pageDetail.$$eval(
              "#left-col > article > div.post-images > div > div.swiper-wrapper > div.swiper-slide",
              (els) => {
                images = els.map((el) => {
                  return el.querySelector("img").getAttribute("src");
                });
                return images;
              }
            );

            //console.log(detailData);
            detailData.images = images;

            //Header
            const header = await pageDetail.$eval(
              "header.page-header",
              (el) => {
                return {
                  title: el.querySelector("h1 > a").innerText,
                  star: el
                    .querySelector("h1.page-h1 > span.star")
                    .className.slice(-1),
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
                      "div.post-attributes > .acreage > span"
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
            //post main content
            const postMainContentHeader = await pageDetail.$eval(
              "#left-col > article.the-post > section.post-main-content",
              (el) => el.querySelector("div.section-header > h2").innerText
            );
            const postmainContent = await pageDetail.$$eval(
              "#left-col > article.the-post >section.post-main-content > div.section-content > p",
              (els) => els.map((el) => el.innerText)
            );
            //console.log(header);
            detailData.mainContent = {
              header: postMainContentHeader,
              content: postmainContent,
            };
            //Đặc điểm tin đăng
            const postOverviewHeader = await pageDetail.$eval(
              "#left-col > article.the-post > section.post-overview",
              (el) => el.querySelector("div.section-header > h3").innerText
            );
            const postOverviewContentValue = await pageDetail.$$eval(
              "#left-col > article.the-post >section.post-overview > div.section-content > table > tbody > tr ",
              (els) => els.map((el) => ({
                name: el.querySelector("td:first-child").innerText,
                value: el.querySelector("td:last-child").innerText
              }))
            );
            detailData.overview = {
              header: postOverviewHeader,
              content: postOverviewContentValue,
            };

            //Thông tin liên hệ
            const contactHeader = await pageDetail.$eval(
              "#left-col > article.the-post > section.post-contact",
              (el) => el.querySelector("div.section-header > h3").innerText
            );
            const contactContentValue = await pageDetail.$$eval(
              "#left-col > article.the-post >section.post-contact > div.section-content > table > tbody > tr ",
              (els) => els.map((el) => ({
                name: el.querySelector("td:first-child").innerText,
                value: el.querySelector("td:last-child").innerText
              }))
            );
            detailData.contact = {
              header: contactHeader,
              content: contactContentValue,
            };
            console.log(detailData.overview);

            await pageDetail.close();
            resolve();
          } catch (error) {
            console.log("Error in scraperDetails: " + error);
            reject(error);
          }
        });
      linkLinkHaveVideo = [
        "https://phongtro123.com/chung-cu-mini-moi-ngo-245-dinh-cong-pr616067.html",
        "https://phongtro123.com/phong-tro-gia-re-quan-3-ngay-cau-le-van-sy-ngay-cho-pr615952.html",
        "https://phongtro123.com/cho-thue-nha-tro-cao-cap-nhat-quang-0888992345-pr310132.html",
        "https://phongtro123.com/phong-thue-rieng-chung-cu-era-town-quan-7-pr609404.html",
        "https://phongtro123.com/phong-cho-thue-du-moi-tien-nghi-gio-giac-tu-do-ngay-cong-vien-hoang-van-thu-quan-tan-binh-pr314706.html",
      ];
      const details = []
      for (let link of detailLinks.filter(
        (value) => !linkLinkHaveVideo.includes(value)
      )) {
        const detail = await scraperDetail(link);
        details.push(detail)
      }
      scrapeData.body = details
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
