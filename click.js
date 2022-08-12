const { chromium } = require('playwright');

(async () => {

    const browser = await chromium.launch({ headless: false, slowMo: 600 });
    const page = await browser.newPage();
    await page.goto('https://www.apronus.com/music/lessons/unit01.htm');
    await page.click('#t1 tr:nth-child(2) .soundbutton.noselect:nth-child(1):has-text("C")')
    await page.click('#t1 tr:nth-child(2) .soundbutton.noselect:nth-child(1):has-text("C")')
    await page.click('#t1 tr:nth-child(2) .soundbutton.noselect:nth-child(1):has-text("D")')
    await page.click('#t1 tr:nth-child(2) .soundbutton.noselect:nth-child(1):has-text("C")')
    await page.click('#t1 tr:nth-child(2) .soundbutton.noselect:nth-child(1):has-text("F")')
    await page.click('#t1 tr:nth-child(2) .soundbutton.noselect:nth-child(1):has-text("E")')
    await page.click('#t1 tr:nth-child(2) .soundbutton.noselect:nth-child(1):has-text("C")')
    await page.click('#t1 tr:nth-child(2) .soundbutton.noselect:nth-child(1):has-text("C")')
    await page.click('#t1 tr:nth-child(2) .soundbutton.noselect:nth-child(1):has-text("D")')
    await page.click('#t1 tr:nth-child(2) .soundbutton.noselect:nth-child(1):has-text("C")')
    await page.click('#t1 tr:nth-child(2) .soundbutton.noselect:nth-child(1):has-text("G")')
    await page.click('#t1 tr:nth-child(2) .soundbutton.noselect:nth-child(1):has-text("F")')
    await page.click('#t1 tr:nth-child(2) .soundbutton.noselect:nth-child(1):has-text("C")')
    await page.click('#t1 tr:nth-child(2) .soundbutton.noselect:nth-child(1):has-text("C")')
    await page.click('#t1 tr:nth-child(2) .soundbutton.noselect:nth-child(1):has-text("C6")')
    await page.click('#t1 tr:nth-child(2) .soundbutton.noselect:nth-child(1):has-text("A")')
    await page.click('#t1 tr:nth-child(2) .soundbutton.noselect:nth-child(1):has-text("F")')
    await page.click('#t1 tr:nth-child(2) .soundbutton.noselect:nth-child(1):has-text("E")')
    await page.click('#t1 tr:nth-child(2) .soundbutton.noselect:nth-child(1):has-text("D")')
    await page.click('#t1 tr:nth-child(2) .soundbutton.noselect:nth-child(1):has-text("A#5")')
    await page.click('#t1 tr:nth-child(2) .soundbutton.noselect:nth-child(1):has-text("A#5")')
    await page.click('#t1 tr:nth-child(2) .soundbutton.noselect:nth-child(1):has-text("A5")')
    await page.click('#t1 tr:nth-child(2) .soundbutton.noselect:nth-child(1):has-text("F5")')
    await page.click('#t1 tr:nth-child(2) .soundbutton.noselect:nth-child(1):has-text("G5")')
    await page.click('#t1 tr:nth-child(2) .soundbutton.noselect:nth-child(1):has-text("F5")')

    await browser.close();

})();