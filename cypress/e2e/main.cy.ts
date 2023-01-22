import homePage from '../support/pages/home_page'

const home = new homePage()

describe('UI Automation test for Buggy Cars.', () => {

  beforeEach(() => {
    cy.visit('')
    home.verifyLandingPage()
  })

  it('User logs in successfully', () => {  
    cy.fixture('data').then((dataJSON) => {
      home.userLogin(dataJSON.login, dataJSON.password)     
    })
  })

  it('View Popular Make', () => {
    home.viewPopularMake()
  })
    
  it('View Overall Rating', () => {
    home.viewOverallRating()
  })
})