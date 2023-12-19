

describe('Buy products',()=>{

   

        it('Add multiple items to the cart',()=>{
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

        it('Should not checkout without required input',()=>{
            cy.visit('http://localhost/opencart/index.php?route=common/home&language=en-gb')
            cy.get('body > main:nth-child(4) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)').click()
            cy.get('#button-cart').click()
            cy.visit('http://localhost/opencart/index.php?route=common/home&language=en-gb')
            cy.get('body > main:nth-child(4) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1)').click()
            cy.get('#button-cart').click()
            cy.wait(5000)
            cy.xpath("//a[@title='Shopping Cart']").click()
            cy.get("a[class='btn btn-primary']").click()
            cy.get("#button-shipping-methods").click()
            cy.get("#error-shipping-method").should('contain','Shipping address required!')
             
        })

        it('Should not checkout without payment method and shipment method selected',()=>{
            cy.visit('http://localhost/opencart/index.php?route=common/home&language=en-gb')
            cy.get('body > main:nth-child(4) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)').click()
            cy.get('#button-cart').click()
            cy.visit('http://localhost/opencart/index.php?route=common/home&language=en-gb')
            cy.get('body > main:nth-child(4) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1)').click()
            cy.get('#button-cart').click()
            cy.wait(5000)
            cy.xpath("//a[@title='Shopping Cart']").click()
            cy.get("a[class='btn btn-primary']").click()
            cy.get('#input-firstname').type('ejaz');
            cy.get('#input-lastname').type('ahmed');
            cy.get('#input-email').type('ejaz9982@gmail.com');
            cy.get('#input-shipping-address-1').type('street01');
            cy.get('#input-shipping-city').type('dhaka');
            cy.get('#input-password').type('password123');
            cy.get('#input-shipping-country').select('Bangladesh')
            cy.get('#input-shipping-zone').select('Dhaka')
            cy.get("#input-register-agree").click()
            cy.get("#button-register").click()

            cy.xpath("//button[normalize-space()='Confirm Order']").should('be.disabled')
            

             
        })

        it('Should checkout',()=>{
            cy.visit('http://localhost/opencart/index.php?route=common/home&language=en-gb')
            cy.get('body > main:nth-child(4) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)').click()
            cy.get('#button-cart').click()
            cy.visit('http://localhost/opencart/index.php?route=common/home&language=en-gb')
            cy.get('body > main:nth-child(4) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1)').click()
            cy.get('#button-cart').click()
            cy.wait(5000)
            cy.xpath("//a[@title='Shopping Cart']").click()
            cy.get("a[class='btn btn-primary']").click()
            cy.get('#input-firstname').type('ejaz');
            cy.get('#input-lastname').type('ahmed');
            cy.get('#input-email').type('ejaz8892@gmail.com');
            cy.get('#input-shipping-address-1').type('street01');
            cy.get('#input-shipping-city').type('dhaka');
            cy.get('#input-password').type('password123');
            cy.get('#input-shipping-country').select('Bangladesh')
            cy.get('#input-shipping-zone').select('Dhaka')
            cy.get("#input-register-agree").click()
            cy.get("#button-register").click()
            cy.wait(5000)
            cy.get("#button-shipping-methods").click()
            cy.wait(5000)
            cy.get('input[type="radio"]').check('flat.flat')
            cy.wait(5000)
            cy.get('#button-shipping-method').click()
            cy.wait(5000)
            cy.get("#button-payment-methods").click()
            cy.wait(5000)
            cy.get('input[type="radio"]').check('cod.cod')
            cy.wait(5000)
            cy.get('#button-payment-method').click()
            cy.wait(1000)
            cy.get('#button-confirm').click()
            cy.get("div[id='content'] h1").should('contain','Your order has been placed!')

             
        })
      
    

    
})