describe('New Post', () => {
    beforeEach(()=>{
        cy.log("Given I navigate to admin page");
        cy.visit('http://localhost:2368/ghost/#/signin')
        cy.wait(4000)
    })

    it('Modificamos un post.', () => {
        cy.log("and I enter email");
        cy.get('input[id="ember8"]').type('ochoaortizj@gmail.com')
        cy.wait(2000)
        cy.log("and I enter password");
        cy.get('input[id="ember10"]').type('0123456789')
        cy.wait(2000)
        cy.log("And I click botton");
        cy.get('button[id="ember12"]').click()
        cy.wait(4000)
        cy.log("And I navigate to page post");
        cy.visit('http://localhost:2368/ghost/#/posts')
        cy.wait(2000)
        cy.log("And I click in prueba post");
        cy.get('a[id="ember99').click()
        cy.wait(2000)
        cy.log("And I enter title modificated");
        cy.get('textarea[id="ember150"]').type(' 2')
        cy.wait(2000)
        cy.log("And I save");
        cy.get('a[id="ember144').click()
        cy.wait(2000)
        cy.log("And I click in prueba post");
        cy.get('a[id="ember250').click()
        cy.wait(2000)
        cy.log("And validate");
        cy.get('textarea[id="ember301"]').should("have.value", "Prueba Post 2");
    })
  })