const {chromium} = require('playwright');
const faker = require ('faker');

(async() =>{
    const browser = await chromium.launch({headless: false, slowMe: 3000})
        const page = await browser.newPage();
        await page.goto('https://the-internet.herokuapp.com/forgot_password');
        const email = await page.$('#email')
        await email.type(faker.internet.email())
        await page.screenshot({
            path: 'screenshots/screenshot-chromium.png',
        });
        await browser.close();
        console.log('success: chromium');
    })
();