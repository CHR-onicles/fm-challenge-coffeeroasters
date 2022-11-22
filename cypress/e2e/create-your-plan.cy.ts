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

  it('should view the different order options', () => {
    // Should see the options for Preferences
    cy.findByRole('button', { name: /How do you drink your coffee\?/i })
      .scrollIntoView()

    cy.findByRole('region', {
      name: /How do you drink your coffee\?/i
    }).within(() => {
      cy.findByText(/Capsule/i)
        .should('be.visible');
      cy.findByText(/Compatible with nespresso systems and similar brewers\./i)
        .should('be.visible');

      cy.findByText(/Filter/i)
        .should('be.visible');
      cy.findByText(/For pour over or drip methods like aeropress, chemex, and v60\./i)
        .should('be.visible');

      cy.findByText(/Espresso/)
        .should('be.visible');
      cy.findByText(/Dense and finely ground beans for an intense, flavorful experience\./i)
        .should('be.visible');
    });

    // Should see the options for Bean Type
    cy.findByRole('button', { name: /Bean Type/i })
      .scrollIntoView()
      .click();

    cy.findByRole('region', {
      name: /What type of coffee\?/i
    }).within(() => {
      cy.findByText(/Single Origin/i)
        .should('be.visible');
      cy.findByText(/Distinct, high quality coffee from a specific family\-owned farm\./i)
        .should('be.visible');

      cy.findByText(/Decaf/i)
        .should('be.visible');
      cy.findByText(/Just like regular coffee, except the caffeine has been removed\./i)
        .should('be.visible');

      cy.findByText(/Blended/i)
        .should('be.visible');
      cy.findByText(/Combination of two or three dark roasted beans of organic coffees\./i)
        .should('be.visible');
    });

    // Should see the options for Quantity
    cy.findByRole('button', { name: /Quantity/i })
      .scrollIntoView()
      .click();

    cy.findByRole('region', {
      name: /How much would you like\?/i
    }).within(() => {
      cy.findByText(/250g/i)
        .should('be.visible');
      cy.findByText(/Perfect for the solo drinker\. Yields about 12 delicious cups\./i)
        .should('be.visible');

      cy.findByText(/500g/i)
        .should('be.visible');
      cy.findByText(/Perfect option for a couple\. Yields about 40 delectable cups\./i)
        .should('be.visible');

      cy.findByText(/1000g/i)
        .should('be.visible');
      cy.findByText(/Perfect for offices and events\. Yields about 90 delightful cups\./i)
        .should('be.visible');
    });

    // Should see the options for Grind Option
    cy.findByRole('button', { name: /Grind Option/i })
      .scrollIntoView()
      .click();

    cy.findByRole('region', {
      name: /Want us to grind them\?/i
    }).within(() => {
      cy.findByText(/Wholebean/i)
        .should('be.visible');
      cy.findByText(/Best choice if you cherish the full sensory experience\./i)
        .should('be.visible');

      cy.findByText(/Filter/i)
        .should('be.visible');
      cy.findByText(/For drip or pour\-over coffee methods such as v60 or aeropress\./i)
        .should('be.visible');

      cy.findByText(/Cafetière/i)
        .should('be.visible');
      cy.findByText(/Course ground beans specially suited for french press coffee\./i)
        .should('be.visible');
    });

    // Should see the options for Deliveries
    cy.findByRole('button', { name: /Deliveries/i })
      .scrollIntoView()
      .click();

    cy.findByRole('region', {
      name: /How often should we deliver\?/i
    }).within(() => {
      cy.findByText(/Every week/i)
        .should('be.visible');
      cy.findByText(/\$7\.20 per shipment\. includes free first\-class shipping\./i)
        .should('be.visible');

      cy.findByText(/Every 2 weeks/i)
        .should('be.visible');
      cy.findByText(/\$9\.60 per shipment\. includes free priority shipping\./i)
        .should('be.visible');

      cy.findByText(/Every month/i)
        .should('be.visible');
      cy.findByText(/\$12\.00 per shipment\. includes free priority shipping\./i)
        .should('be.visible');
    });
  });

  it('should create an order', () => {
    // Select an option for Preferences
    cy.findByRole('button', { name: /Preferences/i })
      .scrollIntoView()
      .click();

    cy.findByRole('region', {
      name: /How do you drink your coffee\?/i
    }).within(() => {  
      cy.findByText(/Filter/i)
        .click();
    });

    // Select an option for Bean Type
    cy.findByRole('button', { name: /Bean Type/i })
      .click();

    cy.findByRole('region', {
      name: /What type of coffee\?/i
    }).within(() => {  
      cy.findByText(/Blended/i)
        .click();
    });

    // Select an option for Quantity
    cy.findByRole('button', { name: /Quantity/i })
      .click();

    cy.findByRole('region', {
      name: /How much would you like\?/i
    }).within(() => {
      cy.findByText(/250g/i)
        .click();
    });

    // Select an option for Grind Option
    cy.findByRole('button', { name: /Grind Option/i })
      .click();

    cy.findByRole('region', {
      name: /Want us to grind them\?/i
    }).within(() => {
      cy.findByText(/Cafetière/i)
        .click();
    });

    // Select an option for Deliveries
    cy.findByRole('button', { name: /Deliveries/i })
      .click();

    cy.findByRole('region', {
      name: /How often should we deliver\?/i
    }).within(() => {
      cy.findByText(/Every 2 weeks/i)
        .click();
    });

    // Should see a Order Summary with selected options
    cy.findByRole('heading', { name: /Order Summary/i })
      .should('be.visible');
    cy.findByText(/“I drink my coffee as , with a type of bean\. ground ala , sent to me \.”/i)
      .within(() => {
        cy.findByText(/Filter/i)
          .should('be.visible');

        cy.findByText(/Blended/i)
          .should('be.visible');

        cy.findByText(/250g/i)
          .should('be.visible');

        cy.findByText(/Cafetière/i)
          .should('be.visible');

        cy.findByText(/Every 2 weeks/i)
          .should('be.visible');
      });

    // Should open Order Summary dialog
    cy.findByRole('button', { name: /Create my plan/i })
      .click();

    cy.findByRole('dialog')
      .within(() => {
        cy.findByRole('heading', { name: /Order Summary/i })
          .should('be.visible');

        cy.findByRole('button', { name: /Close modal/i })
          .should('be.visible');

        cy.findByText(/“I drink my coffee as , with a type of bean\. ground ala , sent to me \.”/i)
          .within(() => {
            cy.findByText(/Filter/i)
              .should('be.visible');

            cy.findByText(/Blended/i)
              .should('be.visible');

            cy.findByText(/250g/i)
              .should('be.visible');

            cy.findByText(/Cafetière/i)
              .should('be.visible');

            cy.findByText(/Every 2 weeks/i)
              .should('be.visible');
          });

        cy.findByText(/Is this correct\? you can proceed to checkout or go back to plan selection if something is off\. subscription discount codes can also be redeemed at the checkout\./i)
          .should('be.visible');

        cy.findByRole('heading', { name: /\$19\.20\/mo/i })
          .should('be.visible');

        cy.findByRole('button', { name: /Checkout/i })
          .should('be.visible');
      });

    // Should close Order Summary dialog when user clicks Close button
    cy.findByRole('dialog')
      .within(() => {
        cy.findByRole('button', { name: /Close modal/i })
          .click();
      });

    cy.findByTestId('modal-backdrop')
      .should('not.exist');

    // Should close Order Summary dialog when user clicks on backdrop
    cy.findByRole('button', { name: /Create my plan/i })
      .click();

    cy.findByRole('dialog')
      .within(() => {
        cy.findByTestId('modal-backdrop')
          .click('topLeft', { force: true });
      });

    cy.findByTestId('modal-backdrop')
      .should('not.exist');

    // Should open Order Summary dialog and checkout order
    cy.findByRole('button', { name: /Create my plan/i })
      .click();

    cy.findByRole('dialog')
      .within(() => {
        cy.findByRole('button', { name: /Checkout/i })
          .click();
      });

    cy.findByTestId('modal-backdrop')
      .should('not.exist');
  });

  it('should create an order with no grind option', () => {
    // Select an option for Preferences
    cy.findByRole('button', { name: /Preferences/i })
      .scrollIntoView();

    cy.findByRole('region', {
      name: /How do you drink your coffee\?/i
    }).within(() => {  
      cy.findByText(/Capsule/i)
        .click();
    });

    // Select an option for Bean Type
    cy.findByRole('button', { name: /Bean Type/i })
      .click();

    cy.findByRole('region', {
      name: /What type of coffee\?/i
    }).within(() => {  
      cy.findByText(/Single Origin/i)
        .click();
    });

    // Select an option for Quantity
    cy.findByRole('button', { name: /Quantity/i })
      .click();

    cy.findByRole('region', {
      name: /How much would you like\?/i
    }).within(() => {
      cy.findByText(/500g/i)
        .click();
    });

    // Select an option for Grind Option
    cy.findByRole('button', { name: /Grind Option/i })
      .should('be.disabled');

    // Select an option for Deliveries
    cy.findByRole('button', { name: /Deliveries/i })
      .click();

    cy.findByRole('region', {
      name: /How often should we deliver\?/i
    }).within(() => {
      cy.findByText(/Every week/i)
        .click();
    });

    // Should see a Order Summary with selected options
    cy.findByRole('heading', { name: /Order Summary/i })
      .should('be.visible');
    cy.findByText(/“I drink my coffee using , with a type of bean\. , sent to me \.”/i)
      .within(() => {
        cy.findByText(/Capsule/i)
          .should('be.visible');

        cy.findByText(/Single Origin/i)
          .should('be.visible');

        cy.findByText(/500g/i)
          .should('be.visible');

        cy.findByText(/Every week/i)
          .should('be.visible');
      });

    // Should open Order Summary dialog and checkout order
    cy.findByRole('button', { name: /Create my plan/i })
      .click();

    cy.findByRole('dialog')
      .within(() => {
        cy.findByRole('heading', { name: /Order Summary/i })
          .should('be.visible');

        cy.findByRole('button', { name: /Close modal/i })
          .should('be.visible');

        cy.findByText(/“I drink my coffee using , with a type of bean\. , sent to me \.”/i)
          .within(() => {
            cy.findByText(/Capsule/i)
              .should('be.visible');

            cy.findByText(/Single Origin/i)
              .should('be.visible');

            cy.findByText(/500g/i)
              .should('be.visible');

            cy.findByText(/Every week/i)
              .should('be.visible');
          });

        cy.findByText(/Is this correct\? you can proceed to checkout or go back to plan selection if something is off\. subscription discount codes can also be redeemed at the checkout\./i)
          .should('be.visible');

        cy.findByRole('heading', { name: /\$52\.00\/mo/i })
          .should('be.visible');

        cy.findByRole('button', { name: /Checkout/i })
          .should('be.visible')
          .click();
      });

    cy.findByTestId('modal-backdrop')
      .should('not.exist');
  });

  it('should get appropriate order cost for the Quantity and Deliveries options selected', () => {
    // Select an option for Preferences
    cy.findByRole('button', { name: /Preferences/i })
      .scrollIntoView();

    cy.findByRole('region', {
      name: /How do you drink your coffee\?/i
    }).within(() => {  
      cy.findByText(/Espresso/)
        .click();
    });

    // Select an option for Bean Type
    cy.findByRole('button', { name: /Bean Type/i })
      .click();

    cy.findByRole('region', {
      name: /What type of coffee\?/i
    }).within(() => {  
      cy.findByText(/Single Origin/i)
        .click();
    });

    // Select an option for Quantity (250g)
    cy.findByRole('button', { name: /Quantity/i })
      .click();

    cy.findByRole('region', {
      name: /How much would you like\?/i
    }).within(() => {
      cy.findByText(/250g/i)
        .click();
    });

    // Select an option for Grind Option
    cy.findByRole('button', { name: /Grind Option/i })
      .click();

    cy.findByRole('region', {
      name: /Want us to grind them\?/i
    }).within(() => {
      cy.findByText(/Wholebean/i)
        .click();
    });

    // Select an option for Deliveries
    cy.findByRole('button', { name: /Deliveries/i })
      .click();

    cy.findByRole('region', {
      name: /How often should we deliver\?/i
    }).within(() => {
      cy.findByText(/Every week/i)
        .click();

      cy.findByText(/\$7\.20 per shipment\. includes free first\-class shipping\./i)
        .should('be.visible');

      cy.findByText(/\$9\.60 per shipment\. includes free priority shipping\./i)
        .should('be.visible');

      cy.findByText(/\$12\.00 per shipment\. includes free priority shipping\./i)
        .should('be.visible');
    });

    // Should see a Order Summary with selected options
    cy.findByRole('heading', { name: /Order Summary/i })
      .should('be.visible');
    cy.findByText(/“I drink my coffee as , with a type of bean\. ground ala , sent to me \.”/i)
      .within(() => {
        cy.findByText(/Espresso/)
          .should('be.visible');

        cy.findByText(/Single Origin/i)
          .should('be.visible');

        cy.findByText(/250g/i)
          .should('be.visible');

        cy.findByText(/Wholebean/i)
          .should('be.visible');

        cy.findByText(/Every week/i)
          .should('be.visible');
      });

    // Should show corresponding cost in Order Summary dialog
    cy.findByRole('button', { name: /Create my plan/i })
      .click();

    cy.findByRole('dialog')
      .within(() => {
        cy.findByRole('heading', { name: /\$28\.80\/mo/i })
          .should('be.visible');

        cy.findByRole('button', { name: /Close modal/i })
          .click();
      });

    // Select a new option for Deliveries
    cy.findByRole('region', {
      name: /How often should we deliver\?/i
    }).within(() => {
      cy.findByText(/Every 2 weeks/i)
        .click();
    });

    // Should show corresponding cost in Order Summary dialog
    cy.findByRole('button', { name: /Create my plan/i })
      .click();

    cy.findByRole('dialog')
      .within(() => {
        cy.findByRole('heading', { name: /\$19\.20\/mo/i })
          .should('be.visible');

        cy.findByRole('button', { name: /Close modal/i })
          .click();
      });

  // Select a new option for Deliveries
  cy.findByRole('region', {
    name: /How often should we deliver\?/i
  }).within(() => {
    cy.findByText(/Every month/i)
      .click();
  });

  // Should show corresponding cost in Order Summary dialog
  cy.findByRole('button', { name: /Create my plan/i })
    .click();

  cy.findByRole('dialog')
    .within(() => {
      cy.findByRole('heading', { name: /\$12\.00\/mo/i })
        .should('be.visible');

      cy.findByRole('button', { name: /Close modal/i })
        .click();
    });

  // Select a new option for Quantity (500g)
  cy.findByRole('button', { name: /Quantity/i })
  .click();

  cy.findByRole('region', {
    name: /How much would you like\?/i
  }).within(() => {
    cy.findByText(/500g/i)
      .click();
  });

  // Select an option for Deliveries
  cy.findByRole('button', { name: /Deliveries/i })
    .click();

  cy.findByRole('region', {
    name: /How often should we deliver\?/i
  }).within(() => {
    cy.findByText(/Every week/i)
      .click();

    cy.findByText(/\$13\.00 per shipment\. includes free first\-class shipping\./i)
      .should('be.visible');

    cy.findByText(/\$17\.50 per shipment\. includes free priority shipping\./i)
      .should('be.visible');

    cy.findByText(/\$22\.00 per shipment\. includes free priority shipping\./i)
      .should('be.visible');
  });

  // Should see a Order Summary with selected options
  cy.findByRole('heading', { name: /Order Summary/i })
    .should('be.visible');
  cy.findByText(/“I drink my coffee as , with a type of bean\. ground ala , sent to me \.”/i)
    .within(() => {
      cy.findByText(/Espresso/)
        .should('be.visible');

      cy.findByText(/Single Origin/i)
        .should('be.visible');

      cy.findByText(/500g/i)
        .should('be.visible');

      cy.findByText(/Wholebean/i)
        .should('be.visible');

      cy.findByText(/Every week/i)
        .should('be.visible');
    });

  // Should show corresponding cost in Order Summary dialog
  cy.findByRole('button', { name: /Create my plan/i })
    .click();

  cy.findByRole('dialog')
    .within(() => {
      cy.findByRole('heading', { name: /\$52\.00\/mo/i })
        .should('be.visible');

      cy.findByRole('button', { name: /Close modal/i })
        .click();
    });

  // Select a new option for Deliveries
  cy.findByRole('region', {
    name: /How often should we deliver\?/i
  }).within(() => {
    cy.findByText(/Every 2 weeks/i)
      .click();
  });

  // Should show corresponding cost in Order Summary dialog
  cy.findByRole('button', { name: /Create my plan/i })
    .click();

  cy.findByRole('dialog')
    .within(() => {
      cy.findByRole('heading', { name: /\$35\.00\/mo/i })
        .should('be.visible');

      cy.findByRole('button', { name: /Close modal/i })
        .click();
    });
    
  // Select a new option for Deliveries
  cy.findByRole('region', {
    name: /How often should we deliver\?/i
  }).within(() => {
    cy.findByText(/Every month/i)
      .click();
  });

  // Should show corresponding cost in Order Summary dialog
  cy.findByRole('button', { name: /Create my plan/i })
    .click();

  cy.findByRole('dialog')
    .within(() => {
      cy.findByRole('heading', { name: /\$22\.00\/mo/i })
        .should('be.visible');

      cy.findByRole('button', { name: /Close modal/i })
        .click();
    });

  // Select a new option for Quantity (1000g)
  cy.findByRole('button', { name: /Quantity/i })
  .click();

  cy.findByRole('region', {
    name: /How much would you like\?/i
  }).within(() => {
    cy.findByText(/1000g/i)
      .click();
  });

  // Select an option for Deliveries
  cy.findByRole('button', { name: /Deliveries/i })
    .click();

  cy.findByRole('region', {
    name: /How often should we deliver\?/i
  }).within(() => {
    cy.findByText(/Every week/i)
      .click();

    cy.findByText(/\$22\.00 per shipment\. includes free first\-class shipping\./i)
      .should('be.visible');

    cy.findByText(/\$32\.00 per shipment\. includes free priority shipping\./i)
      .should('be.visible');

    cy.findByText(/\$42\.00 per shipment\. includes free priority shipping\./i)
      .should('be.visible');
  });

  // Should see a Order Summary with selected options
  cy.findByRole('heading', { name: /Order Summary/i })
    .should('be.visible');
  cy.findByText(/“I drink my coffee as , with a type of bean\. ground ala , sent to me \.”/i)
    .within(() => {
      cy.findByText(/Espresso/)
        .should('be.visible');

      cy.findByText(/Single Origin/i)
        .should('be.visible');

      cy.findByText(/1000g/i)
        .should('be.visible');

      cy.findByText(/Wholebean/i)
        .should('be.visible');

      cy.findByText(/Every week/i)
        .should('be.visible');
    });

  // Should show corresponding cost in Order Summary dialog
  cy.findByRole('button', { name: /Create my plan/i })
    .click();

  cy.findByRole('dialog')
    .within(() => {
      cy.findByRole('heading', { name: /\$88\.00\/mo/i })
        .should('be.visible');

      cy.findByRole('button', { name: /Close modal/i })
        .click();
    });

  // Select a new option for Deliveries
  cy.findByRole('region', {
    name: /How often should we deliver\?/i
  }).within(() => {
    cy.findByText(/Every 2 weeks/i)
      .click();
  });

  // Should show corresponding cost in Order Summary dialog
  cy.findByRole('button', { name: /Create my plan/i })
    .click();

  cy.findByRole('dialog')
    .within(() => {
      cy.findByRole('heading', { name: /\$64\.00\/mo/i })
        .should('be.visible');

      cy.findByRole('button', { name: /Close modal/i })
        .click();
    });
    
  // Select a new option for Deliveries
  cy.findByRole('region', {
    name: /How often should we deliver\?/i
  }).within(() => {
    cy.findByText(/Every month/i)
      .click();
  });

  // Should show corresponding cost in Order Summary dialog
  cy.findByRole('button', { name: /Create my plan/i })
    .click();

  cy.findByRole('dialog')
    .within(() => {
      cy.findByRole('heading', { name: /\$42\.00\/mo/i })
        .should('be.visible');

      cy.findByRole('button', { name: /Checkout/i })
        .should('be.visible')
        .click();
    });
  });

  it('should show error messages when no options are selected', () => {
    cy.findByRole('button', { name: /Create my plan/i })
      .scrollIntoView()
      .click();
    cy.findByRole('alert')
      .within(() => {
        cy.findByText(/Please select your preferences!/i)
          .should('be.visible');
      });

    cy.findByRole('button', { name: /Bean type is invalid/i })
      .click();
    cy.findByRole('alert')
      .within(() => {
        cy.findByText(/Please select your bean type!/i)
          .should('be.visible');
      });
    
    cy.findByRole('button', { name: /Quantity is invalid/i })
      .click();
    cy.findByRole('alert')
      .within(() => {
        cy.findByText(/Please select your quantity!/i)
          .should('be.visible');
      });
    
    cy.findByRole('button', { name: /Grind option is invalid/i })
      .click();
    cy.findByRole('alert')
      .within(() => {
        cy.findByText(/Please select your grind option!/i)
          .should('be.visible');
      });

    cy.findByRole('button', { name: /Deliveries is invalid/i })
      .click();
    cy.findByRole('alert')
      .within(() => {
        cy.findByText(/Please select your deliveries!/i)
          .should('be.visible');
      });
  });

  it('should remove error messages when options are selected', () => {
    cy.findByRole('region', {
      name: /How often should we deliver\?/i
    }).within(() => {
      cy.findByText(/Every 2 weeks/i)
        .click();

      cy.findByRole('alert')
        .should('not.exist');
    });
    cy.findByRole('button', { name: /Deliveries/i })
      .within(() => {
        cy.findByRole('img', { name: /is invalid/i })
          .should('not.exist');
      });

    cy.findByRole('button', { name: /Grind option is invalid/i })
      .click();
    cy.findByRole('region', {
        name: /Want us to grind them\?/i
      }).within(() => {
        cy.findByText(/Filter/i)
          .click();
  
        cy.findByRole('alert')
          .should('not.exist');
      });
      cy.findByRole('button', { name: /Grind option/i })
        .within(() => {
          cy.findByRole('img', { name: /is invalid/i })
            .should('not.exist');
        });
    
    cy.findByRole('button', { name: /Quantity is invalid/i })
      .click();
    cy.findByRole('region', {
        name: /How much would you like\?/i
      }).within(() => {
        cy.findByText(/1000g/i)
          .click();
  
        cy.findByRole('alert')
          .should('not.exist');
      });
      cy.findByRole('button', { name: /Quantity/i })
        .within(() => {
          cy.findByRole('img', { name: /is invalid/i })
            .should('not.exist');
        });

    cy.findByRole('button', { name: /Bean type is invalid/i })
      .click();
    cy.findByRole('region', {
        name: /What type of coffee\?/i
      }).within(() => {
        cy.findByText(/Blended/i)
          .click();
  
        cy.findByRole('alert')
          .should('not.exist');
      });
      cy.findByRole('button', { name: /Bean type/i })
        .within(() => {
          cy.findByRole('img', { name: /is invalid/i })
            .should('not.exist');
        });

    cy.findByRole('button', { name: /Preferences is invalid/i })
      .click();
    cy.findByRole('region', {
        name: /How do you drink your coffee\?/i
      }).within(() => {
        cy.findByText(/Espresso/)
          .click();
  
        cy.findByRole('alert')
          .should('not.exist');
      });
      cy.findByRole('button', { name: /Preferences/i })
        .within(() => {
          cy.findByRole('img', { name: /is invalid/i })
            .should('not.exist');
        });
        
    // Should see a Order Summary with selected options
    cy.findByRole('heading', { name: /Order Summary/i })
    .should('be.visible');
    cy.findByText(/“I drink my coffee as , with a type of bean\. ground ala , sent to me \.”/i)
      .within(() => {
        cy.findByText(/Espresso/i)
          .should('be.visible');

        cy.findByText(/Blended/i)
          .should('be.visible');

        cy.findByText(/1000g/i)
          .should('be.visible');

        cy.findByText(/Filter/i)
          .should('be.visible');

        cy.findByText(/Every 2 weeks/i)
          .should('be.visible');
      });

    // Should get an error for grind option given Preferences is changed from
    // Espresso to Capsule and back to Espresso
    cy.findByRole('region', {
      name: /How do you drink your coffee\?/i
    }).within(() => {
      cy.findByText(/Capsule/i)
        .click();
      cy.findByText(/Espresso/)
        .click();
    });
    cy.findByRole('button', { name: /Create my plan/i })
      .click();

    cy.findByRole('region', {
      name: /Want us to grind them\?/i
    }).within(() => {
      cy.findByRole('alert')
        .should('be.visible');
      cy.findByText(/Please select your grind option!/i)
        .should('be.visible');
    });
    cy.findByRole('button', { name: /Grind option is invalid/i })
      .within(() => {
        cy.findByRole('img', { name: /is invalid/i })
          .should('be.visible');
      });

    cy.findByRole('region', {
      name: /Want us to grind them\?/i
    }).within(() => {
      cy.findByText(/Filter/i)
        .click();

      cy.findByRole('alert')
        .should('not.exist');
    });
    cy.findByRole('button', { name: /Grind option/i })
      .within(() => {
        cy.findByRole('img', { name: /is invalid/i })
          .should('not.exist');
      });

    // Should open Order Summary dialog
    cy.findByRole('button', { name: /Create my plan/i })
    .click();

    cy.findByRole('dialog')
      .within(() => {
        cy.findByRole('heading', { name: /Order Summary/i })
          .should('be.visible');

        cy.findByRole('button', { name: /Close modal/i })
          .should('be.visible');

        cy.findByText(/“I drink my coffee as , with a type of bean\. ground ala , sent to me \.”/i)
          .within(() => {
            cy.findByText(/Espresso/i)
              .should('be.visible');

            cy.findByText(/Blended/i)
              .should('be.visible');

            cy.findByText(/1000g/i)
              .should('be.visible');

            cy.findByText(/Filter/i)
              .should('be.visible');

            cy.findByText(/Every 2 weeks/i)
              .should('be.visible');
          });

        cy.findByRole('heading', { name: /\$64\.00\/mo/i })
          .should('be.visible');

        cy.findByRole('button', { name: /Checkout/i })
          .should('be.visible')
          .click();
      });
  });
});
