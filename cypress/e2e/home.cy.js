describe('Spring Music App', () => {
  const baseUrl = 'https://spring-music-hgckhuf3gza0bvb2.canadacentral-01.azurewebsites.net/';

  it('affiche la page d’accueil', () => {
    cy.visit(baseUrl);
    cy.contains('Spring Music').should('exist');
  });

  it('ajoute un album "Test Album"', () => {
    cy.visit(baseUrl);
    cy.get('a[ng-click="addAlbum()"]').click();
    cy.get('#title').type('Test Album');
    cy.get('#artist').type('Test Artist');
    cy.get('#releaseYear').type('2024');
    cy.get('#genre').type('Test Genre');
    cy.get('button[ng-click="ok()"]').click();
    cy.contains('Test Album').should('exist');
  });

  it('ajoute un autre album "Everything"', () => {
    cy.visit(baseUrl);
    cy.get('a[ng-click="addAlbum()"]').click();
    cy.get('#title').type('Everything');
    cy.get('#artist').type('Avril Lavigne');
    cy.get('#releaseYear').type('2012');
    cy.get('#genre').type('Pop');
    cy.get('button[ng-click="ok()"]').click();
    cy.contains('Everything').should('exist');
  });

describe('Suppression d’un album', () => {
  it('supprime un album nommé "Test Album"', () => {
    const albumName = 'Pet Sounds';

    // Aller sur l’application
    cy.visit('https://spring-music-hgckhuf3gza0bvb2.canadacentral-01.azurewebsites.net');

    // Vérifie que l’album existe et clique sur supprimer
    cy.contains('td', albumName, { timeout: 10000 })
      .should('exist')
      .parent('tr')
      .within(() => {
        cy.get('.glyphicon-cog').click();
        cy.contains('a', 'delete').click();
      });

    // Vérifie qu’il a bien été supprimé
    cy.contains('td', albumName).should('not.exist');
  });
});




});
