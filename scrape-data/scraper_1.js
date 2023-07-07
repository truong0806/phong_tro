const scraper = (browser) =>
  new Promise(async (resolve, reject) => {
    try {
      const url = 'https://phongtro123.com/blog.html'
      let newPage = await browser.newPage()
      console.log('Opening browser... ')
      await newPage.goto(url)
      console.log('Opening url: ' + url)
      await newPage.waitForSelector('#main')
      console.log('Loading complete website...')
      const scrapeData = {}
      const detailLinks = await newPage.$$eval(
        '#left-col > section > ul > article:nth-child(1)',
        (elements) => {
          detailLinks = elements.map((element) => {
            return element.querySelectorAll(
              '#left-col > section > ul > article:nth-child(1) > a',
            ).href
          })
          return detailLinks
        },
      )
      for (let link of detailLinks) {
        console.log(link)
      }
    } catch (error) {
      console.log('Error in scaper.js: ' + error)
      reject(error)
    }
  })
module.exports = {
  scraper,
}
