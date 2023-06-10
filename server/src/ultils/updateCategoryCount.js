import db from '../models'
const updateCategoryCount = async () => {
  try {
    // Đếm số lượng bài post theo categories code
    const counts = await db.Post.count({
      attributes: ['categoryCode'],
      group: ['categoryCode'],
    })
    // Cập nhật "count" trong bảng "categories" dựa trên số lượng bài post
    await Promise.all(
      counts.map(async (count) => {
        const { categoryCode, count: postCount } = count
        await db.Category.update(
          { count: postCount },
          { where: { code: categoryCode } },
        )
      }),
    )
  } catch (error) {
    console.error(error)
  }
}

export default updateCategoryCount
