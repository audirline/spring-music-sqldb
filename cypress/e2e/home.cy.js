describe('Spring Music App', () => {
  const baseUrl = 'https://spring-music-hgckhuf3gza0bvb2.canadacentral-01.azurewebsites.net/';

  afterEach(function () {
    // Capture automatique à la fin de chaque test, même en cas de succès
    const testName = this.currentTest.title.replace(/\s+/g, '-').toLowerCase();
    cy.screenshot(testName);
  });

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

  it('modifie le nom d’un album "Test Album"', () => {
    const oldName = 'Test Album';
    const newName = 'Test Album Modified';
    cy.visit(baseUrl);
    cy.contains('span.ng-binding', oldName)
      .filter(':visible')
      .first()
      .click({ force: true })
      .click({ force: true });
    cy.get('input[name="title"]:visible')
      .clear()
      .type(`${newName}{enter}`);
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
    cy.visit(baseUrl);
    cy.contains('span.ng-binding', oldName2)
      .filter(':visible')
      .first()
      .click({ force: true })
      .click({ force: true });
    cy.get('input[name="title"]:visible')
      .clear()
      .type(`${newName2}{enter}`);
    cy.contains('span.ng-binding', newName2).should('exist');
  });

  it('supprime un album nommé "Test Album Modified"', () => {
    const albumName = 'Test Album Modified';
    cy.visit(baseUrl);
    cy.contains('span.ng-binding', albumName)
      .should('be.visible')
      .parents('div.row.multi-columns-row > div > div')
      .first()
      .within(() => {
        cy.get('.glyphicon-cog').click();
        cy.contains('a', 'delete').click();
      });
    cy.contains(albumName).should('not.exist');
  });

  it('supprime un album nommé "Everything Modified"', () => {
    const albumName2 = 'Everything Modified';
    cy.visit(baseUrl);
    cy.contains('span.ng-binding', albumName2)
      .should('be.visible')
      .parents('div.row.multi-columns-row > div > div')
      .first()
      .within(() => {
        cy.get('.glyphicon-cog').click();
        cy.contains('a', 'delete').click();
      });
    cy.contains(albumName2).should('not.exist');
  });
});
