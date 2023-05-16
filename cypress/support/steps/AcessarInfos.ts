import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import { AcessarInfos } from '../pages/AcessarInfos';

Given('Que o usuário acessa a pagina inicial do site', () => {
  AcessarInfos.acessarSite();
});

When('acessa a pagina Rest Fundamentals', () => {
  AcessarInfos.clicarRestFundamentals();
});

And('clica em Privacy Policy no fim da pagina', () => {
  AcessarInfos.clicarPrivacyPolicy();
});

And('clica em Contact no fim da pagina', () => {
  AcessarInfos.clicarContact();
});

Then('valida que acessou a pagina corretamente', () => {
  AcessarInfos.validarTelaContact();
});
