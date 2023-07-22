// Import the function to be tested
import { getPost, getPostLimit } from '../src/controllers/postController'
import * as service from '../src/service/post'
const sequelize = require('../src/models/index')

jest.mock('../src/service/post', () => ({
  postService: jest.fn(),
  postLimitService: jest.fn(),
}))

describe('getPostAllPost', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })
  afterAll(async () => {
    await sequelize.closeConnection()
  })
  test('should return all posts', async () => {
    const mockResponse = [
      { title: 'Post 1', content: 'Content of Post 1' },
      { title: 'Post 2', content: 'Content of Post 2' },
      // Add more sample data as needed
    ]

    service.postService.mockResolvedValue(mockResponse)
    const req = {}
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    }
    await getPost(req, res)

    expect(res.status).toHaveBeenCalledWith(200)
    expect(res.json).toHaveBeenCalledWith(mockResponse)
  })
  test('should return an error response with status 500 if service call fails', async () => {
    const mockError = new Error('Service call failed')
    service.postService.mockRejectedValue(mockError)
    const req = {}
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    }
    await getPost(req, res)
    expect(res.status).toHaveBeenCalledWith(500)
    expect(res.json).toHaveBeenCalledWith({
      err: -1,
      msg: 'Fail at post controller' + mockError,
    })
  })
})
describe('getPostPostLimit', () => {
  test('should return a successful response with status 200', async () => {
    const mockResponse = { data: 'Mock data' }
    const mockPage = 2
    const mockQuery = { category: 'tech' }
    service.postLimitService.mockResolvedValue(mockResponse)
    const req = {
      query: {
        page: mockPage,
        ...mockQuery,
      },
    }
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    }
    await getPostLimit(req, res)
    expect(service.postLimitService).toHaveBeenCalledWith(mockPage, mockQuery)
    expect(res.status).toHaveBeenCalledWith(200)
    expect(res.json).toHaveBeenCalledWith(mockResponse)
  })
  test('should return an error response with status 500 if service call fails', async () => {
    const mockError = new Error('Service call failed')
    const mockPage = 1
    const mockQuery = { category: 'sports' }
    service.postLimitService.mockRejectedValue(mockError)
    const req = {
      query: {
        page: mockPage,
        ...mockQuery,
      },
    }
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    }
    await getPostLimit(req, res)
    expect(service.postLimitService).toHaveBeenCalledWith(mockPage, mockQuery)
    expect(res.status).toHaveBeenCalledWith(500)
    expect(res.json).toHaveBeenCalledWith({
      err: -1,
      msg: 'Fail at post controller' + mockError,
    })
  })
})
