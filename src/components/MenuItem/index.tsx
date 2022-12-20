import React, { ReactNode } from 'react';
import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import Link from 'next/link';
import { useTheme } from '@mui/material/styles';

const drawerWidth = 240;

interface MenuItemProps {
  container?: Element;
  key: string;
  text: string;
  href: string;
  icon: ReactNode;
  external?: boolean;
}

const MenuItem = ({ key, text, href, icon, external }: MenuItemProps) => {
  const theme = useTheme();

  if (external) {
    return (
      <Link key={key} href={href} target="_blank" rel="noreferrer">
        <ListItemButton
          key={`${key}-${text}`}
          sx={{
            width: drawerWidth,
            backgroundColor: theme.palette.primary.main,
            '&:hover': {
              backgroundColor: theme.palette.primary.light,
            },
          }}
          onClick={() => {}}
        >
          <ListItemIcon>{icon}</ListItemIcon>
          <ListItemText primary={text} />
        </ListItemButton>
      </Link>
    );
  }
  return (
    <Link key={key} legacyBehavior href={href} passHref>
      <ListItemButton
        key={`${key}-${text}`}
        sx={{
          width: drawerWidth,
          backgroundColor: theme.palette.primary.main,
          '&:hover': {
            backgroundColor: theme.palette.primary.light,
          },
        }}
        onClick={() => {}}
      >
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={text} />
      </ListItemButton>
    </Link>
  );
};

export default MenuItem;
