Feature: Iniciar una conversación

  @user1 @web
  Scenario: Como owner ingreso a Staff cambio la informacion de mi localizacion para validar la actualizacion de datos
    Given I navigate to page "<URL_ADMIN>"
    And I wait for 2 seconds
    When I enter email "<USERNAME1>"
    And I wait for 2 seconds
    And I enter password "<PASSWORD1>"
    And I wait for 2 seconds
    And I click on element having id "#ember12"
    And I wait for 3 seconds
    And I navigate to page "<URL_STAFF>"
    And I wait for 2 seconds
    And Click en link owner into staff users    
    And I wait for 3 seconds
    And I fill on element having id "#user-location" with text "Barranquilla"
    And I wait for 3 seconds
    And I click on element having id "#ember82"
    And I wait for 3 seconds
    And I navigate to page "<URL_STAFF>"
    And I wait for 2 seconds
    And Click en link owner into staff users    
    And I wait for 2 seconds
    Then Validate value text having id "#user-location" equals to "Barranquilla"
    And I wait for 5 seconds
    And I click on element having id "#ember47"
    And I wait for 2 seconds      
    Then Close the sesion

    

    