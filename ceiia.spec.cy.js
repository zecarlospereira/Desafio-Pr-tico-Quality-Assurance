describe('CEiiA Website - Testes Automáticos Completos', () => {

  // === Funções utilitárias ===
  const aceitarCookies = () => {
    cy.get('body').then(($body) => {
      if ($body.find('button:contains("Accept")').length) cy.contains('Accept').click({ force: true })
      else if ($body.find('button:contains("Aceitar")').length) cy.contains('Aceitar').click({ force: true })
    })
  }

  const abrirMenu = () => {
    cy.get('button.header-menu-btn:visible').first().should('be.visible').click({ force: true })
  }

  beforeEach(() => {
    cy.visit('https://www.ceiia.com/')
    aceitarCookies()
  })

  // === Teste 1 ===
  it('Verifica o título e elementos principais da homepage', () => {
    cy.title().should('include', 'CEiiA')
    cy.contains(/Engineering|Innovation|Sustainable|Mobility/i).should('exist')
  })

  // === Teste 2 ===
  it('Abre o menu e verifica todas as opções principais', () => {
    abrirMenu()
    const opcoes = [
      'Home', 'Markets', 'Products', 'Our World',
      'News', 'Careers', 'Contact Us',
      'Privacy Policy', 'Terms & Conditions'
    ]
    opcoes.forEach(opcao => cy.contains(opcao).should('be.visible'))
  })

  // === Teste 3 ===
  it('Abre o menu, clica em “Markets” e verifica conteúdo', () => {
    abrirMenu()
    cy.contains('Markets').click({ force: true })
    cy.url().should('include', 'markets')
    cy.contains(/Mobility|Aerospace|Energy/i).should('exist')
  })

  // === Teste 4 ===
  it('Abre o menu, clica em “Products” e verifica conteúdo', () => {
    abrirMenu()
    cy.contains('Products').should('be.visible').click({ force: true })
    cy.contains(/Products|Innovation|Development/i, { timeout: 8000 }).should('exist')
  })

  // === Teste 5 ===
  it('Abre o menu, clica em “Our World” e verifica conteúdo', () => {
    abrirMenu()
    cy.contains('Our World').click({ force: true })
    cy.url().should('include', 'our-world')
    cy.contains(/Our World|People|Culture|Sustainability/i, { timeout: 8000 }).should('exist')
  })

  // === Teste 6 ===
  it('Abre o menu, clica em “News” e verifica conteúdo', () => {
    abrirMenu()
    cy.contains('News').click({ force: true })
    cy.url().should('include', 'news')
    cy.contains(/News|Press|Articles/i, { timeout: 8000 }).should('exist')
  })

  // === Teste 7 ===
  it('Abre o menu, clica em “Careers” e verifica conteúdo', () => {
    abrirMenu()
    cy.contains('Careers').click({ force: true })
    cy.url().should('include', 'careers')
    cy.contains(/Careers|Join|Opportunities/i, { timeout: 8000 }).should('exist')
  })

  // === Teste 8 ===
  it('Abre o menu, clica em “Contact Us” e verifica conteúdo', () => {
    abrirMenu()
    cy.contains('Contact Us').click({ force: true })
    cy.url().should('include', 'contact')
    cy.contains(/Contact|Email|Form/i, { timeout: 8000 }).should('exist')
  })

  // === Teste 9 ===
  it('Abre o menu, clica em “Privacy Policy” e verifica conteúdo', () => {
    abrirMenu()
    cy.contains('Privacy Policy').click({ force: true })
    cy.url().should('include', 'privacy')
    cy.contains(/Privacy|Data|Policy/i, { timeout: 8000 }).should('exist')
  })

  // === Teste 10 ===
  it('Abre o menu, clica em “Terms & Conditions” e verifica conteúdo', () => {
    abrirMenu()
    cy.contains('Terms & Conditions').click({ force: true })
    cy.url().should('include', 'terms')
    cy.contains(/Terms|Conditions|Legal/i, { timeout: 8000 }).should('exist')
  })

  // === Teste 11 ===
  it('Faz scroll até ao fundo da homepage e verifica o footer', () => {
    cy.scrollTo('bottom', { duration: 2500 })
    cy.contains(/Privacy Policy|Terms|CEiiA/i, { timeout: 8000 }).should('exist')
  })
})

