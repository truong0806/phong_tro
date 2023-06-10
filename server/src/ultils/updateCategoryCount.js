import db from '../models'
<<<<<<< Updated upstream
const updateCategoryCount = async () => {
  try {
    // Đếm số lượng bài post theo categories code
    const counts = await db.Post.count({
      attributes: ['categoryCode'],
      group: ['categoryCode'],
    })
    // Cập nhật "count" trong bảng "categories" dựa trên số lượng bài post
=======
export default updateCategoryCount = async () => {
  try {
    // Đếm số lượng bài post theo categories code
    const counts = await Post.count({
      attributes: ['categoryCode'],
      group: ['categoryCode'],
    })
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream

export default updateCategoryCount
=======
>>>>>>> Stashed changes
