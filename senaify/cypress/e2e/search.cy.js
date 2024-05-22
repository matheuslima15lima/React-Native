describe('template spec', () => {
  let musicaProcurada;
  before('passes', () => {
    cy.visit('/')
  })


  it('Redirecionar Para a Tela de Busca', () => {
    cy.get("[href='/Search']").click();
    cy.scrollTo("top")
  })

  it('Procurando uma música específica', () => {
    cy.get("[data-testid='campoBusca']").type("Miss The Rage")
    cy.wait(1000)

    cy.get("[aria-label='music-item-sch']").should("have.length.greaterThan", 0)
  })

  it('Clicar na música pesquisada', () => {
    // cy.get("[aria-label='music-item']").filter(":contains('Miss The Rage')").click()
    // cy.get("[aria-label='music-item']").contains(/^(Miss The Rage)/i).click()
    musicaProcurada = cy.get("[aria-label='music-item-sch']").contains("Miss The Rage").first()
    musicaProcurada.click()
    cy.scrollTo("top")
  })

  it("Favoritar a música", () => {
    // musicaProcurada.then(item => {
      cy.wait(2000)
      cy.get(musicaProcurada).get("[data-testid='icon-button-sch']").eq(0).click()
     
    // })
    // cy.get(musicaProcurada).get("[data-testid='icon-button']").click()
    
  })
})