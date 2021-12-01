import { getGreeting } from '../support/app.po';

describe('Home', () => {
  beforeEach(() => cy.visit('https://localhost:44463/'));

  it('Should display home page', () => {
    // Custom command example, see `../support/commands.ts` file
    // cy.login('my-email@something.com', 'myPassword');

    // Function helper example, see `../support/app.po.ts` file
    getGreeting().contains('Khaneliman');
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.lead').should('have.text', ' If you’re on the hunt for a professional Software Engineer with experience and the ability to adapt to new technologies, you’ve come to the right place. ');
    /* ==== End Cypress Studio ==== */
  });

  it('View Resume', () => {
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.btn-white > .btn-inner--text').click();
    cy.get('.col-lg-9 > .btn').click();
    /* ==== End Cypress Studio ==== */
  })

   it('View Fox Valley Technical College From Resume', () => {
     /* ==== Generated with Cypress Studio ==== */
     cy.get('.btn-white').click();
     cy.get('.col-lg-9 > .btn').click();
     cy.get('.col-lg-6 > .card > .card-body > .d-flex > .pl-4 > a.text-success').click();
     cy.get('.mt-3 > h3').should('have.text', 'Fox Valley Technical College');
     /* ==== End Cypress Studio ==== */
   })

   it('View Core BTS From Resume', () => {
     /* ==== Generated with Cypress Studio ==== */
     cy.get('.btn-white > .btn-inner--text').click();
     cy.get('.col-lg-9 > .btn').click();
     cy.get(':nth-child(1) > .card-body > .d-flex > .pl-4 > a.text-success').click();
     cy.get('.mt-3 > h3').should('have.text', 'Core BTS');
     /* ==== End Cypress Studio ==== */
   })

   it('View Skyline Tech From Resume', () => {
     /* ==== Generated with Cypress Studio ==== */
     cy.get('.btn-white > .btn-inner--text').click();
     cy.get('.col-lg-9 > .btn').click();
     cy.get('.col-lg-4 > :nth-child(2) > .card-body > .d-flex > :nth-child(2) > a.text-success').click();
     cy.get(':nth-child(2) > h3').should('have.text', 'Skyline Technologies');
     /* ==== End Cypress Studio ==== */
   })

   it('View West Corp From Resume', () => {
     /* ==== Generated with Cypress Studio ==== */
     cy.get('.btn-white > .btn-inner--text').click();
     cy.get('.col-lg-9 > .btn').click();
     cy.get(':nth-child(3) > .card-body > .d-flex > .pl-4 > a.text-success').click();
     cy.get('.mt-3 > h3').should('have.text', 'West Corporation');
     /* ==== End Cypress Studio ==== */
   })

   it('View Geek Squad From Resume', () => {
     /* ==== Generated with Cypress Studio ==== */
     cy.get('.btn-white > .btn-inner--text').click();
     cy.get('.col-lg-9 > .btn').click();
     cy.get('.col-lg-4 > .mb-5 > .card-body > .d-flex > .pl-4 > a.text-success').click();
     cy.get(':nth-child(2) > h3').should('have.text', 'Best Buy');
     /* ==== End Cypress Studio ==== */
   })
});
