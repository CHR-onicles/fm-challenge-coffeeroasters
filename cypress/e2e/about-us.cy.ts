describe('About Us page', () => {
  it('should view all sections of the page', () => {
    cy.visit('http://localhost:3000/about-us');

    // Should see hero section
    cy.findByRole('heading', { name: /About us/i })
      .should('be.visible');

    cy.findByText(/Coffeeroasters began its journey of exotic discovery in 1999, highlighting stories of coffee from around the world\./i)
      .should('be.visible');

    // Should see Our Commitment section
    cy.findByRole('heading', { name: /Our commitment/i })
      .should('be.visible');

    cy.findByRole('img', { name: /Our commitment/i })
      .should('be.visible');

    cy.findByText(/We're built on a simple mission and a commitment to doing good along the way\./i)
      .should('be.visible');

    // Should see Uncompromising Quality section
    cy.findByRole('heading', { name: /Uncompromising quality/i })
      .should('be.visible');
    
    cy.findByRole('img', { name: /Uncompromising quality/i })
      .should('be.visible');
      
    cy.findByText(/Although we work with growers who pay close attention to all stages of harvest and processing/i)
      .should('be.visible');

    // Should see Our Headquarters section
    cy.findByRole('heading', { name: /Our headquarters/i })
      .should('be.visible');

    cy.findByRole('img', { name: /United kingdom/i })
      .should('be.visible');
    cy.findByRole('heading', { name: /United kingdom/i })
      .should('be.visible');
    cy.findByText(/68 Asfordby Rd/i)
      .should('be.visible');
    cy.findByText(/Alcaston/i)
      .should('be.visible');
    cy.findByText(/SY6 1YA/i)
      .should('be.visible');
    cy.findByText(/\+44 1241 918425/i)
      .should('be.visible');

    cy.findByRole('img', { name: /Canada/i })
      .should('be.visible');
    cy.findByRole('heading', { name: /Canada/i })
      .should('be.visible');
    cy.findByText(/1528 Eglinton Avenue/i)
      .should('be.visible');
    cy.findByText(/Toronto/i)
      .should('be.visible');
    cy.findByText(/Ontario M4P 1A6/i)
      .should('be.visible');
    cy.findByText(/\+1 416 485 2997/i)
      .should('be.visible');

    cy.findByRole('img', { name: /Australia/i })
      .should('be.visible');
    cy.findByRole('heading', { name: /Australia/i })
      .should('be.visible');
    cy.findByText(/36 Swanston Street/i)
      .should('be.visible');
    cy.findByText(/Kewell/i)
      .should('be.visible');
    cy.findByText(/Victoria/i)
      .should('be.visible');
    cy.findByText(/\+61 4 9928 3629/i)
      .should('be.visible');
  });
});
