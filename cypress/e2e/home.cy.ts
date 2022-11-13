describe('Home page', () => {
  it('should visit the coffeeroasters home page', () => {
    cy.visit('http://localhost:3000');

    // Should see header elements
    cy.findAllByRole('link', { name: /Home/i })
      .should('have.length', 2);

    cy.findAllByRole('link', { name: /About us/i })
      .should('have.length', 2);

    cy.findAllByRole('link', { name: /Create your plan/i })
      .should('have.length', 2);

    // Should see hero elements
    cy.findByRole('heading', { name: /Great coffee made simple\./i })
      .should('be.visible');

    cy.findByText(/Start your mornings with the world's best coffees\. Try/i )
      .should('be.visible');

    cy.findByTestId('btn-hero')
      .should('be.visible');
  });
});
