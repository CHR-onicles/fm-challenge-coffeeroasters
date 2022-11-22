describe('Home page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('should view all sections of the page', () => {
    // Should see header
    cy.findByRole('banner')
      .should('be.visible')
      .within(() => {
        cy.findByRole('img', { name: /Coffeeroasters logo/i })
          .should('be.visible');

        cy.findByRole('link', { name: /Home/i })
          .should('be.visible');

        cy.findByRole('link', { name: /About us/i })
          .should('be.visible');

        cy.findByRole('link', { name: /Create your plan/i })
          .should('be.visible');
      });

    // Should see hero section
    cy.findByRole('heading', { name: /Great coffee made simple\./i })
      .should('be.visible');

    cy.findByText(/Start your mornings with the world's best coffees\. Try/i )
      .should('be.visible');

    cy.findByTestId('btn-hero')
      .should('be.visible');

    // Should see Our Collection section
    cy.findByRole('heading', { name: /Our Collection/i })
      .should('be.visible');

    cy.findByRole('img', { name: /Gran Espresso/i })
      .should('be.visible');
    cy.findByRole('heading', { name: /Gran Espresso/i })
      .should('be.visible');
    cy.findByText(/Light and flavorful blend with cocoa and black pepper for an intense experience/i)
      .should('be.visible');

    cy.findByRole('img', { name: /Planalto/i })
      .should('be.visible');
    cy.findByRole('heading', { name: /Planalto/i })
      .should('be.visible');
    cy.findByText(/Brazilian dark roast with rich and velvety body, and hints of fruits and nuts/i)
      .should('be.visible');

    cy.findByRole('img', { name: /Piccollo/i })
      .should('be.visible');
    cy.findByRole('heading', { name: /Piccollo/i })
      .should('be.visible');
    cy.findByText(/Mild and smooth blend featuring notes of toasted almond and dried cherry/i)
      .should('be.visible');

    cy.findByRole('img', { name: /Danche/i })
      .should('be.visible');
    cy.findByRole('heading', { name: /Danche/i })
      .should('be.visible');
    cy.findByText(/Ethiopian hand\-harvested blend densely packed with vibrant fruit notes/i)
      .should('be.visible');

    // Should see Why Choose Us section
    cy.findByRole('heading', { name: /Why choose us/i })
      .should('be.visible');
    cy.findByText(/A large part of our role is choosing which particular coffees will be featured in our range\./i)
      .should('be.visible');

    cy.findByRole('img', { name: /Best quality/i })
      .should('be.visible');
    cy.findByRole('heading', { name: /Best quality/i })
      .should('be.visible');
    cy.findByText(/Discover an endless variety of the world's best artisan coffee from each of our roasters\./i)
      .should('be.visible');

    cy.findByRole('img', { name: /Exclusive benefits/i })
      .should('be.visible');
    cy.findByRole('heading', { name: /Exclusive benefits/i })
      .should('be.visible');
    cy.findByText(/Special offers and swag when you subscribe, including 30% off your first shipment\./i)
      .should('be.visible');

    cy.findByRole('img', { name: /Free shipping/i })
      .should('be.visible');
    cy.findByRole('heading', { name: /Free shipping/i })
      .should('be.visible');
    cy.findByText(/We cover the cost and coffee is delivered fast\. peak freshness: guaranteed\./i)
      .should('be.visible');

    // Should see How It Works section
    cy.findByRole('heading', { name: /How it works/i })
      .should('be.visible');

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
      .should('be.visible');

    // Should see footer
    cy.findByRole('contentinfo')
      .should('be.visible')
      .within(() => {
        cy.findByRole('img', { name: /Coffeeroasters logo/i })
          .should('be.visible');

        cy.findByRole('link', { name: /Home/i })
          .should('be.visible');

        cy.findByRole('link', { name: /About us/i })
          .should('be.visible');

        cy.findByRole('link', { name: /Create your plan/i })
          .should('be.visible');
      });

    cy.findByRole('link', { name:/Facebook logo/i })
      .should('be.visible');
    cy.findByRole('link', { name:/Twitter logo/i })
      .should('be.visible');
    cy.findByRole('link', { name:/Instagram logo/i })
      .should('be.visible');
    
    const year = new Date().getFullYear();
    cy.findByText(`© ${year}`)
      .should('be.visible');
    cy.findByText(/coded by/i)
      .should('be.visible');
    cy.findByRole('link', { name: /christopher's github repository for the coffeeroasters challenge on frontend mentor/i })
      .should('be.visible');
  });

  it('should navigate to About us page and back to Home page', () => {
    cy.findByRole('banner')
      .should('be.visible')
      .within(() => {
        cy.findByRole('link', { name: /About us/i })
          .click();
      });

    // Should see About Us hero section
    cy.findByRole('heading', { name: /About us/i })
      .should('be.visible');

    cy.findByRole('contentinfo')
      .should('be.visible')
      .within(() => {
        cy.findByRole('link', { name: /Home/i })
          .click();
      });

    // Should see Home hero section
    cy.findByRole('heading', { name: /Great coffee made simple\./i })
      .should('be.visible');
  });

  it('should navigate to Create plan page and back to Home page', () => {
    cy.findByRole('banner')
      .should('be.visible')
      .within(() => {
        cy.findByRole('link', { name: /Create your plan/i })
          .click();
      });

    // Should see Create Plan hero section
    cy.findByRole('heading', { name: /Create plan/i })
      .should('be.visible');

    cy.findByRole('contentinfo')
      .should('be.visible')
      .within(() => {
        cy.findByRole('link', { name: /Home/i })
          .click();
      });

    // Should see Home hero section
    cy.findByRole('heading', { name: /Great coffee made simple\./i })
      .should('be.visible');
  });
});
