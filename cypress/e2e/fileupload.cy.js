describe('File upload Test', () => {

    it('Assignment upload successfully', () => {
      
      cy.visit('https://school.moodledemo.net/login/index.php');
      cy.get('#username').type('student');
      cy.get('#password').type('moodle');
      cy.get('#loginbtn').click();
      cy.get('.mb-3.mt-3').should('contain', 'Welcome');

      cy.get("li[data-key='myhome'] a[role='menuitem']").click()
      cy.get("a[title='Assignment 02 (16th century) is due']").click()
      cy.get("button[class='btn btn-primary']").click()
      cy.wait(5000)
      cy.get("div[class='dndupload-message'] div[class='dndupload-arrow d-flex']").click()
      cy.get("input[name='repo_upload_file']").attachFile('icone-github.png')
      cy.get('.fp-upload-btn.btn-primary.btn').click()
      
      cy.wait(5000)

      cy.get("#id_submitbutton").click()
      cy.get("a[target='_blank']").should('contain',"icone-github.png")



    });

    


  });
  