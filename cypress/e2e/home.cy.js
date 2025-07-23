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

  it('supprime un album nommé "Test Album"', () => {
    const albumName = 'Test Album';

    cy.visit(baseUrl);

    // On trouve le <span> contenant le nom, on remonte au tr parent, puis on clique sur roue puis delete
    cy.contains('span.ng-binding', albumName)
      .should('be.visible')
      .parents('tr')
      .within(() => {
        cy.get('.glyphicon-cog').click();
        cy.contains('a', 'delete').click();
      });

    // Vérifie que l'album n'existe plus
    cy.contains('span.ng-binding', albumName).should('not.exist');
  });

});
