import React from "react";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Avatar from "@mui/material/Avatar";

const Header = (props) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        sx={{ backgroundColor: "#fafbfb", boxShadow: "none" }}
        position="static"
      >
        <Toolbar sx={{ color: "#949db2" }} variant="dense">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            sx={{
              ml: "auto",
              display: "flex",
              alignItems: "baseline",
              cursor: "pointer",
            }}
          >
            <Avatar sx={{ mr: "4px" }}>cc</Avatar>
            <Typography variant="subtitle1" color="inherit" component="div">
              {`Xin chào, ${props.nameUser}`}
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
