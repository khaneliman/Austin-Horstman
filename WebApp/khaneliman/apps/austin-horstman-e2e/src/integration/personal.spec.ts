describe('Personal', () => {
  beforeEach(() => cy.visit('https://localhost:44463/personal'));

  it('View Resume', () => {
   /* ==== Generated with Cypress Studio ==== */
   cy.get('.col-lg-9 > .btn').click();
   cy.get('.col-lg-6 > .px-3 > .pl-4 > .display-3').should('have.text', 'Education');
   cy.get('.bg-gradient-warning > .container > :nth-child(1) > .d-flex > .pl-4 > .display-3').should('have.text', 'Employment');
   cy.get('.section.mb-5 > .container > .row > .d-flex > .pl-4 > .display-3').should('have.text', 'Projects');
   cy.get(':nth-child(1) > .text-white').should('have.text', 'Technology Summary');
   /* ==== End Cypress Studio ==== */
  })

   it('View Fox Valley Technical College From Resume', () => {
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.col-lg-9 > .btn').click();
    cy.get('.col-lg-6 > .card > .card-body > .d-flex > .pl-4 > a.text-success').click();
    cy.get('.mt-3 > h3').should('have.text', 'Fox Valley Technical College');
    /* ==== End Cypress Studio ==== */
   })

   it('View Core BTS From Resume', () => {
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.col-lg-9 > .btn').click();
    cy.get(':nth-child(1) > .card-body > .d-flex > .pl-4 > a.text-success').click();
    cy.get('.mt-3 > h3').should('have.text', 'Core BTS');
    /* ==== End Cypress Studio ==== */
   })

   it('View Skyline Tech From Resume', () => {
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.col-lg-9 > .btn').click();
    cy.get('.col-lg-4 > :nth-child(2) > .card-body > .d-flex > :nth-child(2) > a.text-success').click();
    cy.get(':nth-child(2) > h3').should('have.text', 'Skyline Technologies');
    /* ==== End Cypress Studio ==== */
   })

   it('View West Corp From Resume', () => {
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.col-lg-9 > .btn').click();
    cy.get(':nth-child(3) > .card-body > .d-flex > .pl-4 > a.text-success').click();
    cy.get('.mt-3 > h3').should('have.text', 'West Corporation');
    cy.get('p').should('have.text', ' Support and develop new features for CRM applications and websites, SSIS packages for data and file automation, write SQL stored procedures for applications and reporting with SSRS, and create internal applications and websites to improve workflow within department. ');
    /* ==== End Cypress Studio ==== */
   })

   it('View Geek Squad From Resume', () => {
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.col-lg-9 > .btn').click();
    cy.get('.col-lg-4 > .mb-5 > .card-body > .d-flex > .pl-4 > a.text-success').click();
    cy.get(':nth-child(2) > h3').should('have.text', 'Best Buy');

    cy.get('p').should(
     'have.text',
     ' As an Advanced Repair Agent with Geek Squad, I am required to diagnose and repair computer problems. I work with a small staff in our precinct and communicate regularly with clients to update them on work being performed on their computers. I ensure the validity of clients\' records and file according to Best Buy\'s standard operating procedure. In addition, I handle the receiving and shipping of clients\' products that are sent out to our service centers. '
    );

    /* ==== End Cypress Studio ==== */
   })
});
