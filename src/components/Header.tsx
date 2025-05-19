'use client';

import { AppBar, Toolbar, Typography, useTheme, useMediaQuery, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { usePathname } from 'next/navigation';
import React from 'react';

interface HeaderProps {
  handleDrawerToggle: () => void;
}

const pathTitleMap: { [key: string]: string } = {
  '/zipcode': '郵便番号検索',
  '/weather': '天気予報',
  '/': 'ホーム',
};

const drawerWidth = 240;


const Header = ({ handleDrawerToggle }: HeaderProps) => {
  const pathname = usePathname();
  const title = pathTitleMap[pathname] ?? 'アプリ';

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // const [anchorEl, setAnchorEl] = React.useState<HTMLElement | undefined>(undefined);
  
  // const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
  //   setAnchorEl(event.currentTarget);
  //   handleDrawerToggle();
  // };

  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
        zIndex: (theme) => theme.zIndex.drawer + 1, // サイドバーより前面に配置する
      }}
    >
      <Toolbar>
      <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>

        <Typography variant={isMobile ? 'h6' : 'h5'} component="div">
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
