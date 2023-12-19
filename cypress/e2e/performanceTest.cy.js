import Index from "../pageObjects"


describe("Home page test",()=>{
    before(()=>{
      cy.visit('/')
    })
    it("Performance check",()=>{
        
        const index = new Index();
        index.checkPerformance()
        
    })
})