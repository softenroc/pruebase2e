const { Given, When, Then } = require("@cucumber/cucumber");
const expect = require('chai').expect;

Given("I have {int} cukes in my belly", function (cukes) {
  console.log(`Cukes: ${cukes}`);
});

When("I enter email {kraken-string}", async function (email) {
  console.log("Ingresar email: ",email);
  let element = await this.driver.$("#ember8");

  return await element.setValue(email);
});

When("I enter password {kraken-string}", async function (password) {
  let element = await this.driver.$("#ember10");

  return await element.setValue(password);
});

When("I click on element having id {string}", async function (id_element) {  
  let element = await this.driver.$(id_element);  
  return await element.click();
});

When("I click in field having css selector {string}", async function (css_selector) {  
  let element = await this.driver.$(css_selector);  
  return await element.click();
});

When("I click in Sing Out",  async function () {  
  let element = await this.driver.$('div.ember-basic-dropdown-wormhole');  

  return await element.click();
});

When('I enter text {string}', async function (text) {
  try {
    await this.driver.keys(text);
  } catch { }
  return;
});

When('I click coordinates X equal to {int} and Y equal to {int}', async function(x, y) {
  return await this.driver.touchAction({ action: 'tap', x: x, y: y });
});

When('I press enter', async function() {
  return await this.driver.pressKeyCode(66);
});

Then("Close the sesion",  async function () {
  return;
});

Then("Show label not user with that email",  async function () {
  let element = await this.driver.$('p[class="main-error"]');  
  let p_text = await element.getText();
  expect(p_text).to.contain("There is no user with that email address.");
});