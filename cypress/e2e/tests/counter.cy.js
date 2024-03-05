/// <reference types="cypress" />

// import { describe, it, beforeEach, cy } from 'cypress'

describe('counter e2e test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173')
  })

  it('Verify counter functionality', () => {
    cy.get('#count-counter-txt').should('have.text', 0)
    cy.get('#increment-counter-btn').click()
    cy.get('#count-counter-txt').should('have.text', 1)
    cy.get('#decrement-counter-btn').click()
    cy.get('#count-counter-txt').should('have.text', 0)
    cy.get('#decrement-counter-btn').should('be.disabled')
  })
})
