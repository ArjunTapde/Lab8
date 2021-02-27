describe('Party Horn Tests', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/Part2-Cypress/index.html');
  });

  it('First Test', () => {
    expect(true).to.equal(true);
  });

  it('Slider changes when volume input changes', () => {
    cy.get('#volume-number').clear().type('75');
    cy.get('#volume-slider').then(($el) => {
      expect($el).to.have.value(75);
    });
  });

  it('Volume input changes when slider changes', () => {
    cy.get('#volume-slider').invoke('val', 33).trigger('input');
    cy.get('#volume-number').then(($el) => {
      expect($el).to.have.value(33);
    });
  });

  it('Volume of the audio element changes when slider changes', () => {
    cy.get('#volume-slider').invoke('val', 33).trigger('input');
    cy.get('#horn-sound').then(($el) => {
      expect($el).to.have.prop('volume', 0.33);
    });
  });

  it('Image and sound sources changes when you select the party horn radio button', () => {
    cy.get('#radio-party-horn').trigger('change');
    cy.get('#sound-image').then(($el) => {
      expect($el).to.have.attr('src', "./assets/media/images/party-horn.svg");
    });

    cy.get('#horn-sound').then(($el) => {
      expect($el).to.have.attr('src', "./assets/media/audio/party-horn.mp3");
    });
  });
  
  
  it('Volume image changes when increasing volumes', () => {
    cy.get('#volume-number').clear().type('0');
    cy.get('#volume-image').then(($el) => {
      expect($el).to.have.attr('src', "./assets/media/icons/volume-level-0.svg");
    });

    cy.get('#volume-number').clear().type('25');
    cy.get('#volume-image').then(($el) => {
      expect($el).to.have.attr('src', "./assets/media/icons/volume-level-1.svg");
    });
    
    cy.get('#volume-number').clear().type('50');
    cy.get('#volume-image').then(($el) => {
      expect($el).to.have.attr('src', "./assets/media/icons/volume-level-2.svg");
    });

    cy.get('#volume-number').clear().type('75');
    cy.get('#volume-image').then(($el) => {
      expect($el).to.have.attr('src', "./assets/media/icons/volume-level-3.svg");
    });
  });

  it('Honk button is disabled when the textbox input is empty or a non-number', () => {
    cy.get('#volume-number').clear();
    cy.get('#honk-btn').then(($el) => {
      expect($el).to.have.prop('disabled', true);
    });

    cy.get('#volume-number').clear().type('abc');
    cy.get('#honk-btn').then(($el) => {
      expect($el).to.have.prop('disabled', true);
    });
  });
  
  it('Error is shown when you type a number outside of the given range for the volume textbox input', () => {
    cy.get('#volume-number').clear().type('-1');
    cy.get('#volume-number:invalid').then(($el) => {
      expect($el);
    });

    cy.get('#volume-number').clear().type('101');
    cy.get('#volume-number:invalid').then(($el) => {
      expect($el);
    });
  });
});
