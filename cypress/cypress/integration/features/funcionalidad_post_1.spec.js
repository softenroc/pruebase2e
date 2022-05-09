describe('New Post', () => {
    beforeEach(()=>{
        cy.log("Given I navigate to admin page");
        cy.visit('http://localhost:2368/ghost/#/signin')
        cy.wait(4000)
    })

    it('Creamos un nuevo post.', () => {
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
        cy.log("And I click to new post");
        cy.get('a[id = "ember96"').click()
        cy.wait(2000)
        cy.log("And I enter title");
        cy.get('textarea[id="ember138"]').type('Prueba Post')
        cy.wait(2000)
        cy.log("And I enter description");
        cy.get('article[id="ember139').type('Prueba Post')
        cy.wait(2000)
        cy.log("And I save");
        cy.get('a[id="ember135').click()
        cy.wait(2000)
        cy.log("And I click in prueba post");
        cy.get('a[id="ember244').click()
        cy.wait(2000)
        cy.log("And validate");
        cy.get('textarea[id="ember295"]').should("have.value", "Prueba Post");
    })
  })