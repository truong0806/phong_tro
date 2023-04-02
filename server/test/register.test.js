const { register, login } = require('../src/controllers/authController')
const authService = require('../src/service/auth')

describe('register', () => {
  it('returns an error response when phone number has incorrect length', async () => {
    const req = {
      body: {
        phone: '123456789',
        name: 'John',
        password: 'password',
      },
    }
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    }
    await register(req, res)
    expect(res.status).toHaveBeenCalledWith(400)
    expect(res.json).toHaveBeenCalledWith({
      err: 1,
      msg: 'The number does not have 10 digits.',
    })
  })

  it('calls authService.registerService with correct parameters and returns its response', async () => {
    const req = {
      body: {
        phone: '1234567890',
        name: 'John',
        password: 'password',
      },
    }
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    }
    const authServiceSpy = jest
      .spyOn(authService, 'registerService')
      .mockResolvedValue({ success: true })
    await register(req, res)
    expect(authServiceSpy).toHaveBeenCalledWith(req.body)
    expect(res.status).toHaveBeenCalledWith(200)
    expect(res.json).toHaveBeenCalledWith({ success: true })
  })
})

describe('login', () => {
  let req
  let res

  beforeEach(() => {
    req = {
      body: {
        phone: '1234567890',
        password: 'password',
      },
    }

    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    }
  })

  afterEach(() => {
    jest.resetAllMocks()
  })

  it('returns an error response when missing input', async () => {
    req.body.phone = undefined
    req.body.password = undefined

    await login(req, res)

    expect(res.status).toHaveBeenCalledWith(400)
    expect(res.json).toHaveBeenCalledWith({ err: 1, msg: 'Missing input' })
  })

  it('returns an error response when phone number has incorrect format', async () => {
    req.body.phone = 'abc'

    await login(req, res)

    expect(res.status).toHaveBeenCalledWith(400)
    expect(res.json).toHaveBeenCalledWith({ err: 1, msg: 'Input not number' })
  })

  it('returns an error response when phone number has incorrect length', async () => {
    req.body.phone = '123'

    await login(req, res)

    expect(res.status).toHaveBeenCalledWith(400)
    expect(res.json).toHaveBeenCalledWith({
      err: 1,
      msg: 'The number does not have 10 digits.',
    })
  })

})
