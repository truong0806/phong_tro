import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { dataBank } from '../../../ultils/constains';
import { useMediaQuery, useTheme } from '@mui/material';
import { useSelector } from 'react-redux';
import CopyButton from '../../../components/CopyButton';

export const DialogWithAgree = ({ setOpen, open, title }) => {
  const { userData } = useSelector((state) => state.user);
  const theme = useTheme();
  console.log(
    '🚀 ~ file: DialogWithAgree.js:10 ~ DialogWithAgree ~ title:',
    title
  );

  const data = title === 0 ? dataBank : {};
  console.log(
    '🚀 ~ file: DialogWithAgree.js:14 ~ DialogWithAgree ~ data:',
    data
  );

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="w-[400px]">
      <Dialog
        maxWidth={'lg'}
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {title === 0 &&
            'Vui lòng lựa chọn chuyển vào một trong các tài khoản dưới đây'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {title === 0 ? (
              <div classname="">
                <table classname="table table-bordered table-striped">
                  <tbody>
                    <tr className="border bg-title-table">
                      {dataBank[0]?.columnsName?.map((columnsName, index) => {
                        return (
                          <td
                            key={index}
                            className="p-2 border-[1px] border-[#dee2e6] w-1/5 text-center"
                          >
                            <strong>{columnsName}</strong>
                          </td>
                        );
                      })}
                    </tr>

                    {dataBank[0]?.data?.map((item) => {
                      return (
                        <tr className="">
                          <td className="p-5 border-[1px] border-[#dee2e6]">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: item.bankName,
                              }}
                            ></span>
                          </td>
                          <td className="p-5 whitespace-nowrap border-[1px] border-[#dee2e6]">
                            {item.accountOwner}
                          </td>
                          <td className="p-5 whitespace-nowrap border-[1px] border-[#dee2e6]">
                            <CopyButton
                              valueCopy={item.accountNumber}
                              text={item.accountNumber}
                            />
                          </td>
                          <td className="p-5 whitespace-nowrap border-[1px] border-[#dee2e6]">
                            {item.branch}
                          </td>
                          <td className="p-5 whitespace-nowrap text-red-600 border-[1px] border-[#dee2e6]">
                            <strong>
                              <CopyButton
                                valueCopy={`PT123 - 135833 - ${userData.phone}`}
                                text={`PT123 - 135833 - ${userData.phone}`}
                              />
                            </strong>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            ) : (
              <div></div>
            )}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Thoát
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DialogWithAgree;
