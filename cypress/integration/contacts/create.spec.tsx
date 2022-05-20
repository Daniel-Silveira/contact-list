/// <reference types="cypress" />

describe('Contacts', () => {
  it('should create new contact', () => {
    const urlImage =
      'https://rollingstone.uol.com.br/media/uploads/cillian_murphy_como_tommy_shelby_reproducao_netflix.jpg'

    cy.visit('/')
    cy.intercept('GET', '/contacts', { fixture: 'contacts/empty.json' })
    cy.intercept('POST', '/contacts/new', { statusCode: 201 })

    cy.get('[data-cy=newContactButton').click()
    cy.get('[data-cy=inputName').type('Tommy Shelby')
    cy.get('[data-cy=inputEmail').type('tommy@gmail.com')
    cy.get('[data-cy=inputCompany').type('Peaky Blinders')
    cy.get('[data-cy=inputUrl').type(urlImage)
    cy.get('[data-cy=inputPhone').type('11900000000')
    cy.get('[data-cy=inputAge').type('40')
    cy.intercept('GET', '/contacts', { fixture: 'contacts/data.json' })
    cy.get('[data-cy=saveContact').click()
    cy.get('[data-cy=card-contact]').should('to.have.length', 1)
  })

  it('should edit name of contact', () => {
    cy.visit('/')
    cy.intercept('GET', '/contacts', { fixture: 'contacts/data.json' })

    cy.get('[data-cy=editContactButton').click()
    cy.get('[data-cy=inputName').focus().clear().type('Arthur Shelby')

    cy.intercept('PUT', '/contacts/6286d3746c1de7847d0531ba', { statusCode: 200 })
    cy.intercept('GET', '/contacts', { fixture: 'contacts/dataEdited.json' })

    cy.get('[data-cy=saveContact').click()
    cy.contains('Arthur Shelby').should('to.have.length', 1)
  })

  it('should remove the contact', () => {
    cy.visit('/')

    cy.intercept('GET', '/contacts', { fixture: 'contacts/data.json' })
    cy.intercept('DELETE', '/contacts/remove/6286d3746c1de7847d0531ba', { statusCode: 200 })
    cy.intercept('GET', '/contacts', { fixture: 'contacts/empty.json' })

    cy.get('[data-cy=removeContactButton').click()
    cy.contains('Tommy Shelby').should('to.have.length', 0)
  })
})
