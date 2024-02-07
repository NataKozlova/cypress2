const seats = require("../fixtures/seats.json");

it("Should be possible to book", () => {
  cy.visit("/");
  cy.get("a.page-nav__day:nth-of-type(4)").click();
  cy.get(".movie").first().contains("12:00").click();
  const seats = require("../fixtures/seats.json");
  seats.forEach((seat) => {
    cy.get(
      `.buying-scheme__wrapper > :nth-child(${seat.row}) > :nth-child(${seat.seat})`
    ).click();
  });
  cy.get(".acceptin-button").click();
  cy.contains("Вы выбрали билеты:").should("be.visible");
});
