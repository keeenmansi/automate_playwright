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
   const Descriptionfeedback: Locator = page.locator(xpathofInputfield.feedbackformdesc);
   const DescriptionfeedbackExists = await Descriptionfeedback.isEnabled();
   const DescriptionfeedbackText = await Descriptionfeedback.allTextContents();
   console.log(DescriptionfeedbackExists);
   console.log(DescriptionfeedbackText);
});


Then('The user will fill the name in the name input field', async function () {
   const nameInputField: Locator = page.getByPlaceholder(Allplaceholder.nameplceholder);
   await nameInputField.click();
   await nameInputField.fill('mansi');
});


Then('The user will fill the email in the email input field', async function () {
   const emailInputField: Locator = page.getByPlaceholder(Allplaceholder.emailInputField);
   await emailInputField.click();
   await emailInputField.fill('mansi@gmail.com');
});


Then('The user will fill the Category in the Category input field', async function () {
   const categorySelector: Locator = page.getByLabel(Allplaceholder.categoryselector);
   await categorySelector.selectOption({ label: 'slow loading' });
});


Then('The user will fill the Captcha code in the Captcha code input field', async function () {
   const captchaInputField: Locator = page.getByPlaceholder(Allplaceholder.captchaCode);
   await captchaInputField.click();
   await captchaInputField.fill('e6d516');  // Replace 'e6d516' with the actual Captcha code
});


Then('The user will submit the feedback form', async function () {
   const submitButton: Locator = page.getByLabel(Allplaceholder.Submitbutton);
   await submitButton.click();
});


Then('User will see the successful Popup on the top bar', async function () {
   page.once('dialog', async dialog => {
       console.log(`Dialog message: ${dialog.message()}`);
       await dialog.dismiss();
   });


   // Verify that the success popup appears
   const successPopup: Locator = page.locator('xpath=//div[contains(@class, "success-popup-class")]');
   const isVisible = await successPopup.isVisible();
   console.log(`Success Popup Visible: ${isVisible}`);
   if (!isVisible) {
       throw new Error("Success Popup not visible");
   }
});



