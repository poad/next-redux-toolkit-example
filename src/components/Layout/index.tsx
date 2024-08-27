import React, { PropsWithChildren } from 'react';
import { Sawarabi_Gothic } from 'next/font/google';
import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  Toolbar,
  Typography,
} from '@mui/material';
import GitHub from '@mui/icons-material/GitHub';
import Home from '@mui/icons-material/Home';
import SvgIcon from '@mui/material/SvgIcon';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';
import MenuItem from '../MenuItem';

const drawerWidth = 240;

interface LayoutProps {
  container?: Element;
}

const sawarabi = Sawarabi_Gothic({
  weight: '400',
  subsets: ['latin-ext'],
  display: 'swap',
});

const Layout = (props: PropsWithChildren<LayoutProps>) => {
  const { container } = props;
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  }

  const drawer = (
    <Box
      sx={{
        width: drawerWidth,
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
      }}
      className={sawarabi.className}
    >
      <Box sx={theme.mixins.toolbar} />
      <Divider />
      <List>
        {[
          {
            key: 'home',
            text: 'Home',
            href: '/',
            icon: <Home sx={{ color: theme.palette.primary.contrastText }} />,
          },
          {
            key: 'info',
            text: 'Redux Test',
            href: 'info',
            icon: (
              <SvgIcon sx={{ color: theme.palette.primary.contrastText }}>
                <path d="M16.633 16.504c.869-.075 1.543-.84 1.499-1.754-.046-.914-.795-1.648-1.708-1.648h-.061c-.943.031-1.678.824-1.648 1.769.03.479.226.869.494 1.153-1.048 2.038-2.621 3.536-5.004 4.795-1.603.838-3.296 1.154-4.944.929-1.378-.194-2.456-.81-3.116-1.798-.988-1.499-1.078-3.116-.255-4.734.601-1.169 1.499-2.023 2.099-2.443-.15-.389-.33-1.048-.42-1.542-4.436 3.177-3.985 7.521-2.637 9.574 1.004 1.498 3.057 2.456 5.304 2.456.599 0 1.229-.044 1.843-.194 3.896-.749 6.847-3.086 8.54-6.532l.014-.031zM21.981 12.758c-2.321-2.727-5.738-4.225-9.634-4.225h-.51c-.253-.554-.837-.899-1.497-.899h-.045c-.943 0-1.678.81-1.647 1.753.03.898.794 1.648 1.708 1.648h.074c.675-.03 1.259-.45 1.498-1.049h.555c2.309 0 4.495.674 6.488 1.992 1.527 1.004 2.622 2.322 3.236 3.896.538 1.288.509 2.547-.045 3.597-.854 1.647-2.293 2.517-4.195 2.517-1.199 0-2.367-.375-2.967-.644-.359.298-.959.793-1.394 1.093 1.318.598 2.652.943 3.94.943 2.922 0 5.093-1.647 5.918-3.236.898-1.798.824-4.824-1.469-7.416l-.014.03zM6.49 17.042c.029.899.793 1.648 1.708 1.648h.06c.959-.03 1.693-.823 1.648-1.768 0-.899-.779-1.647-1.693-1.647h-.061c-.06 0-.149 0-.225.029-1.243-2.098-1.768-4.346-1.572-6.771.119-1.828.719-3.417 1.797-4.735.899-1.124 2.592-1.679 3.746-1.708 3.236-.061 4.585 3.971 4.689 5.574l1.498.449c-.345-4.914-3.4-7.492-6.322-7.492-2.742 0-5.273 1.993-6.293 4.915-1.393 3.896-.479 7.641 1.229 10.638-.149.195-.239.539-.209.868z" />
              </SvgIcon>
            ),
          },
          {
            key: 'github',
            text: 'Source Code',
            href: 'https://github.com/poad/next-redux-toolkit-example.git',
            icon: <GitHub sx={{ color: theme.palette.primary.contrastText }} />,
            external: true,
          },
        ].map(({ key, href, text, icon, external }) => (
          <MenuItem
            key={key}
            keyName={key}
            href={href}
            icon={icon}
            text={text}
            external={external}
          />
        ))}
      </List>
    </Box>
  );

  const appBar = (
    <AppBar position="fixed" sx={{ width: '100%', flexGrow: 1 }}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap sx={{ flexGrow: 1 }} />
      </Toolbar>
    </AppBar>
  );

  const drawerBox = (
    <Box
      component="nav"
      textAlign="center"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      aria-label="folders"
      display="contents"
    >
      <Drawer
        container={container}
        variant="temporary"
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          '& .MuiDrawer-paper': {
            backgroundColor: theme.palette.primary.main,
            boxSizing: 'border-box',
            width: drawerWidth,
          },
        }}
        ModalProps={{ keepMounted: true }}
      >
        {drawer}
      </Drawer>
    </Box>
  );

  return (
    <Box
      sx={{
        color: theme.palette.primary.contrastText,
        display: 'flex',
        maxHeight: '100vh',
      }}
    >
      <CssBaseline />
      {appBar}
      {drawerBox}
      {props.children}
    </Box>
  );
};

export default Layout;
