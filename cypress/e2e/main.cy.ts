import homePage from '../support/pages/home_page'

const home = new homePage()

describe('UI Automation test for Buggy Cars.', () => {

  beforeEach(() => {
    cy.visit('')
    home.verifyLandingPage()
  })

  it('will log user in successfully', () => {  
    cy.fixture('data').then((dataJSON) => {
      home.userLogin(dataJSON.login, dataJSON.password)     
    })
  })

  it('will navigate to and display the Popular Make page', () => {
    home.viewPopularMake()
  })
    
  it('will navigate to and display the Overall Rating page', () => {
    home.viewOverallRating()
  })

  it('will sort rating table by car make', () => {
    home.viewOverallRating()
    home.sortColumn("Make")
    cy.get(".card-header").should(
      'contain.text', 
      'Alfa Romeo'
    )
  })

})