export const AcessarInfos = {
  acessarSite() {
    /* Necessário tratar a exceção que está dando ao acessar o site */
    cy.on('uncaught:exception', (err, runnable) => {
      return false;
    });
    cy.visit('https://restful-api.dev');
  },

  clicarRestFundamentals() {
    cy.get('[href="/rest-fundamentals#rest"]').click();
    cy.get('#rest')
      .invoke('text')
      .then((text) => {
        expect(text.toLocaleLowerCase()).to.eq('rest fundamentals');
      });
  },

  clicarPrivacyPolicy() {
    cy.get(':nth-child(2) > .menu-link').scrollIntoView().click();
    cy.get('#text')
      .invoke('text')
      .then((text) => {
        expect(text.toLocaleLowerCase()).to.eq('privacy policy');
      });
  },

  clicarContact() {
    cy.get(':nth-child(3) > .menu-link').scrollIntoView().click();
  },

  validarTelaContact() {
    cy.get('h2')
      .invoke('text')
      .then((text) => {
        expect(text.toLocaleLowerCase()).to.eq('contact');
      });
  },
};
