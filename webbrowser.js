const { Builder, Browser, By, Key, until } = require('selenium-webdriver');

openGoogle;

async function openGoogle() {
    let driver = await new Builder().forBrowser(Browser.CHROME).build();
    await driver.get('https://www.google.com');
}