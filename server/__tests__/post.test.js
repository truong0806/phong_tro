import { postService } from '../src/service/post'
import db from '../src/models'
describe('post', () => {
  it('should return all post', async () => {
    db.Post.findAll = jest.fn().mockResolvedValue([
      {
        title: 'title1',
        star: 'star1',
        images: [{ image: 'image1' }],
        attributes: {
          price: 100,
          acreage: 200,
          published: true,
          hashtag: 'hashtag1',
        },
        users: {
          name: 'John',
          phone: '123456789',
          zalo: 'zalo1',
        },
      },
      {
        title: 'title2',
        star: 'star2',
        images: [{ image: 'image2' }],
        attributes: {
          price: 200,
          acreage: 300,
          published: false,
          hashtag: 'hashtag2',
        },
        users: {
          name: 'Jane',
          phone: '987654321',
          zalo: 'zalo2',
        },
      },
    ])
    const result = await postService(db)
    expect(result.err).toBe(0)
    expect(result.msg).toBe('OK')
    expect(result.response).toHaveLength(2)
    expect(db.Post.findAll).toHaveBeenCalledWith({
      attributes: ['id', 'title', 'star', 'address', 'description'],
      distinct: true,
      include: [
        {
          as: 'images',
          attributes: ['image'],
          model: db.Images,
        },
        {
          as: 'attributes',
          attributes: ['price', 'acreage', 'published', 'hashtag'],
          model: db.Attribute,
        },
        {
          as: 'users',
          attributes: ['name', 'phone', 'zalo'],
          model: db.User,
        },
      ],
      nest: true,
      raw: true,
    })
  })
})
