describe("Home page", () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it("Header contains the name of the page", () => {
    cy.findByRole('heading', /SDI Library/).should('exist')
  })
})
