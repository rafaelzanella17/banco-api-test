import request from 'supertest'
import { expect } from 'chai'

import { obterToken } from '../helpers/autenticacao.js'
import postTransferencias from '../fixtures/postTransferencias.json' with { type: 'json' }



describe('Transferências', () => {
  describe('POST /transferências', () => {
    let token

    beforeEach(async () => {
      token = await obterToken('julio.lima', '123456')
    })

    it('Deve retornar sucesso com 201 quando o valor da transferência for igual ou acima de R$ 10,00', async () => {
      const bodyTransferencias = { ...postTransferencias }

      const resposta = await request(process.env.BASE_URL)
        .post('/transferencias')
        .set('Content-Type', 'application/json')
        .set('Authorization', `Bearer ${token}`)
        .send(bodyTransferencias)

        expect(resposta.status).to.equal(201)
      // expect(resposta.body.token).to.be.a('string')
      })

    it('Deve retornar falha com 422 quando o valor da transferência for abaixo de R$ 10,00', async () => {
      const bodyTransferencias = { ...postTransferencias }
      bodyTransferencias.valor = 7
      
      const resposta = await request(process.env.BASE_URL)
        .post('/transferencias')
        .set('Content-Type', 'application/json')
        .set('Authorization', `Bearer ${token}`)
        .send(bodyTransferencias)

        expect(resposta.status).to.equal(422)
      // expect(resposta.body.token).to.be.a('string')
    })
  })
})