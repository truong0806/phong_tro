const scrapers = require("./scraper");
var fs = require("fs");



const scrapeController = async (browserInstance) => {
  const url = "https://phongtro123.com";
  const indexs = [1, 2, 3, 4];
  try {
    let browser = await browserInstance;
    const categories = await scrapers.scrapeCategory(browser, url);
    const selectedCategories = categories.filter((category, index) =>
      indexs.some((i) => i === index)
    );
    for (let i = 0; i < selectedCategories.length; i++) {
      function removeVietnameseAccents(str) {
        // chuyển các ký tự có dấu thành không dấu
        str = str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        // xóa khoảng trắng ở đầu và cuối chuỗi
        str = str.trim();
        // xóa các khoảng trắng giữa các từ
        str = str.replace(/\s+/g, "");
        // trả về chuỗi đã được bỏ dấu và khoảng trắng
        return str;
      }
      const strWithoutAccentsAndSpaces = await removeVietnameseAccents(selectedCategories[i].category);
      console.log('\x1b[32m', `Lần thứ ${i+1}`)
      if (fs.existsSync(`data_${strWithoutAccentsAndSpaces}.json`)) {
        console.log(`=> File data_${strWithoutAccentsAndSpaces}.json`)
      }
      else {
        let result = await scrapers.scraper(browser, selectedCategories[i].link);
        console.log("Write data to file...");

        fs.writeFile(`data_${strWithoutAccentsAndSpaces}.json`, JSON.stringify(result), function (err) {
          if (err) {
            console.log("Error write data to file" + err);
          }
          console.log("---- Success writing data to file: " + strWithoutAccentsAndSpaces + ".json ----");
        });
      }

    }

    await browser.close()
  }
  catch (error) {
    console.log("Error in controller: " + error);
  }
};
module.exports = scrapeController;
