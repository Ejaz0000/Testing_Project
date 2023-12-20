describe('Search Box Test', () => {
    it('should search for a term', () => {
      
      cy.visit('https://school.moodledemo.net/my/courses.php');
  
      cy.get('#searchinput-6553b1c8d5d746553b1c8d5d751').type('Art and Media{enter}');
  
      cy.get('body > div:nth-child(2) > div:nth-child(8) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > section:nth-child(1) > div:nth-child(2) > aside:nth-child(2) > section:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)').should('be.visible');
    });
  
  it('for empty turm', () => {
      
    cy.visit('https://school.moodledemo.net/my/courses.php');
  
    cy.get('#searchinput-6553b1c8d5d746553b1c8d5d751').type('{enter}');
  
    cy.get('body > div:nth-child(2) > div:nth-child(8) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > section:nth-child(1) > div:nth-child(2) > aside:nth-child(2) > section:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)').should('be.visible');
  });
  });