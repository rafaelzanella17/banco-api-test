import request from 'supertest'
import { expect } from 'chai'

describe('Login', () => {
  describe('POST /login', () => {
    it('Deve retornar 200 com token em string quando usar credenciais válidas', async () => {
      const resposta = await request('http://localhost:3000')
        .post('/login')
        .set('Content-Type', 'application/json')
        .send({
          'username': 'julio.lima',
          'senha': '123456'
        })

      console.log('Status: ' + resposta.status)
      console.log('Body: ' + resposta.body.token)  

      expect(resposta.body.token).to.be.a('string')
      expect(resposta.status).to.equal(200)
    })
  })
})