import db from '../models'

const updateCategoryCount = async () => {
  const dataBody = [
    {
      header:
        'Tìm Người Ở Ghép, Tìm Nam Ở Ghép, Tìm Nữ Ở Ghép, Mới Nhất 2023Tìm người ở ghép, tìm nam ở ghép, tìm nữ ở ghép, share phòng trọ, tìm chỗ ở ghép cùng, tìm bạn ở ghép, xin ở ghép mới nhất 2023. Đăng tin ở ghép hiệu quả, nh',
      subheader:
        'Tìm Người Ở Ghép, Tìm Nam Ở Ghép, Tìm Nữ Ở Ghép, Mới Nhất 2023Tìm người ở ghép, tìm nam ở ghép, tìm nữ ở ghép, share phòng trọ, tìm chỗ ở ghép cùng, tìm bạn ở ghép, xin ở ghép mới nhất 2023. Đăng tin ở ghép hiệu quả, nh',
      code: 'TNOG',
      value: 'Tìm người ở ghép',
    },
    {
      header: '',
      subheader: '',
      code: 'TINT',
      value: 'Tin tức',
    },
    {
      header: '',
      subheader: '',
      code: 'BG',
      value: 'Bảng giá',
    },
  ]
  try {
    const counts = await db.Post.count({
      attributes: ['categoryCode'],
      group: ['categoryCode'],
    })
    await Promise.all(
      counts?.map(async (count) => {
        const { categoryCode, count: postCount } = count
        await db.Category.update(
          { count: postCount },
          { where: { code: categoryCode } },
        )
      }),
    )

    // await Promise.all(
    //   dataBody.forEach(async (cate) => {
    //     console.log(cate.code)
    //     await db.Category.findOrCreate({
    //       where: { code: cate?.code },
    //       defaults: {
    //         code: cate?.code,
    //         value: cate?.value,
    //         header: cate?.header,
    //         subheader: cate?.subheader,
    //         count: 0,
    //       },
    //     })
    //   }),
    // )
  } catch (error) {
    console.error(error)
  }
}
export default updateCategoryCount
