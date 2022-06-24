const { Given, When, Then } = require('@cucumber/cucumber');
//const { Chance } = require('chance');
import Chance from 'chance';

const chance = new Chance();
const ownerEmail = "sqa.hov@gmail.com";
const chanceEmail = chance.email({ domain: 'hov-qa.com' });
const randomPassword = chance.word({ syllables: 1 });
const password = "password";

//import { Given, When, Then } from '@cucumber/cucumber';

// const LoginPage = require('../pageobjects/login.page');
// const SecurePage = require('../pageobjects/secure.page');

// const pages = {
//     login: LoginPage
// }

// Given('I am on the (\w+) page', async (page) => {
//     await pages[page].open()
// });

// When(/^I login with (\w+) and (.+)$/, async (username, password) => {
//     await LoginPage.login(username, password)
// });

// Then(/^I should see a flash message saying (.*)$/, async (message) => {
//     await expect(SecurePage.flashAlert).toBeExisting();
//     await expect(SecurePage.flashAlert).toHaveTextContaining(message);
// });

// Scenario: User redirect to identifi login page
Given(/^user is in navigate to welcome page$/, async () => {
  await driver.pause(5000);
  await $('//*[@content-desc="Next"]').click();
  await $('//*[@content-desc="Next"]').click();
  await $('//*[@content-desc="Next"]').click();
  await $('//*[@content-desc="Next"]').click();
  await $('//*[@content-desc="Next"]').click();
  await $('//*[@content-desc="Next"]').click();
    //await browser.userLogin();
});

When('user click Get Started button', async () => {
  await $('//*[@content-desc="Get Started"]').click();
});

Then('user should be redirect to login page', async () => {
    //await expect($('//*[@content-desc="Identifi Beta"]')).toHaveTextContaining('Identifi Beta');
    await expect($('~Identifi Beta')).toBeDisplayed();
});

// Scenario: User logs in with unregistered email
When('user enter unregistered email', async () => {
  await $('//*[@text="Enter your email"]').click();
  await $('//*[@text="Enter your email"]').addValue(chanceEmail);
});

When('user click {string} button', async (btnLogin) => {
  await $('//*[@content-desc="'+btnLogin+'"]').click();
});

Then('user should see {string} message', async (err) => {
  await expect($('//*[@content-desc="'+ err +'"]')).toBeDisplayed();
});

//Scenario: User logs in with registered email
When(`enter registered email`, async () => {
  await $('//*[contains(@text,"Enter your email")]').clearValue();
  await $('//*[contains(@text,"Enter your email")]').click();
  await $('//*[contains(@text,"Enter your email")]').addValue(ownerEmail);
});

Then('user should see password field', async () => {
  await expect($('//*[@content-desc="Password"]')).toBeDisplayed();
});

// Scenario: User logs in with invalid password
When('user input invalid password', async () => {
  await $('//*[@password="true"]').click();
  await $('//*[@password="true"]').addValue(randomPassword);
});

// Scenario: User logs in with valid password
When('user input valid password', async () => {
  await $('//*[@password="true"]').clearValue();
  await $('//*[@password="true"]').click();
  await $('//*[@password="true"]').addValue(password);
});

Then('user should redirect to dashboard page', async () => {
  await expect($('~View company mood')).toBeDisplayed();
});
