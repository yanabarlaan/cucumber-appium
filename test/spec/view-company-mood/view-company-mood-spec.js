//const { Given, When, Then } = require('@cucumber/cucumber');
import { Given, When, Then } from '@cucumber/cucumber';

Given('user is on mood tracker feed', async () => {
    await browser.userLogin();
});

// Scenario: View Company Mood Feature
When('user click {string} button', async (btnMood) => {
  await $('~ '+ btnMood +'').click();
});

When('user clicks "follow" icon', async () => {
  await $('//android.view.View[@index="5"]').click();
});

Then('{string} screen should appear', async (text) => {
  await expect($('~'+ text +'')).toExist();
});

// Scenario: User views followed member first in the list
Then('followed member should be first in the list to show', async () => {
  await expect($('//android.widget.Button[@content-desc="￼ Following"]')).toExist();
});

// Scenario: User follows other member
When('user clicks "Follow" button in members name', async () => {
  await $('(//android.widget.Button[@content-desc="Follow"])[2]').click();
});

Then('{string} should be displayed', async (btn) => {
  await expect($('(//android.widget.Button[@content-desc="￼ '+ btn +'"])').toEqual(2));
});

// Scenario: User unfollows other member
When('user clicked following button', async () => {
  await $('(//android.widget.Button[@content-desc="￼ Following"])').click();
  // await $('(//*[@content-desc="Following"])[2]').click();
  //await $('//*[contains(@text,"Enter your email")]').click();
  //await $('(//*[contains(@content-desc,"Following")])[2]').click();
});

Then('user should be able to unfollow people', async () => {
  await expect($('(//android.widget.Button[@content-desc="￼ Following"])').toEqual(1));
});

//  Scenario: User search people
When('user enters the name he wants to follow in search bar', async () => {
  await $('//android.widget.ImageView[@text="Search"]').click();
  await $('//android.widget.ImageView[@text="Search"]').addValue("Sadie");

  //await driver.back();
});

Then('the person should appear appear below', async () => {
  await expect($('//android.view.View[@content-desc="Sadie Sink Backend"]')).toHaveTextContaining("Sadie Sink");
});