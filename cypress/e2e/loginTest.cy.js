describe('Login Test', () => {
    it('should successfully log in', () => {
      // Visit the login page
      cy.visit('https://school.moodledemo.net/login/index.php');
  
      // Enter username and password
      cy.get('#username').type('student');
      cy.get('#password').type('moodle');
  
      // Submit the login form
      cy.get('#loginbtn').click();
  
      // Assert that the login was successful
    //   cy.url().should('include', '/dashboard');
     cy.get('.mb-3.mt-3').should('contain', 'Welcome');
    });
  });
  