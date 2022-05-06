Feature: Acceso a la plataforma

 @user1 @web
  Scenario: Como usuario registrado ingreso un usuario y una contraseña valida y acceso a la plataforma    
    Given I navigate to page "<URL_ADMIN>"
    And I wait for 2 seconds
    When I enter email "<USERNAME1>"
    And I wait for 2 seconds
    And I enter password "<PASSWORD1>"
    And I wait for 2 seconds
    And I click on element having id "#ember12"
    And I wait for 2 seconds
    And I click on element having id "#ember47"
    And I wait for 2 seconds       
    Then Close the sesion

 @user2 @web
  Scenario: Como usuario no registrado ingreso un usuario y una contraseña invalida  y no puedo acceder a la plataforma
    Given I navigate to page "<URL_ADMIN>"
    And I wait for 2 seconds
    When I enter email "bad@uniandes.edu.co"
    And I wait for 2 seconds
    And I enter password "313213"    
    And I wait for 2 seconds       
    And I click on element having id "#ember12"
    And I wait for 3 seconds   
    Then Show label not user with that email