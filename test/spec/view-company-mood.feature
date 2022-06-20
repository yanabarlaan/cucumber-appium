Feature: View Company Moood Feature

  # Background: 
  #   Given user is on mood tracker feed

  Scenario: View Company Mood Feature
    Given user is on mood tracker feed
    When user click "View company mood" button
    And user clicks "follow" icon
    Then "Follow People" screen should appear

  Scenario: User views followed member first in the list
    Then followed member should be first in the list to show

  # Scenario: User follows other member
  #   When user clicks "Follow" button in members name
  #   Then "Following" should be displayed

  # Scenario: User unfollows other member
  #   When user clicked following button
  #   Then user should be able to unfollow people

  Scenario: User search people
    When user enters the name he wants to follow in search bar
    Then the person should appear appear below