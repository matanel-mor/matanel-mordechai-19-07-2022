import { onThankYouPage } from "../support/Pages/thankYouPage";

describe('Thank you page', () => {
    beforeEach(() => {
        cy.visit('/thank-you/')
    });
    it('Check the functionality of go to our website button ', () => {
        onThankYouPage.goToOurWebsiteBTN()
    });
    it('Check the functionality of go back button ', () => {
        onThankYouPage.goBack()
    });
});