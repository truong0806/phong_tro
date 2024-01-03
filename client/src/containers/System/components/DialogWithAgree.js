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

export const DialogWithAgree = ({ setOpen, open, item }) => {
  const { userData } = useSelector((state) => state.user);
  const theme = useTheme();

  const handleClose = () => {
    setOpen(false);
  };

  const rechargeMethodColumnsName =
    item.id === 0
      ? dataBank[0]?.columnsNameBank
      : item.id === 4
      ? dataBank[1]?.columnsNameMomo
      : '';
  const rechargeMethodContent =
    item.id === 0
      ? dataBank[0]?.dataBank
      : item.id === 4
      ? dataBank[1]?.dataMomo
      : '';
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
          {item.id === 0 && item.header}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <div classname="">
              {item.id === 0 || item.id === 4 ? (
                <table classname="table table-bordered table-striped">
                  <tbody>
                    <tr className="border bg-title-table">
                      {rechargeMethodColumnsName.map((columnsName, index) => {
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

                    {rechargeMethodContent?.map((content) => {
                      
                      return item.id === 0 ? (
                        <tr className="">
                          <td className="p-5 border-[1px] border-[#dee2e6]">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: content.bankName,
                              }}
                            ></span>
                          </td>
                          <td className="p-5 whitespace-nowrap border-[1px] border-[#dee2e6]">
                            {content.accountOwner}
                          </td>
                          <td className="p-5 whitespace-nowrap border-[1px] border-[#dee2e6]">
                            <CopyButton
                              valueCopy={content.accountNumber}
                              text={content.accountNumber}
                            />
                          </td>
                          <td className="p-5 whitespace-nowrap border-[1px] border-[#dee2e6]">
                            {content.branch}
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
                      ) : (
                        <tr className="">
                          <td className="p-5 text-center whitespace-nowrap border-[1px] border-[#dee2e6]">
                            {content.name}
                          </td>
                          <td className="p-5 text-center whitespace-nowrap border-[1px] border-[#dee2e6]">
                            <CopyButton
                              valueCopy={content.phone}
                              text={content.phone}
                              textStyle={`text-red-500 text-center`}
                            />
                          </td>
                          <td className="p-5 text-center whitespace-nowrap border-[1px] border-[#dee2e6]">
                            <CopyButton
                              valueCopy={`${content.content} ${userData.id}`}
                              text={`${content.content} ${userData.id}`}
                              textStyle={`text-red-500 text-center`}
                            />
                          </td>
                          <td className="p-5 whitespace-nowrap border-[1px] border-[#dee2e6]">
                            <img alt="qr" src={content.qr}></img>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              ) : (
                <div className="flex items-center justify-center">
                  <span className="font-bold text-[20px]">
                    Tính năng đang được phát triển
                  </span>
                </div>
              )}
            </div>
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
