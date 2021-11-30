"use strict";

const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  console.log("New page loaded.");

  await page.setCookie({
    name: "session",
    value:
      process.env.AOC_TOKEN,
    domain: "adventofcode.com",
  });
  await page.setViewport({deviceScaleFactor: 2, width: 2560, height: 1440});
  console.log("Cookie set!");
  await page.goto(
    "https://adventofcode.com/2021/leaderboard/private/view/84292",
  );
  console.log("Page gone to");
  await page.addStyleTag({path: "./style.css"});
  let article = await page.$("article");
  await article.screenshot({path: "./output/full.png", omitBackground: true});
  console.log("Screenshot captured");
  await browser.close();
})();
