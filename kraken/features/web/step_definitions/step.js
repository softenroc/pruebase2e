const { Given, When, Then, Before } = require("@cucumber/cucumber");
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

When("I click on element css_element {string}", async function (css_element) {  
  let element = await this.driver.$(css_element);  
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

When("I click in User Staff",  async function () {  
  let element = await this.driver.$('div.apps-grid-cell tooltip-centered');  

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

When("I fill on element having id {string} with text {string}", async function (element_id, data_to_fill) {
  let element = await this.driver.$(element_id);

  return await element.setValue(data_to_fill);
});

When("I fill on field having css selector {string} with text {string}", async function (css_selector, data_to_fill) {
  let element = await this.driver.$(css_selector);
  return await element.setValue(data_to_fill);
});


Then("Close the sesion",  async function () {
  let element = await this.driver.$('/html[1]/body[1]/div[1]/div[1]/ul[1]/li[9]/a[1]');  
  return await element.click();  
  
});

Then("Click en link owner into staff users",  async function () {
  let element = await this.driver.$('/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/section[1]/section[2]/div[1]/div[1]/a[1]/article[1]');  
  return await element.click();  

});

Then('Validate text main error to login equals to {string}', async function (string) {
  let element = await this.driver.$('p[class="main-error"]');  
  let p_text = await element.getText();
  expect(p_text).to.contain(string);
});

Then('Validate value text having id {string} equals to {string}', async function (element_id, data_to_compare) {
  let element = await this.driver.$(element_id);  
  let p_text = await element.getValue();
  expect(p_text).to.contain(data_to_compare);
});

Then('Validate value text css element {string} contain to {string}', async function (element_id, data_to_compare) {
  let element = await this.driver.$(element_id);  
  let p_text = await element.getText();
  expect(p_text).to.contain(data_to_compare);
});

