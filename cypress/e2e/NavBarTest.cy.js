describe('Navbar Functionality Tests', () => {
    beforeEach(() => {
        cy.visit("/")  
    });
  
    it('Check First Item', () => {
      cy.get(".nav-item").first().click();
      cy.xpath("//a[normalize-space()='PC (0)']").click();
      cy.get("div[id='content'] h2").should('contain','Desktops');
      cy.get(".nav-item").first().click();
      cy.xpath("//a[normalize-space()='Mac (1)']").click();
      cy.get("div[id='content'] h2").should('contain','Desktops');
    });

    it('Check Second Item', () => {
        cy.get(".nav-item").eq(1).click();
        cy.xpath("//a[normalize-space()='Macs (0)']").click();
        cy.get("div[id='content'] h2").should('contain','Laptops & Notebooks');
        cy.get(".nav-item").eq(1).click();
        cy.xpath("//a[normalize-space()='Windows (0)']").click();
        cy.get("div[id='content'] h2").should('contain','Laptops & Notebooks');
      });

      it('Check Third Item', () => {
        cy.get(".nav-item").eq(2).click();
        cy.xpath("//a[normalize-space()='Mice and Trackballs (0)']").click();
        cy.get("div[id='content'] h2").should('contain','Components');
        cy.get(".nav-item").eq(2).click();
        cy.xpath("//a[normalize-space()='Monitors (2)']").click();
        cy.get("div[id='content'] h2").should('contain','Components');
        cy.get(".nav-item").eq(2).click();
        cy.xpath("//a[normalize-space()='Printers (0)']").click();
        cy.get("div[id='content'] h2").should('contain','Components');
        cy.get(".nav-item").eq(2).click();
        cy.xpath("//a[normalize-space()='Scanners (0)']").click();
        cy.get("div[id='content'] h2").should('contain','Components');
        cy.get(".nav-item").eq(2).click();
        cy.xpath("//a[normalize-space()='Web Cameras (0)']").click();
        cy.get("div[id='content'] h2").should('contain','Components');
      });
    
      it('Check Fourth Item', () => {
        cy.get(".nav-item").eq(3).click();
        cy.get("div[id='content'] h2").should('contain','Tablets');
      });

      it('Check Fifth Item', () => {
        cy.get(".nav-item").eq(4).click();
        cy.get("div[id='content'] h2").should('contain','Software');
      });

      it('Check Sixth Item', () => {
        cy.get(".nav-item").eq(5).click();
        cy.get("div[id='content'] h2").should('contain','Phones & PDAs');
      });

      it('Check Seventh Item', () => {
        cy.get(".nav-item").eq(6).click();
        cy.get("div[id='content'] h2").should('contain','Cameras');
      });

      it('Check Eighth Item', () => {
        cy.get(".nav-item").eq(7).click();
        cy.get("div[id='content'] h2").should('contain','MP3');
      });
  
    
  });
  