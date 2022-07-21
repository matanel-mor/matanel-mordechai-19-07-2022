# Test scenarios

## home page spec

1. Check that all sections tytles are correct.
2. Check that go back to top button appears when the user scrolls down the page,
    and when the user click on it the page scrolls to the top of the page.
3. Check the functionality of contact us section,
    fill in all the fields wif correct info,
    makes sure that thank you page loads.
4. Check that contact us fotter disappears when the user scroll down to contact us section,
    and reappears when the user scroll up.

## thank you page

1. Check that when the user click on go to our website button,
    'https://herolo.co.il/' will load on new tab.
2. Check that when the user click on go back button, 'https://automation.herolo.co.il/' will load.



# Installation & running procces

## installation
1. npm i cypress --save-dev

## running
1. To run in GUI mode:
    a. npx cypress open
    b. select e2e
    c. click on test from the list to run it

2. To run in headless mode: npm test