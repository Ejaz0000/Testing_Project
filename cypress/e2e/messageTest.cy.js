describe('MessageTest', () => {

    it('Message Test', () => {
      
      cy.visit('https://school.moodledemo.net/login/index.php');
      cy.get('#username').type('student');
      cy.get('#password').type('moodle');
      cy.get('#loginbtn').click();
      cy.get('.mb-3.mt-3').should('contain', 'Welcome');


      cy.get("i[title='Toggle messaging drawer']").click();
      cy.xpath("//span[normalize-space()='Private']").click();
      cy.xpath("//strong[normalize-space()='Margaret Rivera']").click();
      cy.wait(5000)
      cy.get('textarea[data-region="send-message-txt"]').type("Hello");
      cy.wait(5000)
      cy.get(".icon.fa.fa-paper-plane.fa-fw").click();
      cy.wait(5000)
      cy.get('div[data-region="day-container"]:last-of-type > div[data-region="day-messages-container"] > div[data-region="message"]:last-of-type > div[data-region="text-container"]').should('have.text',"Hello");



    });

    


  });
  