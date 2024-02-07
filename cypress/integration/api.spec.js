describe('User Management Tests', () => {
  const user = {
    id: 1,
    username: "testUser",
    firstName: "Test",
    lastName: "User",
    email: "test@example.com",
    password: "password123",
    phone: "1234567890",
    userStatus: 1
  };

  it('Create a new user', () => {
    cy.createUser(user);
    cy.getUser(user.username).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.username).to.eq(user.username);
    });
  });

  it('Update a user', () => {
    const updatedUser = {
      ...user,
      firstName: "Updated",
      lastName: "User",
      email: "updated@example.com",
    };
    cy.createUser(user);
    cy.updateUser(user.username, updatedUser);
    cy.getUser(user.username).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.firstName).to.eq(updatedUser.firstName);
    });
  });

  it('Delete a user', () => {
    cy.createUser(user);
    cy.deleteUser(user.username);
  });
});