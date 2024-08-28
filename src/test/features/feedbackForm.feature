Feature: Feedback Form Page test

    Scenario: User submits the feedback form successfully
    Given the user is on the feedback form page
    When The user will read the descript of beedback form
    Then The user will fill the name in the name input field
    Then The user will fill the email in the email input field
    Then The user will fill the Category in the Category input field
    Then The user will fill the Captcha code in the Captcha code input field
    Then The user will fill the email in the email input field
    Then User will see the successfull Popup on the top bar 