import HomePage from '../page-objects/HomePage'
import SearchResultPage from '../page-objects/SearchResultsPage'
import {valid_keyword, invalid_keyword} from '../fixtures/searchdata'


describe('Search validation', () => {

    const homePage = new HomePage()
    const searchResultsPage = new SearchResultPage()

    beforeEach(function(){
        homePage.visit()
    })

    it('Search for value via Search Box on Navigation Bar', function() {
        homePage.search_nav(valid_keyword)
        searchResultsPage.displayTitle()
    })

    it('Search for non-existence value via Search Box on Navigation Bar', function() {
        homePage.search_nav_nonexistencevalue(invalid_keyword)
    })

    it('Search for value via Search Box on Search Widget', function() {
        homePage.search_widget(valid_keyword)
    })

    it('Search for non-existence value via Search Box on Search Widget', function() {
        homePage.search_widget_nonexistencevalue(invalid_keyword)
    })
})
