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


  it('supprime un album', () => {
    cy.visit(baseUrl);
    cy.contains('Nouvel Album').parent().contains('Delete').click();
    cy.contains('Nouvel Album').should('not.exist');
  });
});
