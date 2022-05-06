const { Given, When, Then } = require("@cucumber/cucumber");

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

When("I click next", async function () {
  let element = await this.driver.$("#ember12");

  return await element.click();
});
