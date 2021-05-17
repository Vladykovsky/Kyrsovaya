import { Given, Then } from 'cypress-cucumber-preprocessor/steps';

Given('I open the home page', () => {
  cy.visit('http://localhost:3000');
});

Given('I open the login page', () => {
  cy.visit('http://localhost:3000/login');
});

Then('The Eagle', () => {
  cy.title().should('include', 'Club Sports');
});

Then('Karate training at 19:30 PM', () => {
  cy.get('div').should('contain.text', 'Karate training at 19:30 PM');
});
