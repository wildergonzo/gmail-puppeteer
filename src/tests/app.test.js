const timeout = 5000

describe('on page load', () => {
  let page;
  beforeAll(async () => {
    page = await global.__BROWSER__.newPage()
    await page.goto('https://gmail.com');
  }, timeout);

  afterAll(async () => {
     await page.close();
  });

  test('page title is correct', async () => {
    let title = await page.title();
    expect(title).toContain('Gmail');
  });

  test('login element load correctly', async () => {;
      const emailTxt = await page.$eval('#identifierId', el => el ? true : false);
      expect(emailTxt).toBe(true);  
  });

}, timeout);