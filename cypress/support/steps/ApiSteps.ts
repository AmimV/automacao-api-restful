import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import { APIPages } from '../pages/APIPages';

Given('O usuario define a url principal {string}', (endpoint) => {
  APIPages.setEndpoint(endpoint);
});

Then('Valida a requisição {string}', (metodo) => {
  APIPages.enviarAPIRequest(metodo);
});
