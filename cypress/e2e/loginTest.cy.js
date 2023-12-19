describe('Login Tests', () => {
    beforeEach(() => {
      cy.visit('http://localhost/opencart/index.php?route=account/login&language=en-gb');
    });
  
    it('Valid Login', () => {
      cy.get('#input-email').type('ejaz@gmail.com');
      cy.get('#input-password').type('1234ejaz');
      cy.get("button[type='submit']").click();
      cy.get("body main h2:nth-child(1)").should('contain', 'My Account');
    });

    
  
    it('Invalid Login', () => {
      cy.get('#input-email').type('validusername');
      cy.get('#input-password').type('wrongpassword');
      cy.get("button[type='submit']").click();
      cy.get('.alert-danger').should("be.visible");
    });
  
    it('Empty Fields', () => {
      cy.get("button[type='submit']").click();
      cy.get('.alert-danger').should("be.visible");
    });

    it('Invalid Login - Incorrect Password', () => {
        cy.get('#input-email').type('ejaz@gmail.com');
        cy.get('#input-password').type('4567ejaz');
        cy.get("button[type='submit']").click();
        cy.get("body main h2:nth-child(1)").should('not.have.text', 'My Account');
      });
  

  });
  