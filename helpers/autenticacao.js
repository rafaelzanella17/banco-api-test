import request from 'supertest'
import postLogin from '../fixtures/postLogin.json' with { type: 'json' }


const obterToken = async () => {
  const bodyLogin = { ...postLogin }

  const respostaLogin = await request(process.env.BASE_URL)
    .post('/login')
    .set('Content-Type', 'application/json')
    .send(bodyLogin)
    
    return respostaLogin.body.token
}

export { obterToken }
