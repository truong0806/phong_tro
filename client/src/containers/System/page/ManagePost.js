import React, { useEffect, useState } from 'react';
import { Button } from '../../../components';
import * as actions from '../../../store/action';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Pagination } from '../../Public';
import { postTableTitle } from '../../../ultils/constains';
import { PostTable } from '../components';
import { usePathname } from '../../../ultils/common/usePathname';
import EditPost from '../components/ManagerPost/EditPost';
import { apiDeletePost } from '../../../service';
import Swal from 'sweetalert2';
import 'animate.css';

const ManagePost = () => {
  const pageTitle = usePathname();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const { posts_limit_admin } = useSelector((state) => state.post);
  const { isLoggedIn, accessToken } = useSelector((state) => state.auth);
  console.log(
    '🚀 ~ file: ManagePost.js:23 ~ ManagePost ~ accessToken:',
    accessToken
  );
  const [categoryCode] = useState('none');
  const [bonusType, setBonusType] = useState('');
  const [status, setStatus] = useState('');
  const [itemEdit, setItemEdit] = useState('');
  const [updateData, setUpdateData] = useState(false);

  useEffect(() => {
    dispatch(actions.getCategories());
    setLoading(false);
    let searchParamsObject = {};
    setTimeout(() => {
      dispatch(actions.GetPostsLimitAdmin(searchParamsObject)).finally(() => {
        setLoading(true);
      });
    }, 200);
  }, [dispatch, categoryCode, updateData, isLoggedIn]);

  const filterData = (bonusType, status) => {
    let filteredData = posts_limit_admin.filter((row) => {
      let matchBonus = true;
      let matchStatus = true;

      if (bonusType) {
        matchBonus = row.overviews.bonus === bonusType;
      }

      if (status) {
        matchStatus = row.overviews.status === status;
      }

      return matchBonus && matchStatus;
    });

    return filteredData;
  };

  const filteredData = filterData(bonusType, status);

  const handShowPopup = (e, item) => {
    e.stopPropagation();
    setItemEdit(item);
    setShowPopup(true);
  };

  const handleDeletePost = async (e, postId) => {
    e.stopPropagation();
    console.log(
      '🚀 ~ file: ManagePost.js:69 ~ handleDeletePost ~ postId:',
      postId.id
    );
    Swal.fire({
      title: 'Bạn muốn xoá file?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Xoá',
    }).then(async (result) => {
      if (result.isConfirmed) {
        const response = await apiDeletePost(postId.id);
        if (response.data.err === 0) {
          setUpdateData((pre) => !pre);
        }
        Swal.fire('Xoá thành công !', 'File của bạn đã xoá', 'success');
      }
    });
  };

  return (
    <div>
      <div className=" items-center  pb-1 mb-3 flex justify-between ">
        <h1 className="text-[2rem] mt-2 py-[1rem] ">{pageTitle[0].text}</h1>
        <div className="flex gap-1 justify-end text-[0.9rem]">
          <select
            defaultValue=""
            onChange={(e) => {
              setBonusType(e.target.value);
            }}
            className="text-[0.75rem] focus:border-custom-gray focus:shadow-lg cursor-pointer py-[0.25rem] px-[0.5rem] rounded-[0.25rem] hover:bg-[#6c757d] hover:text-white focus:bg-[#6c757d] focus:text-white border-[#6c757d]"
          >
            <option className="bg-white text-[#212529]" value={''} hidden>
              Lọc theo loại VIP
            </option>
            <option className="bg-white text-[#212529]" value={''}>
              Tất cả
            </option>
            <option className="bg-white text-[#212529]" value={'Tin Hot'}>
              Tin Hot
            </option>
            <option className="bg-white text-[#212529]" value={'Tin VIP 30'}>
              Tin VIP 30
            </option>
            <option className="bg-white text-[#212529]" value={'Tin VIP 20'}>
              Tin VIP 20
            </option>
            <option className="bg-white text-[#212529]" value={'Tin VIP 10'}>
              Tin VIP 10
            </option>
            <option className="bg-white text-[#212529]" value={'Tin thường'}>
              Tin thường
            </option>
          </select>
          <select
            defaultValue=""
            className="text-[0.75rem] focus:border-custom-gray focus:shadow-lg  cursor-pointer  py-[0.25rem] px-[0.5rem]  rounded-[0.25rem] hover:bg-[#6c757d] hover:text-white focus:bg-[#6c757d] focus:text-white border-[#6c757d]"
            onChange={(e) => {
              setStatus(e.target.value);
            }}
          >
            <option className="bg-white text-[#212529]">
              Lọc theo trạng thái
            </option>
            <option
              className="bg-white text-[#212529]"
              value={'Tin đang hiển thị'}
            >
              Tin đang hiển thị
            </option>
            <option className="bg-white text-[#212529]" value={'Tin hết hạn'}>
              Tin hết hạn
            </option>
            <option className="bg-white text-[#212529]" value={'Tin đang ẩn'}>
              Tin đang ẩn
            </option>
          </select>
          <Link to={'/quan-ly/dang-tin-moi'} className="">
            <Button
              text={'Đăng tin mới'}
              bgcolor={'bg-[#dc3545] border-[#dc3545] text-white h-full'}
            />
          </Link>
        </div>
      </div>
      <div className="border-b-2"></div>
      <PostTable
        setIsEdit={setIsEdit}
        handleDeletePost={handleDeletePost}
        handShowPopup={handShowPopup}
        setShowPopup={setShowPopup}
        listTitle={postTableTitle}
        loading={loading}
        posts_limit_admin={filteredData}
      />
      <Pagination
        count={Object.keys(posts_limit_admin).length}
        posts_limit={filteredData}
      />
      {showPopup && <EditPost setShowPopup={setShowPopup} isEdit />}
    </div>
  );
};

export default ManagePost;
