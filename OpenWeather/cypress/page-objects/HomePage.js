
class HomePage{

    visit(){
        cy.visit('https://openweathermap.org/')
    }

    //search for existing value from nav search form on the navigation bar
    search_nav(keyword){
        cy.get('.hamburger img').click()
        cy.get('input#q').as('SearchBox')
        cy.get('@SearchBox').type(keyword).type('{enter}')
        cy.url().should('contain','find?q=Atlanta')      
       
    }

   // search for non-existence value from the search navigation bar
    search_nav_nonexistencevalue(keyword){
        cy.get('.hamburger img').click()
        cy.get('input#q').as('SearchBox')
        cy.get('@SearchBox').type(keyword).type('{enter}')
        cy.get('#search_str').should('have.value', keyword)
        cy.get('.alert').contains('Not found')
        
    }

    //search for existing value from the weather widget section
    search_widget(keyword){

        cy.get('div.search-container').click()
        cy.get('input[placeholder="Search city"]').click({force:true}).type(keyword)
        cy.get('button[type="submit"]').click()
        cy.get('ul.search-dropdown-menu>li').first().click()
        cy.get('div.current-container> div:nth-child(1) > h2').should('have.text', keyword)
       
    }

    // search for non-existence value from the search widget section
    search_widget_nonexistencevalue(keyword){
        cy.get('div.search-container').click()
        cy.get('input[placeholder="Search city"]').click({force:true}).type(keyword)
        cy.get('button[type="submit"]').click()
        cy.get('.sub.not-found.notFoundOpen').should('contain', 'Not found.') 
        //cy.get('.alert').contains('Not found')
        
    }
}
export default HomePage