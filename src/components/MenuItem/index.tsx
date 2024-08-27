import React, { ReactNode } from 'react';
import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import Link from 'next/link';
import { useTheme } from '@mui/material/styles';

const drawerWidth = 240;

interface MenuItemProps {
  container?: Element;
  keyName: string;
  text: string;
  href: string;
  icon: ReactNode;
  external?: boolean;
}

const MenuItem = ({ keyName, text, href, icon, external }: MenuItemProps) => {
  const theme = useTheme();

  if (external) {
    return (
      <Link
        key={`link-${keyName}`}
        href={href}
        target="_blank"
        rel="noreferrer"
      >
        <ListItemButton
          key={`${keyName}-${text}`}
          sx={{
            width: drawerWidth,
            backgroundColor: theme.palette.primary.main,
            '&:hover': {
              backgroundColor: theme.palette.primary.light,
            },
          }}
          // eslint-disable-next-line @typescript-eslint/no-empty-function
          onClick={() => {}}
        >
          <ListItemIcon>{icon}</ListItemIcon>
          <ListItemText primary={text} />
        </ListItemButton>
      </Link>
    );
  }
  return (
    <Link key={`link-${keyName}`} legacyBehavior href={href} passHref>
      <ListItemButton
        key={`${keyName}-${text}`}
        sx={{
          width: drawerWidth,
          backgroundColor: theme.palette.primary.main,
          '&:hover': {
            backgroundColor: theme.palette.primary.light,
          },
        }}
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        onClick={() => {}}
      >
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={text} />
      </ListItemButton>
    </Link>
  );
};

export default MenuItem;
