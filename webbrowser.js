const { Builder, Browser, By, Key, until } = require('selenium-webdriver');

let driver;

openGoogle;

async function openGoogle() {
    driver = await new Builder().forBrowser(Browser.CHROME).build();
    await driver.get('https://www.google.com');
    await click('Ich stimme zu');
    await driver.findElement(By.name('q')).sendKeys('Developer Akademie', Key.RETURN)
}

async function click(text) {
    await driver.findElement(By.xpath("//*[text()='" + text + "']")).click();
}