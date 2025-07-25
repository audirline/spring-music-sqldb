describe('Spring Music App', () => {
  const baseUrl = 'https://spring-music-hgckhuf3gza0bvb2.canadacentral-01.azurewebsites.net/';

  afterEach(function () {
    // Screenshots for every test even if it passes
    const testName = this.currentTest.title.replace(/\s+/g, '-').toLowerCase();
    cy.screenshot(testName);
  });

  it('Display main page', () => {
    cy.visit(baseUrl);
    cy.contains('Spring Music').should('exist');
  });

  it('Add an album "Test Album"', () => {
    cy.visit(baseUrl);
    cy.get('a[ng-click="addAlbum()"]').click();
    cy.get('#title').type('Test Album');
    cy.get('#artist').type('Test Artist');
    cy.get('#releaseYear').type('2024');
    cy.get('#genre').type('Test Genre');
    cy.get('button[ng-click="ok()"]').click();
    cy.contains('Test Album').should('exist');
  });

  it('Modify the name of the album "Test Album"', () => {
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

  it('Add another album "Everything"', () => {
    cy.visit(baseUrl);
    cy.get('a[ng-click="addAlbum()"]').click();
    cy.get('#title').type('Everything');
    cy.get('#artist').type('Avril Lavigne');
    cy.get('#releaseYear').type('2012');
    cy.get('#genre').type('Pop');
    cy.get('button[ng-click="ok()"]').click();
    cy.contains('Everything').should('exist');
  });

  it('Modify the name of the album Everything', () => {
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

  it('Remove the album "Test Album Modified"', () => {
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

  it('Remove the album "Everything Modified"', () => {
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
