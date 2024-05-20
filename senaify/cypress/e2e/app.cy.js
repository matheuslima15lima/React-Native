describe('template spec', () => {
  it('passes', () => {
    cy.visit('/')

    
  })
  it('passes', () => {
    cy.visit('/')

    cy.get("[aria-label='title-head']")
    cy.get("[aria-label='title-head']").should("contain", "Good morning")
  });

  // it('Verificar se tem uma lista com as playlist exibida', ()=>{
  //   cy.wait(2000)
  //   cy.get("[aria-label='playlist-item']").should("have.length.greaterThan", 0)
  // });
  // it("Clicar em uma opção de playlist e listar suas músicas",()=>{
  //   cy.get("[aria-label='playlist-item']").first().click()
  //   cy.wait(1000)
   

  // })


  // it("Clicar em uma musica e reproduzir o audio",()=>{
  //   cy.get("[aria-label= 'music-item']").first().click()
  // })

  it("Reproduzir musica escolhida",()=>{
    cy.get("[aria-label='playlist-escolhida']").first().click()
    cy.get("[aria-label='musica-escolhida']").first().click()
    
  })
})