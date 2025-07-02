import request from 'supertest'
import { expect } from 'chai'

import 'dotenv/config'


describe('Transferências', () => {
  describe('POST /transferências', () => {

    it('Deve retornar sucesso com 201 quando o valor da transferência for igual ou acima de R$ 10,00', async () => {
      // capturar token
      const respostaLogin = await request(process.env.BASE_URL)
        .post('/login')
        .set('Content-Type', 'application/json')
        .send({
          'username': 'julio.lima',
          'senha': '123456'
        })
      const token = respostaLogin.body.token

      const resposta = await request(process.env.BASE_URL)
        .post('/transferencias')
        .set('Content-Type', 'application/json')
        .set('Authorization', `Bearer ${token}`)
        .send({
          contaOrigem: 1,
          contaDestino: 2,
          valor: 11,
          token: ""
        })

        expect(resposta.status).to.equal(201)
      // expect(resposta.body.token).to.be.a('string')
      console.log(resposta.body)
      })

    it('Deve retornar falha com 422 quando o valor da transferência for abaixo de R$ 10,00', async () => {
      // capturar token
      const respostaLogin = await request(process.env.BASE_URL)
        .post('/login')
        .set('Content-Type', 'application/json')
        .send({
          'username': 'julio.lima',
          'senha': '123456'
        })
      const token = respostaLogin.body.token

      const resposta = await request(process.env.BASE_URL)
        .post('/transferencias')
        .set('Content-Type', 'application/json')
        .set('Authorization', `Bearer ${token}`)
        .send({
          contaOrigem: 1,
          contaDestino: 2,
          valor: 8.5,
          token: ""
        })

        expect(resposta.status).to.equal(422)
      // expect(resposta.body.token).to.be.a('string')
      console.log(resposta.body)
    })

  })
})