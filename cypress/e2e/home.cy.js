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

it('modifie le nom d’un album', () => {
  const oldName = 'Test Album';
  const newName = 'Test Album Modified';
  cy.visit('/');
  // Trouver un élément visible contenant "Test Album"
  cy.contains('span.ng-binding', oldName)
    .filter(':visible') // Sélectionne uniquement les éléments visibles
    .first() // Prend le premier
    .click({ force: true }) // 1er clic
    .click({ force: true }); // 2e clic pour activer le champ
  // Champ input visible pour édition
  cy.get('input[name="title"]:visible')
    .clear()
    .type(`${newName}{enter}`);
  // Vérifie que le nouveau nom apparaît
  cy.contains('span.ng-binding', newName).should('exist');
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


it('modifie le nom d’un album Everything', () => {
  const oldName2 = 'Everything';
  const newName2 = 'Everything Modified';
  cy.visit('/');
  // Trouver un élément visible contenant "Everything"
  cy.contains('span.ng-binding', oldName2)
    .filter(':visible') // Sélectionne uniquement les éléments visibles
    .first() // Prend le premier
    .click({ force: true }) // 1er clic
    .click({ force: true }); // 2e clic pour activer le champ
  // Champ input visible pour édition
  cy.get('input[name="title"]:visible')
    .clear()
    .type(`${newName2}{enter}`);
  // Vérifie que le nouveau nom apparaît
  cy.contains('span.ng-binding', newName2).should('exist');
});


 it('supprime un album nommé "Test Album Modified"', () => {
  const albumName = 'Test Album';
  cy.visit(baseUrl);
  // Trouver le span qui contient le nom de l'album
  cy.contains('span.ng-binding', albumName)
    .should('be.visible')
    // remonte jusqu'à un parent qui contient tout l'album, par exemple le 4e ou 5e parent div (à ajuster)
    .parents('div.row.multi-columns-row > div > div') 
    .first() 
    .within(() => {
      // Clique sur la roue dentée pour options
      cy.get('.glyphicon-cog').click();
      // Clique sur "delete"
      cy.contains('a', 'delete').click();
    });
  // Vérifie que l’album n’est plus visible1
  cy.contains(albumName).should('not.exist');
});

 it('supprime un album nommé "Everything Modified"', () => {
  const albumName2 = 'Everything Modified';
  cy.visit(baseUrl);
  // Trouver le span qui contient le nom de l'album
  cy.contains('span.ng-binding', albumName2)
    .should('be.visible')
    // remonte jusqu'à un parent qui contient tout l'album, par exemple le 4e ou 5e parent div (à ajuster)
    .parents('div.row.multi-columns-row > div > div') 
    .first() 
    .within(() => {
      // Clique sur la roue dentée pour options
      cy.get('.glyphicon-cog').click();
      // Clique sur "delete"
      cy.contains('a', 'delete').click();
    });
  // Vérifie que l’album n’est plus visible1
  cy.contains(albumName2).should('not.exist');
});

  
});
