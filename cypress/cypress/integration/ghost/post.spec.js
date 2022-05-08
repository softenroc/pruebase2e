describe('New Post', () => {
    beforeEach(()=>{
       cy.visit('http://localhost:2368/ghost/#/signin')
       cy.wait(4000)
    })

    it('Login ', () => {
        cy.get('input[id="ember8"]').type('ochoaortizj@gmail.com')
        cy.wait(2000)
        cy.get('input[id="ember10"]').type('0123456789')
        cy.wait(2000)
        cy.get('button[id="ember12"]').click()
        cy.wait(4000)
        cy.visit('http://localhost:2368/ghost/#/posts')
        cy.wait(2000)
        cy.get('a[XPath ="/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/header[1]/section[1]/a[1]').click()
        cy.wait(2000)
        cy.get('textarea[id="/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/div[1]/div[1]/textarea[1]"]').type('Prueba Post')
        cy.wait(2000)
        cy.get('article[id="/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/div[1]/div[1]/article[1]/div[1]/div[1]"]').type('Prueba Post')
    })
  })