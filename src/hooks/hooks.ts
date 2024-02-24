import { BeforeAll, AfterAll, Before, After, Status } from "@cucumber/cucumber";
import { Browser, BrowserContext } from "@playwright/test";
import { pageFixture } from "./pageFixture";
import { invokeBrowser } from "../helper/browsers/browserManager";
import { getEnv } from "../helper/env/env";


let browser: Browser;
let context: BrowserContext;


BeforeAll(async function () {
  getEnv();
  browser = await invokeBrowser();
})

Before(async function () {
  context = await browser.newContext();
  const page = await browser.newPage();
  pageFixture.page = page;
});

//if you want screenshot after each step
// AfterStep(async function ({ pickle }) {
//   const screesnhot = await pageFixture.page.screenshot({ path: `./test-result/screenshots/${pickle.name}.png`, type: "png" });
//     await this.attach(screesnhot, "image/png");
// })




After(async function ({pickle, result}) {
  console.log(pickle.name +":" +result?.status);
  
  //screenshot
  if (result?.status == Status.FAILED) {
    const screesnhot = await pageFixture.page.screenshot({ path: `./test-results/screenshots/${pickle.name}.png`, type: "png" });
    await this.attach(screesnhot, "image/png");
  }


  await pageFixture.page.close();
  await context.close();
});

AfterAll(async function(){
  await browser.close();
})
