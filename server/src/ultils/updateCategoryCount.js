import db from '../models'
const updateCategoryCount = async () => {
  try {
    const counts = await db.Post.count({
      attributes: ['categoryCode'],
      group: ['categoryCode'],
    })
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
