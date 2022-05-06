describe('Testing login ghost', () => {
    beforeEach(()=>{
       cy.visit('http://localhost:2368/ghost/#/signin')
       cy.wait(4000)
    })

    it('Login ', () => {
        cy.get('input[id="ember8"]').type('df.rojasr1@uniandes.edu.co')
        cy.wait(2000)
        cy.get('input[id="ember10"]').type('abcd1234567')
        cy.wait(2000)
        cy.get('button[id="ember12"]').click()
        cy.wait(10000)
    })
  })