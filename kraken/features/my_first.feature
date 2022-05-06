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