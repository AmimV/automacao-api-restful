import postRequest from '../../fixtures/postRequest.json';
import putRequest from '../../fixtures/putRequest.json';
import patchRequest from '../../fixtures/patchRequest.json';

var url: string, endpointObject: string, idProduct: string;

export const APIPages = {
  setEndpoint(endpoint: string) {
    url = endpoint;
  },

  enviarAPIRequest(metodo: string) {
    switch (metodo) {
      case 'GET':
        return this.getRequest();
      case 'POST':
        return this.postRequest();
      case 'PUT':
        return this.putRequest();
      case 'PATCH':
        return this.patchRequest();
      case 'DELETE':
        return this.deleteRequest();
      default:
        throw new Error(`Método ${metodo} não é válido!`);
    }
  },

  getRequest() {
    cy.request('GET', url).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).not.null;
    });
  },

  postRequest() {
    cy.request('POST', url, postRequest).then((response) => {
      idProduct = response.body.id;
      endpointObject = url + '/' + idProduct;
      expect(response.status).to.eq(200);
      expect(response.body.name).to.eq(postRequest.name);
      expect(response.body.data.year).to.eq(postRequest.data.year);
      expect(response.body.data.price).to.eq(postRequest.data.price);
      expect(response.body.data['CPU model']).to.eq(postRequest.data['CPU model']);
      expect(response.body.data['Hard disk size']).to.eq(postRequest.data['Hard disk size']);
    });
  },

  putRequest() {
    cy.request('PUT', endpointObject, putRequest).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body.name).contains(putRequest.name);
      expect(response.body.data.year).to.eq(putRequest.data.year);
      expect(response.body.data.price).to.eq(putRequest.data.price);
      expect(response.body.data['CPU model']).to.eq(putRequest.data['CPU model']);
      expect(response.body.data['Hard disk size']).to.eq(putRequest.data['Hard disk size']);
    });
  },

  patchRequest() {
    cy.request('PATCH', endpointObject, patchRequest).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body.name).to.equal(patchRequest.name);
    });
  },

  deleteRequest() {
    cy.request('DELETE', endpointObject).its('body.message').should('eq', `Object with id = ${idProduct} has been deleted.`);
  },
};
