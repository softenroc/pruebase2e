Feature: Staff users

  @user1 @web
  Scenario: Como owner ingreso a Staff cambia foto de perfil y guarda los cambios
    Given I navigate to page "<URL_STAFF>"
    And I wait for 5 seconds
    And I click on element having id "#ember595"
    And I wait for 5 seconds
    And I click on element having id "user-image"
    And I wait for 10 seconds