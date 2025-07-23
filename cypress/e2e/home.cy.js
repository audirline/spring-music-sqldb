describe('Spring Music App', () => {
  const baseUrl = 'https://spring-music-hgckhuf3gza0bvb2.canadacentral-01.azurewebsites.net/';

  it('affiche la page d’accueil', () => {
    cy.visit(baseUrl);
    cy.contains('Spring Music').should('exist');
  });

it('adds an album', () => {
  cy.visit('https://spring-music-hgckhuf3gza0bvb2.canadacentral-01.azurewebsites.net/')
  cy.get('a[ng-click="addAlbum()"]').click()
  cy.get('#title').type('Test Album')
  cy.get('#artist').type('Test Artist')
  cy.get('#releaseYear').type('2024')
  cy.get('#genre').type('Test Genre')
  cy.get('button[ng-click="ok()"]').click()
  cy.contains('Test Album').should('exist')
})

it('adds an album', () => {
  cy.visit('https://spring-music-hgckhuf3gza0bvb2.canadacentral-01.azurewebsites.net/')
  cy.get('a[ng-click="addAlbum()"]').click()
  cy.get('#title').type('Everything')
  cy.get('#artist').type('Avril Lavigne')
  cy.get('#releaseYear').type('2012')
  cy.get('#genre').type('Pop')
  cy.get('button[ng-click="ok()"]').click()
  cy.contains('Everything').should('exist')
})


it('delete an album', () => {
  cy.visit('https://spring-music-hgckhuf3gza0bvb2.canadacentral-01.azurewebsites.net/')
  cy.contains('tr', 'Test Album').within(() => {
    cy.get('.glyphicon-cog').click()
    cy.contains('delete').click()
  })
  // Vérifie que l’album n’est plus dans la liste
  cy.contains('Test Album').should('not.exist')
})


});
