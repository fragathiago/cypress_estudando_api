/// <reference types="cypress" />


describe('LOGIN', () => {
  
    it('login com sucesso', () => {
        cy.request({
            method: 'POST',
            url: '/login',
            failOnStatusCode: false,
            body: {
                email: 'fulano@qa.com',
                password: 'teste'
            }
        })
        .then((response) => {
            expect(response.status).to.equal(200) 
            expect(response.body.message).to.equal('Login realizado com sucesso')   
        })
    })

    it('login com email incorreto', () => {
        cy.request({
            method: 'POST',
            url: '/login',
            failOnStatusCode: false,
            body: {
                email: 'naoexiste@qa.com',
                password: 'teste'
            }
        })
        .then((response) => {
            expect(response.status).to.equal(401)   
            expect(response.body.message).to.equal('Email e/ou senha inválidos')   
        })
    })

    it('login com senha incorreta', () => {
        cy.request({
            method: 'POST',
            url: '/login',
            failOnStatusCode: false,
            body: {
                email: 'fulano@qa.com',
                password: 'senhaerrada'
            }
        })
        .then((response) => {
            expect(response.status).to.equal(401) 
            expect(response.body.message).to.equal('Email e/ou senha inválidos')     
        })
    })
  })
  