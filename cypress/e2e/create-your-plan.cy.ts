describe('Create Plan page', () => {
  it('should view all sections of the page', () => {
    cy.visit('http://localhost:3000/create-plan');

    // Should see hero section
    cy.findByRole('heading', { name: /Create plan/i })
      .should('be.visible');

    cy.findByText(/Coffee the way you wanted it to be. For coffee delivered tomorrow, or next week\./i)
      .should('be.visible');

    // Should see How It Works section with no heading and no call-to-action
    cy.findByRole('heading', { name: /How it works/i })
      .should('not.exist');

    cy.findByRole('heading', { name: /Pick your coffee/i })
      .should('be.visible');
    cy.findByText(/Select from our evolving range of artisan coffees\. our beans are ethically sourced and we pay fair prices for them\./i)
      .should('be.visible');

    cy.findByRole('heading', { name: /Choose the frequency/i })
      .should('be.visible');
    cy.findByText(/Customize your order frequency, quantity, even your roast style and grind type\./i)
      .should('be.visible');

    cy.findByRole('heading', { name: /Receive and enjoy!/i })
      .should('be.visible');
    cy.findByText(/We ship your package within 48 hours, freshly roasted\./i)
      .should('be.visible');

    cy.findByTestId('btn-how-it-works')
      .should('not.exist');

    // Should see accordion quicklinks
    cy.findByRole('button', { name: /Preferences/i })
      .scrollIntoView()
      .should('be.visible');
    cy.findByRole('button', { name: /Bean Type/i })
      .scrollIntoView()
      .should('be.visible');
    cy.findByRole('button', { name: /Quantity/i })
      .scrollIntoView()
      .should('be.visible');
    cy.findByRole('button', { name: /Grind Option/i })
      .scrollIntoView()
      .should('be.visible');
    cy.findByRole('button', { name: /Deliveries/i })
      .scrollIntoView()
      .should('be.visible');

    // Should see accordion headers
    cy.findByRole('button', { name: /How do you drink your coffee\?/i })
      .should('be.visible');
    cy.findByRole('button', { name: /What type of coffee\?/i })
      .should('be.visible');
    cy.findByRole('button', { name: /How much would you like\?/i })
      .should('be.visible');
    cy.findByRole('button', { name: /Want us to grind them\?/i })
      .should('be.visible');
    cy.findByRole('button', { name: /How often should we deliver\?/i })
      .should('be.visible');

    // Should see Order Summary with blanks
    cy.findByRole('heading', { name: /Order Summary/i })
      .should('be.visible');
    cy.findByText(/“I drink my coffee as , with a type of bean\. ground ala , sent to me \.”/i)
      .should('be.visible');

    // Should see Create My Plan button
    cy.findByRole('button', { name: /Create my plan/i })
      .should('be.visible');
  });
});
