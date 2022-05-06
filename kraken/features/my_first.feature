Feature: Iniciar una conversación

  @user1 @web
  Scenario: Como primer usuario inicio sesion y mandó un mensaje al usuario 1
    Given I navigate to page "<URL_ADMIN>"
    And I wait for 5 seconds
    When I enter email "<USERNAME1>"
    And I wait for 2 seconds
    And I enter password "<PASSWORD1>"
    And I wait for 2 seconds
    And I click next
    And I wait for 4 seconds


  @user2 @web
  Scenario: Como owner ingreso a Staff cambia foto de perfil y guarda los cambios
    Given I navigate to page "<URL_STAFF>"
    And I wait for 5 seconds
    And I click on element having id "#ember595"
    And I wait for 5 seconds
    And I click on element having id "user-image"
    And I wait for 10 seconds