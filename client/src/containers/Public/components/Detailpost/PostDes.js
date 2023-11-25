import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Map } from '../../../../components';

const PostDes = () => {
  const { posts_detail } = useSelector((state) => state.post);
  return (
    <div className="flex flex-col gap-4">
      <section>
        <h2 className="text-[1.5rem] font-bold mb-[15px]">Thông tin mô tả</h2>
        <div
          className="text-[1.1rem]"
          dangerouslySetInnerHTML={{
            __html: posts_detail[0].description
              .replace(/\\n/g, '<br/>')
              .slice(1, -1),
          }}
        />
      </section>
      <section>
        <h2 className="text-[1.5rem] font-bold mb-[15px]">Đặc điểm nổi bật</h2>
        <table className="border-separate w-full ml-2">
          <tbody>
            <tr className="">
              <td className="py-[10px] w-[25%]">Mã tin:</td>
              <td className="py-[10px]">
                {`#${posts_detail[0]?.attributes?.hashtag}`}
              </td>
            </tr>
            <tr className="py-[10px] bg-[#f5f5f5]">
              <td className="py-[10px] w-[25%]">Khu vực</td>
              <td className="py-[10px]">{posts_detail[0]?.overviews?.area}</td>
            </tr>
            <tr className="">
              <td className="py-[10px] w-[25%]">Loại tin rao:</td>
              <td className="py-[10px]">
                {posts_detail[0]?.categories?.value}
              </td>
            </tr>
            <tr className="py-[10px] bg-[#f5f5f5]">
              <td className="py-[10px] w-[25%]">Đối tượng thuê:</td>
              <td className="py-[10px]">
                {posts_detail[0]?.overviews?.target}
              </td>
            </tr>
            <tr className="">
              <td className="py-[10px] w-[25%]">Gói tin:</td>
              <td className="py-[10px] text-[#E13427]">
                {posts_detail[0]?.overviews?.bonus}
              </td>
            </tr>
            <tr className="py-[10px] bg-[#f5f5f5]">
              <td className="py-[10px] w-[25%]">Ngày đăng:</td>
              <td className="py-[10px]">
                {posts_detail[0]?.overviews?.create}
              </td>
            </tr>
            <tr className="">
              <td className="py-[10px] w-[25%]">Ngày hết hạn:</td>
              <td className="py-[10px]">
                {posts_detail[0]?.overviews?.expire}
              </td>
            </tr>
          </tbody>
        </table>
      </section>
      <section>
        <h2 className="text-[1.5rem] font-bold mb-[15px]">Thông tin liên hệ</h2>
        <table className="border-separate w-full ml-2">
          <tbody>
            <tr className="">
              <td className="py-[10px] w-[25%]">Liên hệ:</td>
              <td className="py-[10px]">
                {`#${posts_detail[0]?.users?.name}`}
              </td>
            </tr>
            <tr className="py-[10px] bg-[#f5f5f5]">
              <td className="py-[10px] w-[25%]">Điện thoại:</td>
              <td className="py-[10px]">{posts_detail[0]?.users?.phone}</td>
            </tr>
            <tr className="">
              <td className="py-[10px] w-[25%]">Zalo:</td>
              <td className="py-[10px]">{posts_detail[0]?.users?.zalo}</td>
            </tr>
          </tbody>
        </table>
      </section>
      <section>
        <h2 className="text-[1.5rem] font-bold mb-[15px]">Bản đồ</h2>
        <Map isDetail={true} />
      </section>
      <section>
        <p>
          Bạn đang xem nội dung tin đăng:
          {
            <em className="italic text-[#777]">
              "{posts_detail[0]?.title} - Mã tin: $
              {posts_detail[0]?.attributes?.hashtag}"
            </em>
          }
          . Mọi thông tin liên quan đến tin đăng này chỉ mang tính chất tham
          khảo. Nếu bạn có phản hồi với tin đăng này (báo xấu, tin đã cho thuê,
          không liên lạc được,...), vui lòng thông báo để PhòngTrọ123 có thể xử
          lý.
        </p>
        <Button
          text={'Gửi phản hồi'}
          iconImgBefor={
            <img
              className="w-[16px] h-[16px]"
              src="https://phongtro123.com/images/mobile/report-flag.svg"
            ></img>
          }
        />
      </section>
    </div>
  );
};

export default PostDes;
