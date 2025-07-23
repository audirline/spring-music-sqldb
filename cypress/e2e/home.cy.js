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

it('supprime un album', () => {

  // Trouve la ligne contenant le nom de l'album
  cy.contains('Test Album')
    .should('exist') // vérifie que l'album est bien là
    .parents('tr')   // remonte jusqu'à la ligne du tableau
    .within(() => {
      // Clique sur l'icône d'engrenage
      cy.get('.glyphicon-cog').click();

      // Clique sur le lien 'delete'
      cy.contains('a', 'delete').click();
    });

  // Vérifie que l'album n'est plus présent
  cy.contains('span', albumName).should('not.exist');
});


});
