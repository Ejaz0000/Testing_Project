import Index from "../pageObjects"

describe("responsive design",()=>{   
    describe("on phone",()=>{
        ["portrait","landscape"].forEach(orientation =>{
        describe(`in ${orientation}`,()=>{     
            const response = new Index();
        beforeEach(()=>{
            cy.visit("http://localhost/opencart/index.php")  
            cy.viewport("iphone-6",orientation)
        })           
         it("check the header of the page",()=>{
            response.checkHeader()
         })
         it("check the logo of the page",()=>{
            response.checkLogo()
        })
        it("check the search of the page",()=>{
            response.checksearch()
        })
        it("check the Nav bar of the page",()=>{
            response.checkNavbar()
        })
        it("check the featured products",()=>{
            response.checkFeatured()
        })
        it("check the footer of the page",()=>{
            response.checkFooter()
        })
         })    

        })     
    })

    describe("on tablet",()=>{
        ["portrait","landscape"].forEach(orientation =>{
            describe(`in ${orientation}`,()=>{  
                const response = new Index();
            beforeEach(()=>{
                cy.visit("http://localhost/opencart/index.php")  
                cy.viewport("ipad-2",orientation)
            })  
             it("check the header of the page",()=>{
                 response.checkHeader()
             })
             it("check the logo of the page",()=>{
                response.checkLogo()
            })
            it("check the search of the page",()=>{
                response.checksearch()
            })
            it("check the Nav bar of the page",()=>{
                if(orientation == 'portrait'){
                    response.checkNavbar()
                }
                else{
                    cy.get("#menu").should("be.visible")
                     cy.get(".nav-item").should("have.length",'8')
                    cy.get(".nav-item").should("have.length",'8')

                    cy.get(".nav-item").first().click()
                    cy.xpath("//a[normalize-space()='PC (0)']").should("be.visible")
                }
            })
            it("check the featured products",()=>{
                response.checkFeatured()
            })
            it("check the footer of the page",()=>{
                response.checkFooter()
            })
                })
            })
    })

    
})