import { onHomePage } from "../support/Pages/homePage"

describe('Home page elements', () => {
  beforeEach(() => {
    cy.visit('/')
  });
  it('Checks visibility of all sections', () => {
    onHomePage.sectionVisibility()
  });
  it('Check the visibility & functionality of go back to top button', () => {
    onHomePage.goBackToTheTopBTN().should('not.be.visible')
    onHomePage.portfolioSection().scrollIntoView()
    onHomePage.goBackToTheTopBTN().should('be.visible').click()
  });
  it('Check the funtionality of contact us section', () => {
    onHomePage.contactUsSection().scrollIntoView()
    onHomePage.typeInAndSubmitContactInfo()
  });
  it('Check the visibility of contact us box', () => {
    onHomePage.contactUsBox().should('be.visible')
    onHomePage.contactUsSection().scrollIntoView()
    onHomePage.contactUsBox().should('be.hidden')
  });
})