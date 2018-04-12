const puppeteer = require('puppeteer');

describe('on page load', () => {
	test('sign in button is displayed', async () => {
		const browser = await puppeteer.launch({headless: false});
  		const page = await browser.newPage();
  		await page.goto('https://gmail.com');
  		const title = await page.title();
  		const heading = await page.$eval('#headingText', e =>
  			e.innerHTML);
  		expect(title).toBe('Gmail');
  		expect(heading).toBe('Sign in');
  		await browser.close();
	})
})