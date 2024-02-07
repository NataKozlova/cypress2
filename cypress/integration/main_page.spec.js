describe('Check main page', () => {
  beforeEach(() => {
    cy.fixture('selectors').as('selectors');
  });

  it('Main page is displayed correctly', function() {
    cy.visit('/');
    cy.get(this.selectors.main.headerTitle).contains(this.selectors.main.panel).should(this.selectors.beVisible);
    cy.get(this.selectors.main.nav).should(this.selectors.haveLength, 7);
  })
})