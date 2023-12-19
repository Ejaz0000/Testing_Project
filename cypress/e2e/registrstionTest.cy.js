describe('Registration Functionality Tests', () => {
    beforeEach(() => {
      
      cy.visit('http://localhost/opencart/index.php?route=account/register&language=en-gb');
    });
  
    it('Valid Registration', () => {
    
      cy.get('#input-firstname').type('ahmed');
      cy.get('#input-lastname').type('ejaz');
      cy.get('#input-email').type('ejaz4@gmail.com');
      cy.get('#input-password').type('password123');
      cy.get("input[value='1'][name='agree']").check();
      cy.get("button[type='submit']").click();
      cy.get("div[id='content'] h1").should('contain', 'Your Account Has Been Created!');
    });
  
    it('Invalid Registration - Email already used', () => {
      cy.get('#input-firstname').type('ahmed');
      cy.get('#input-lastname').type('ejaz');
      cy.get('#input-email').type('ejaz4@gmail.com');
      cy.get('#input-password').type('password1235');
      cy.get("input[value='1'][name='agree']").check();
      cy.get("button[type='submit']").click();
      cy.get("div[id='content'] h1").should('not.have.text', 'Your Account Has Been Created!');
    });

    it('Invalid Registration - Invalied input', () => {
      cy.get('#input-firstname').type('xgzdf');
      cy.get('#input-lastname').type('cfdz');
      cy.get('#input-email').type('wefdcj2331');
      cy.get('#input-password').type('password1235');
      cy.get("input[value='1'][name='agree']").check();
      cy.get("button[type='submit']").click();
      cy.get("div[id='content'] h1").should('not.have.text', 'Your Account Has Been Created!');
    });

    it('Invalid Registration - Not agree to terms and conditions', () => {
      cy.get('#input-firstname').type('ahmed');
      cy.get('#input-lastname').type('ejaz');
      cy.get('#input-email').type('ejaz5@gmail.com');
      cy.get('#input-password').type('password1235');
      cy.get("button[type='submit']").click();
      cy.get("div[id='content'] h1").should('not.have.text', 'Your Account Has Been Created!');
    });
  
    it('Empty Fields', () => {
      cy.get('#input-email').type('ejaz5@gmail.com');
      cy.get('#input-password').type('password1235');
      cy.get("input[value='1'][name='agree']").check();
      cy.get("button[type='submit']").click();
      cy.get("div[id='content'] h1").should('not.have.text', 'Your Account Has Been Created!');
    });
  
    
  });
  