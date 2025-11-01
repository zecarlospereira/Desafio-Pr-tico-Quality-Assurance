describe('CEiiA Website Automation', () => {

  beforeEach(() => {
    // Visit CEiiA homepage
    cy.visit('https://www.ceiia.com/')

    // Accept cookies if banner is visible
    cy.get('body').then(($body) => {
      // Adjust selector based on the site’s actual cookie button text
      if ($body.find('button:contains("Accept")').length) {
        cy.contains('Accept').click({ force: true })
      } else if ($body.find('button:contains("Aceitar")').length) {
        cy.contains('Aceitar').click({ force: true })
      }
    })
  })

  it('Verifies homepage loads correctly', () => {
    // Check that the page title contains CEiiA
    cy.title().should('include', 'CEiiA')

    // Verify that the navigation bar is visible
    cy.get('header').should('be.visible')

    // Example: Check that the "About" link is visible
    cy.contains('About').should('be.visible')
  })

  it('Navigates to About page', () => {
    cy.contains('About').click()
    cy.url().should('include', '/about')
    cy.get('h1, h2').should('exist')
  })

})
