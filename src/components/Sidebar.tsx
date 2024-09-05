'use client';

import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar } from '@mui/material';
import { styled } from '@mui/material/styles';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { DRAWER_WIDTH, APPBAR_HEIGHT } from '@/constants';

// 自定义 ListItem 样式
const StyledListItem = styled(ListItem)(({ theme }) => ({
  color: 'white',
  '&.Mui-selected, &.Mui-selected:hover': {
    backgroundColor: '#34495e',
    color: 'white',
    '& .MuiListItemIcon-root': {
      color: 'white',
    },
  },
  '&:hover': {
    backgroundColor: '#34495e',
    color: 'white',
    '& .MuiListItemIcon-root': {
      color: 'white',
    },
  },
  '& .MuiListItemIcon-root': {
    minWidth: '40px',
    color: 'white',
  },
}));

const SideDrawer = () => {
  const pathname = usePathname();

  const menuItems = [
    { text: 'Dashboard', path: '/' },
    { text: 'Task 1', path: '/task/1' },
    { text: 'Task 2', path: '/task/2' },
    { text: 'Task 3', path: '/task/3' },
    { text: 'Settings', path: '/settings' },
  ];

  return (
    <Drawer
      sx={{
        flexShrink: 0,
        '& .MuiDrawer-paper': {
        width: DRAWER_WIDTH,
        boxSizing: 'border-box',
        backgroundColor: '#2c3e50',
        color: 'white',
        height: `calc(100% - ${APPBAR_HEIGHT}px)`,
        overflow: 'hidden', // 防止侧边栏出现滚动条
        borderRight: 'none',
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar />
      <List>
        {menuItems.map((item, index) => (
          <Link href={item.path} key={item.text} passHref style={{ textDecoration: 'none' }}>
            <StyledListItem 
              component="div" 
              selected={pathname === item.path}
              sx={{ display: 'flex', alignItems: 'center' }}
            >
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </StyledListItem>
          </Link>
        ))}
      </List>
    </Drawer>
  );
};

export default SideDrawer;