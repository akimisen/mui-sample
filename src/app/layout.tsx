'use client'

import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import SideDrawer from '@/components/Sidebar';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '@/theme';
import { DRAWER_WIDTH, APPBAR_HEIGHT } from '@/constants';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
            <AppBar 
              position="fixed" 
              sx={{ 
                zIndex: (theme) => theme.zIndex.drawer + 1,
                height: APPBAR_HEIGHT // 设置 AppBar 高度
              }}
            >
              <Toolbar sx={{ 
                  height: '100%', // 确保 Toolbar 填满 AppBar 的高度
                  display: 'flex',
                  alignItems: 'center', // 垂直居中
                }}>
                <Typography variant="h6" noWrap component="div">
                  Navigation
                </Typography>
              </Toolbar>
            </AppBar>
            <Box sx={{ display: 'flex', flexGrow: 1, pt: `${APPBAR_HEIGHT}px`, overflow:"hidden" }}>
              <SideDrawer />
              <Box
                component="main"
                sx={{
                  flexGrow: 1,
                  p: 3,
                  width: `calc(100% - ${DRAWER_WIDTH}px)`,  // 设置内容区域宽度
                  height: '100%',
                  overflow: 'auto', // 改为 auto，允许内容区域滚动
                  '&::-webkit-scrollbar': {
                    display: 'none', // 隐藏 WebKit 浏览器的滚动条
                  },
                  scrollbarWidth: 'none', // 隐藏 Firefox 的滚动条
                  msOverflowStyle: 'none', // 隐藏 IE 的滚动条
                  marginLeft: `${DRAWER_WIDTH}px`,
                  borderLeft: '1px solid rgba(0, 0, 0, 0.12)',
                }}
              >
                {children}
              </Box>
            </Box>
          </Box>
        </ThemeProvider>
      </body>
    </html>
  );
}