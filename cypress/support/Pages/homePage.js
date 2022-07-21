/// <reference types="Cypress" />
export class homePage {
    sectionsData = [
        {
            "locator": this.introductionSection,
            "tytle": "אנחנו הירולו"
        },
        {
            "locator": this.servicesSection,
            "tytle": "איך נוכל לעזור לכם?"
        },
        {
            "locator": this.portfolioSection,
            "tytle": "עבודות לדוגמה"
        },
        {
            "locator": this.customersSection,
            "tytle": "כמה מהלקוחות שלנו"
        },
        {
            "locator": this.questionsSection,
            "tytle": "לכל שאלה תשובה"
        },
        {
            "locator": this.contactUsSection,
            "tytle": "רוצים לשמוע עוד?"
        }
    ];
    introductionSection() {
        return cy.get('section[class *= "introduction"]')
    };
    servicesSection() {
        return cy.get('section[class *= "services"]')
    };
    portfolioSection() {
        return cy.get('section[class *= "portfolio"]')
    };
    customersSection() {
        return cy.get('section[class *= "customers"]')
    };
    questionsSection() {
        return cy.get('section[class *= "questions"]')
    };
    contactUsSection() {
        return cy.get('section[class *= "contactUs"]').first()
    };
    contactUsSectionFields() {
        return {
            name: "#name",
            company: "#company",
            email: "#email",
            phone: "#telephone",
            submitBTN: "דברו איתנו"
        };
    };
    contactUsBox() {
        return cy.get('#footer')
    };
    goBackToTheTopBTN() {
        return cy.get('a[class *= "backToTop__BtnGoUp"]');
    };
    sectionVisibility() {
        for (let index = 0; index < this.sectionsData.length; index++) {
            this.sectionsData[index].locator().scrollIntoView().then((el) => {
                cy.wrap(el)
                    .should('be.visible')
                    .find('h2').first().should('have.text', this.sectionsData[index].tytle)
            });
        };
    };
    typeInAndSubmitContactInfo() {
        cy.get(this.contactUsSectionFields().name).type("Test", { force: true })
        cy.get(this.contactUsSectionFields().company).type("Cypress", { force: true })
        cy.get(this.contactUsSectionFields().email).type("Test@cypress.co.il", { force: true })
        cy.get(this.contactUsSectionFields().phone).type("0512345678", { force: true })
        cy.contains(this.contactUsSectionFields().submitBTN).click()
        cy.url().should('eq', 'https://automation.herolo.co.il/thank-you/')
    };
};
export const onHomePage = new homePage();