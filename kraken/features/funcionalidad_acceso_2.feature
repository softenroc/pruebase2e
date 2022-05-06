Feature: Acceso a la plataforma 2

 @user1 @web
  Scenario: Como usuario no registrado quiero recuperar una contraseña entonces retorne mensaje usuario no existe
    Given I navigate to page "<URL_ADMIN>"
    And I wait for 2 seconds
    When I enter email "test@uniandes.edu.co"
    And I wait for 2 seconds    
    And I click on element having id "#ember11"
    And I wait for 3 seconds   
    Then Validate text main error to login equals to "User not found."

 @user2 @web
  Scenario: Como usuario registrado ingreso un usuario valido y una contraseña invalida entonces retorne 
    Given I navigate to page "<URL_ADMIN>"
    And I wait for 2 seconds
    When I enter email "<USERNAME1>"
    And I wait for 2 seconds
    And I enter password "badpassword"
    And I wait for 2 seconds
    And I click on element having id "#ember12"
    And I wait for 2 seconds    
    Then Validate text main error to login equals to "Your password is incorrect."