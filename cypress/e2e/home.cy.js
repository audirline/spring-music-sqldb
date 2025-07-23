describe('Spring Music App', () => {
  const baseUrl = 'https://spring-music-hgckhuf3gza0bvb2.canadacentral-01.azurewebsites.net/';

  it('affiche la page d’accueil', () => {
    cy.visit(baseUrl);
    cy.contains('Spring Music').should('exist');
  });

  it('ajoute un album', () => {
    cy.visit(baseUrl);
    cy.contains('Add').click();
    cy.get('input[name="title"]').type('Nouvel Album');
    cy.get('input[name="artist"]').type('Nouvel Artiste');
    cy.get('form').submit();
    cy.contains('Nouvel Album').should('exist');
  });

  it('supprime un album', () => {
    cy.visit(baseUrl);
    cy.contains('Nouvel Album').parent().contains('Delete').click();
    cy.contains('Nouvel Album').should('not.exist');
  });
});
