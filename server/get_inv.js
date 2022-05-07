const puppeteer = require("puppeteer");
const fs = require("fs-extra");
require("dotenv").config();
const pe = process.env

async function get_inv() {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  
  try {
    await page.goto("https://www.jrsautosaleswa.com/view-inventory");
    getInventory = await page.evaluate(() => {
      vSpec = document.querySelectorAll("div.vehicle");
      stocks = document.querySelectorAll("span.stocknumber");
      vins = document.querySelectorAll("span.vin");
      vUrl = document.querySelectorAll('a.accent-color1')
      prices = document.querySelectorAll(
        "div.col-md-12.inventory-price-column"
      );
      valArr = [];
      for (var i = 0; i < vins.length; i++) {
        valArr[i] = {
          title: vUrl[i].textContent,
          stkNum: stocks[i].textContent,    
          year: vSpec[i].dataset.displayyear,
          make: vSpec[i].dataset.displaymake,
          model: vSpec[i].dataset.displaymodel,
          trim: vSpec[i].dataset.displaytrim,
          miles: vSpec[i].dataset.displaymileage,
          intcolor: vSpec[i].dataset.displayintcolor,
          extcolor: vSpec[i].dataset.displayextcolor,
          list: prices[i].innerText.split('\n')[1],
          sale: prices[i].innerText.split('\n')[3],
          drive: vSpec[i].dataset.displaydrivetrain,
          fuel: vSpec[i].dataset.displayfuel,
          trans: vSpec[i].dataset.displaytransmission,
          vin: vins[i].textContent, 
          vId: vSpec[i].dataset.id,
          engine: vSpec[i].dataset.displayengine,
          link: vUrl[i].href,
          photo: vSpec[i].dataset.displayphoto.replace('120','800'),
          carfax: 'https://www.carfax.com/VehicleHistory/p/Report.cfx?partner=DVW_1&vin=' + vins[i].textContent
        }
      }
      return valArr;
    });
    const head = "const vehicles ="
    const foot = "export default vehicles"
    fs.writeFileSync("./client/src/vehicles.js", head + JSON.stringify(getInventory, "\n", 3) + "\n" + foot);
    console.log("File is created! There are" , getInventory.length + ' vehicles online');
  } catch (err) {
    console.log("faied to write", err);
  }

  await browser.close();
}get_inv()

