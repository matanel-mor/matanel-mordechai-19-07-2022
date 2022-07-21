export class thankYouPage {
    goToOurWebsiteBTN() {
        cy.get('a[class *= "thankYou__websiteLink"]').should($a => {
            expect($a.attr('href')).to.equal("https://herolo.co.il/")
            expect($a.attr('target')).to.equal("_blank")
        });
    };
    goBackBTN() {
        return cy.get('[class *= "thankYou__backLink"]')
    };
    goBack() {
        this.goBackBTN().click()
        cy.url().should('eq', 'https://automation.herolo.co.il/')
    };
};
export const onThankYouPage = new thankYouPage();