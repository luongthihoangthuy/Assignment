import HomePage from './HomePage'

class SearchResultPage extends HomePage{
    displayTitle(){
    cy.get('h2').as('Title')
    cy.get('@Title').should('have.text','Weather in your city')
    }
}

export default SearchResultPage