describe('Admin page', () => {
  beforeEach(() => {
    cy.fixture('selectors').as('selectors');
    cy.fixture('login').as('users');
  });

  it('Succesfully login', function() {
    cy.visit(this.selectors.login.host);
    cy.get(this.selectors.login.userInput).type(this.users.happy.username);
    cy.get(this.selectors.login.passInput).type(this.users.happy.password);
    cy.get(this.selectors.login.submitButton).submit();
    cy.get(this.selectors.login.movieTitle).first().invoke(this.selectors.text).then((text) => {
      cy.visit("/");
      cy.contains(text).should(this.selectors.beVisible);
    });
  });
});