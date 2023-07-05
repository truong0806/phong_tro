import { categoriesService } from '../src/service/category'
import db from '../src/models'
describe('categoriesService', () => {
  it('should return all categories', async () => {
    db.Category.findAll = jest.fn().mockResolvedValue([
      {
        code: 'category1',
        value: 'Category 1',
      },
      {
        code: 'category2',
        value: 'Category 2',
      },
    ])
    const result = await categoriesService(db)
    expect(result.err).toBe(0)
    expect(result.msg).toBe('OK')
    expect(result.response).toHaveLength(2)
    expect(db.Category.findAll).toHaveBeenCalledWith({
      attributes: ['code', 'value'],
      raw: true,
    })
  })
})
