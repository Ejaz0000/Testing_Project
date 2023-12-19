

describe('Buy products',()=>{


    describe('Add to cart',()=>{

        afterEach(()=>{
            cy.visit('http://localhost/opencart/index.php?route=common/home&language=en-gb')
            cy.xpath("//a[@title='Shopping Cart']").click()
            cy.get('body > main:nth-child(4) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > table:nth-child(1) > tbody:nth-child(2) > tr').each(($row, index, $rows) => {
                
                cy.get(`table > tbody > tr:nth-child(${index + 1}) > td:nth-child(4) > form > div >button.btn.btn-danger`).click()

              });
        })

        it('Add one item to the cart',()=>{
            cy.visit('http://localhost/opencart/index.php?route=common/home&language=en-gb')
            cy.get('body > main:nth-child(4) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)').click()
            cy.get('#button-cart').click()
            cy.wait(5000)
            cy.xpath("//a[@title='Shopping Cart']").click()
            cy.xpath("//td[@class='text-start text-wrap']//a[contains(text(),'MacBook')]").should('contain','MacBook')

        })

        it('Add multiple item to the cart',()=>{
            cy.visit('http://localhost/opencart/index.php?route=common/home&language=en-gb')
            cy.get('body > main:nth-child(4) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)').click()
            cy.get('#button-cart').click()
            cy.visit('http://localhost/opencart/index.php?route=common/home&language=en-gb')
            cy.get('body > main:nth-child(4) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1)').click()
            cy.get('#button-cart').click()
            cy.wait(5000)
            cy.xpath("//a[@title='Shopping Cart']").click()
            cy.get('body > main:nth-child(4) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > table:nth-child(1) > tbody:nth-child(2) > tr').should('have.length',2)
            
        })
      
    })
    
})