describe('Product Search Functionality', () => {
    beforeEach(() => {
      cy.visit('http://localhost/opencart/index.php?route=common/home&language=en-gb');
    });
  
    it('Search for a Product', () => {
      const searchTerm = 'iphone'; 
      cy.get("input[placeholder='Search']").type(searchTerm);
      cy.get('.btn.btn-light.btn-lg').click();
      cy.xpath("//body/main/div[@id='product-search']/div[@class='row']/div[@id='content']/div[@id='product-list']/div").should("have.length.above",0)
    });

    it('Search for a Product using upercase lowercase letter', () => {
        const searchTerm = 'iPhOnE'; 
        cy.get("input[placeholder='Search']").type(searchTerm);
        cy.get('.btn.btn-light.btn-lg').click();
        cy.xpath("//body/main/div[@id='product-search']/div[@class='row']/div[@id='content']/div[@id='product-list']/div").should("have.length.above",0)
      });

    it('Search for a Product by catagory', () => {
        const searchTerm = 'Desktop'; 
        cy.get("input[placeholder='Search']").type(searchTerm);
        cy.get('.btn.btn-light.btn-lg').click();
        cy.xpath("//body/main/div[@id='product-search']/div[@class='row']/div[@id='content']/div[@id='product-list']/div").should("have.length.above",0)
      });

      
  
    it('Empty Search', () => {
        cy.get('.btn.btn-light.btn-lg').click();
        cy.xpath("//body/main/div[@id='product-search']/div[@class='row']/div[@id='content']/div[@id='product-list']/div").should("have.length",0)
    });
  
   
  });
  