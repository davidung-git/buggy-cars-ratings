Feature: buggycarsrating

  Scenario: logging in 
    Given I visit Buggy Cars Rating website
    When I log in using a valid user and password
    Then I should be successfully logged in

  Scenario: view popular make 
    Given I visit Buggy Cars Rating website
    When I click on Popular Make section
    Then I should see the Alfa Romeo car make

  Scenario: sort rating table by car make
    Given I visit Buggy Cars Rating website
    When I click on Overall Rating section
    When I click on MAKE column
    Then the car make is sorted in ASC order

  Scenario: sort rating table by ranking
    Given I visit Buggy Cars Rating website
    When I click on Overall Rating section
    When I click on RANK column
    Then the rank is sorted in ASC order

  Scenario: sort rating table by car make in DESC order 
    Given I visit Buggy Cars Rating website
    When I click on Overall Rating section
    When I click on MAKE column
    When I click on MAKE column
    Then the car make is sorted in DESC order