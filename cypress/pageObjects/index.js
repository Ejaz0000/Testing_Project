class Index
{

    checkPerformance(){
        cy.lighthouse(
            {
              performance: 80,
              accessibility: 90,
              "best-practices": 95,
              seo: 85,
              pwa: 90,
              },
            //   {
            //     formFactor: 'desktop',
            //     screenEmulation: { disabled: true },
            //   },
        );
    
    
    }

    checkHeader(){
       
       cy.get("#top").should("be.visible")
    }

    checkLogo(){
        
        cy.get("#logo").should("be.visible")
    }
    checksearch(){
        
        cy.get("#search").should("be.visible")
    }

    checkNavbar(){
       
        cy.get("#menu").should("be.visible")
            cy.get(".nav-item").should("have.length",'8')
            cy.get(".nav-item").should("have.length",'8')
            cy.get(".navbar-toggler").first().click()
            cy.get(".nav-item").first().click()
            cy.xpath("//a[normalize-space()='PC (0)']").should("be.visible")
    }
    checkFeatured(){
        
        cy.xpath("//body/main/div[@id='common-home']/div[@class='row']/div[@id='content']/div[@class='row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4']/div")
            .should('have.length',4)
    }
    checkFooter(){
        
        cy.get("body footer").should("be.visible")
    }
}

export default Index