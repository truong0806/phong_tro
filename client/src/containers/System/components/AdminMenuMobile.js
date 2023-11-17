import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useDispatch } from 'react-redux';
import * as actions from '../../../store/action';

export default function AdminMenuMobile({
  setLoading,
  data,
  menuDropDrow,
  setMenuDropDown,
}) {
  const dispatch = useDispatch();
  console.log(
    '🚀 ~ file: AdminMenuMobile.js:16 ~ AdminMenuMobile ~ menuDropDrow:',
    menuDropDrow
  );

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setMenuDropDown(open);
  };

  const list = () => (
    <Box
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {data
          ?.filter((item) => item.id !== 0)
          ?.map((item, index) => (
            <ListItem key={item.id} disablePadding>
              <ListItemButton component="a" href={item.path}>
                <ListItemIcon>
                  <span>{item.icon}</span>
                </ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
      </List>
      <Divider />
      <ListItemButton
        onClick={() => {
          dispatch(actions.logout());
        }}
      >
        <ListItemIcon>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-log-out"
            >
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
              <polyline points="16 17 21 12 16 7"></polyline>
              <line x1="21" y1="12" x2="9" y2="12"></line>
            </svg>
          </span>
        </ListItemIcon>
        <ListItemText primary={'Đăng xuất'} />
      </ListItemButton>
    </Box>
  );

  return (
    <div>
      <>
        <SwipeableDrawer
          anchor={'right'}
          open={menuDropDrow}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
        >
          {list()}
        </SwipeableDrawer>
      </>
    </div>
  );
}
