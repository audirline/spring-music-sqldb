describe('Spring Music App', () => {
  const baseUrl = 'https://spring-music-hgckhuf3gza0bvb2.canadacentral-01.azurewebsites.net/';

  it('affiche la page d’accueil', () => {
    cy.visit(baseUrl);
    cy.contains('Spring Music').should('exist');
  });

  it('add an album', () => {
    cy.visit(baseUrl);
    cy.contains('add an album').click();
    cy.get('input[name="Album Title"]').type('Test Album');
    cy.get('input[name="Artist"]').type('Test Artist');
    cy.get('input[name="Release Year"]').type('2024');
    cy.get('input[name="Genre"]').type('Test Genre');
    cy.get('OK').submit();
    cy.contains('Test Album').should('exist');
  });

  it('supprime un album', () => {
    cy.visit(baseUrl);
    cy.contains('Nouvel Album').parent().contains('Delete').click();
    cy.contains('Nouvel Album').should('not.exist');
  });
});
