import { Given, When, Then } from "@cucumber/cucumber";
import { chromium, Browser, Page, Locator } from 'playwright';
const { UiUrl, xpathofInputfield, Allplaceholder } = require("../config/credential");

let browser: Browser;
let page: Page;

Given('the user is on the feedback form page', async function () {
    browser = await chromium.launch({ headless: false });
    page = await browser.newPage();
    await page.goto(UiUrl.feedbackform, { timeout: 5000 });
    console.log("Welcome to Feedback Form Page");
});


When('The user will read the descript of beedback form', async function () {

    const Descriptionfeedbak: Locator = page.locator(xpathofInputfield.feedbackformdesc)

    const DescriptionfeedbaExit = await Descriptionfeedbak.isEnabled();
    const DescriptionfeedbaText = await Descriptionfeedbak.allTextContents();

    console.log(DescriptionfeedbaExit);
    console.log(DescriptionfeedbaText);
});

Then('The user will fill the name in the name input field', async function () {
    console.log('Attempting to interact with input field...');
    const nameInputField: Locator = page.getByPlaceholder(Allplaceholder.nameplceholder);

    await nameInputField.click();
    await nameInputField.fill('mansi');
});


Then('The user will fill the email in the email input field', async function () {
    console.log('Attempting to interact with input field...');

    // Define the locator with the `exact` option (if needed)
    const emailInputField: Locator = page.getByPlaceholder(Allplaceholder.emailInputField);

    // Click the input field (no `exact` option needed here)
    await emailInputField.click();
    
    // Fill the email field with the specified email
    await emailInputField.fill('mansi@gmail.com');
});

Then('The user will fill the Category in the Category input field', async function () {
   
    console.log('Attempting to interact with input field...');

    // Define the locator with the `exact` option (if needed)
    const categoryselector: Locator = page.getByPlaceholder(Allplaceholder.category);

    // Click the input field (no `exact` option needed here)
    await categoryselector.click();
    
    // Fill the email field with the specified email
    await categoryselector.fill('mansi@gmail.com');

  });