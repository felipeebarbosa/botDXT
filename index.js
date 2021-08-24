const puppeteer = require('puppeteer');
require('dotenv').config()
setInterval(() => {
    (async () => {
        const browser = await puppeteer.launch({
            headless : false,
        });
        const page = await browser.newPage();
        await page.goto('https://cuidandojuntos.duratex.com.br/dashboard');
      
        await page.type('#email', process.env.EMAIL)
        await page.type('#password',  process.env.PASSWORD)
        await page.click('.login-btn')
      setTimeout( async function(){
          await page.evaluate(() => console.log(`Não foi marcado`));
          await page.click('.radio-list-item-nao')[0]
          setTimeout( async function(){
            await page.evaluate(() => console.log(`Requeste enviada`));
            await page.click('.register-btn')[0]
            await page.screenshot({ path: 'example.png' });
            setTimeout(async() => {
                await browser.close(); 
            }, 1000);
           
            
          }, 1000)

      }, 4000)

      
      })();
      
}, 84600000);
