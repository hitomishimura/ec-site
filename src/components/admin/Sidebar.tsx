"use client";

import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Link,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";

type MenuItem = {
  name: string;
  url: string;
  icon?: React.ReactNode;
  children?: MenuItem[];
};

const drawerWidth = 240;
const headerHeight = 64;

const menuList: MenuItem[] = [
  {
    name: "管理者トップページ",
    url: "###",
    icon: <HomeIcon />,
    children: [{ name: "商品新規登録", url: "###" }],
  },
];

export default function Sidebar() {
  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          top: `${headerHeight}px`,
          // height: `calc(100% - ${headerHeight}px)`,
        },
      }}
    >
      <List>
        {menuList.map(({ name, url, icon, children }: MenuItem) => (
          <React.Fragment key={name}>
            <ListItem key={name} disablePadding>
              <ListItemButton>
                <ListItemIcon>{icon}</ListItemIcon>
                <Link href={url} underline="none" color="inherit">
                  {name}
                </Link>
              </ListItemButton>
            </ListItem>
            {children && (
              <List component="div" disablePadding sx={{ pl: 4 }}>
                {children.map((child) => (
                  <ListItem key={child.name} disablePadding>
                    <ListItemButton>
                      <Link
                        href={child.url}
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        <ListItemText primary={child.name} />
                      </Link>
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            )}
          </React.Fragment>
        ))}
      </List>
    </Drawer>
  );
}
