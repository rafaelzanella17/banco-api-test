import request from 'supertest'
import { expect } from 'chai'

import 'dotenv/config'



describe('Login', () => {
  describe('POST /login', () => {
    it('Deve retornar 200 com token em string quando usar credenciais válidas', async () => {
      const resposta = await request(process.env.BASE_URL)
        .post('/login')
        .set('Content-Type', 'application/json')
        .send({
          'username': 'julio.lima',
          'senha': '123456'
        })

      expect(resposta.body.token).to.be.a('string')
      expect(resposta.status).to.equal(200)
    })
  })
})

