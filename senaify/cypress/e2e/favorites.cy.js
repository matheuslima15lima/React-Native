describe('template spec', () => {
  before('passes', () => {
    cy.visit('/')
  })

  it("Redirecionar para a tela de favoritos", () => {
    cy.get("[href='/Favorites']").click()
    cy.scrollTo("top")
  })

  it("Verifica se há músicas favoritas", () => {
    cy.get("[aria-label='music-item-fav']").should("have.length.greaterThan", 0)
  })

  let musicaEscolhida;

  // it("Reproduzir a primeira música da lista", () => {
  //   musicaEscolhida = cy.get("[aria-label='music-item']").first()
  //   musicaEscolhida.click()
  // })

  it("Reproduzir uma música específica", () => {
    musicaEscolhida = cy.get("[aria-label='music-item-fav']").contains("Miss The Rage")
    musicaEscolhida.click()
  })
})