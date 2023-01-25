import homePage from '../pages/home_page'
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

const home = new homePage()

Given("I visit Buggy Cars Rating website", () => {
    cy.visit('')
    home.verifyLandingPage()
})

When("I log in using a valid user and password", () => {
    cy.fixture('data').then((dataJSON) => {
        home.userLogin(dataJSON.login, dataJSON.password)     
      })
})

When("I click on Popular Make section", () => {
    home.viewPopularMake()
})

When("I click on Overall Rating section", () => {
    home.viewOverallRating()
})

When("I click on MAKE column", () => {
    home.sortColumn("Make")
})

When("I click on RANK column", () => {
    home.sortColumn("Rank")
})

Then("I should see the Alfa Romeo car make", () => {
    cy.get(".card-header").should(
        'contain.text', 
        'Alfa Romeo'
    )
})

Then("I should be successfully logged in", () => {
    cy.get(".nav-item > .nav-link").should(
        'contain.text', 
        'icecream'
    );
})

Then("the car make is sorted in ASC order", () => {
    cy.get('tbody > :nth-child(1) > :nth-child(2)').should(
        'contain.text', 
        'Alfa Romeo'
    )
    cy.get('tbody > :nth-child(2) > :nth-child(2)').should(
        'not.contain.text', 
        'Lamborghini'
    )
})

Then("the car make is sorted in DESC order", () => {
    cy.get('tbody > :nth-child(1) > :nth-child(2)').should(
        'not.contain.text', 
        'Alfa Romeo'
    )
})

Then("the rank is sorted in ASC order", () => {
    cy.get('tbody > :nth-child(1) > :nth-child(4)').should(
        'contain.text', 
        '1'
    )
    cy.get('tbody > :nth-child(2) > :nth-child(4)').should(
        'contain.text', 
        '2'
    )
})