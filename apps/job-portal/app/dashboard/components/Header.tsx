"use client";
import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import {
  Brightness4,
  Brightness7,
  Menu as MenuIcon,
} from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import AccountCircle from "@mui/icons-material/AccountCircle";

interface HeaderProps {
  handleDrawerOpen: () => void;
}

const Header: React.FC = () => {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="static"
      color="primary"
      sx={{ width: "100%", padding: 0 }}
    >
      <Toolbar sx={{ justifyContent: "space-between", padding: 0 }}>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, marginLeft: 2 }}
        >
          Job Kar
        </Typography>
        <InputBase
          placeholder="Search jobs..."
          inputProps={{ "aria-label": "search" }}
          sx={{
            bgcolor: "white",
            borderRadius: 1,
            padding: "4px 10px",
            marginRight: 2,
            width: "300px",
            "&:hover": {
              bgcolor: "#f0f0f0",
            },
          }}
        />
        <div>
          <IconButton edge="end" color="inherit" aria-label="theme-toggle">
            {theme.palette.mode === "dark" ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
          <IconButton edge="end" color="inherit" onClick={handleMenuOpen}>
            <AccountCircle />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
