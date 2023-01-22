const homeTitle = '.display-4'
const loginField = '.input-sm'
const passwordField = '.ng-pristine'
const loginButton = '.btn-success'
const popularMake = ':nth-child(1) > .card > a > .img-fluid'
const overallRating = ':nth-child(3) > .card > a > .img-fluid'

class homePage {

    verifyLandingPage() {
        cy.get(homeTitle).should('include.text', 'BuggyCarsRating')
    }

    userLogin(login: string, password: string) {  
        cy.get(loginField).type(login)
        cy.get(passwordField).type(password)        
        cy.get(loginButton).click()
    }

    viewPopularMake() {
        cy.get(popularMake).click()
        cy.url().should('include', '/make')
    }

    viewOverallRating() {
        cy.get(overallRating).click()
        cy.url().should('include', '/overall')
    }
}

export default homePage