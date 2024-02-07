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
    cy.get(this.selectors.main.headerTitle).contains(this.selectors.main.panel).should(this.selectors.beVisible);
    cy.get(this.selectors.main.headerSubtitle).contains(this.selectors.login.successPanel).should(this.selectors.beVisible);
  });

  it('Unsuccesfully login', function() {
    cy.visit(this.selectors.login.host);
    cy.get(this.selectors.login.userInput).type(this.users.sad.username);
    cy.get(this.selectors.login.passInput).type(this.users.sad.password);
    cy.get(this.selectors.login.submitButton).submit();
    cy.contains(this.selectors.login.error).should(this.selectors.beVisible);
  });
});