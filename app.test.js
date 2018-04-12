const puppeteer = require('puppeteer');

let browser, page;

beforeAll(async () => {
	browser = await puppeteer.launch({headless: false});
  	page = await browser.newPage();
});

describe('on page load', () => {
	test('page title is correct', async () => {
  		await page.goto('https://gmail.com');
  		const title = await page.title();
  		const heading = await page.$eval('#headingText', e =>
  			e.innerHTML);
  		expect(title).toBe('Gmail');
  		expect(heading).toBe('Sign in');		
	}, 5000);
	test('login elements load correctly', async () => {;
  		const emailTxt = await page.$eval('#identifierId', el => el ? true : false);
  		const nextBtn = await page.$eval('span.RveJvd.snByac', el => el ? true : false);
  		expect(emailTxt).toBe(true);
  		expect(nextBtn).toBe(true);		
	});
});

afterAll(async () => {
	browser.close();
});