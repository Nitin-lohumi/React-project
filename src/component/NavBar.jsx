import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/NavStyle.css";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  useMediaQuery,
  useTheme,
  Switch,
  Box,
  Divider,
} from "@mui/material";
import { ContextProvider } from "../utility/ContextAPI";
import MenuIcon from "@mui/icons-material/Menu";
function NavBar() {
  const Values = useContext(ContextProvider);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const toggleDrawer = () => setDrawerOpen(!drawerOpen);
  const handleModeChange = () => {
    Values.setMode((prev) => !prev);
  };
  return (
    <>
      <AppBar position="static" className="NavBar">
        <Toolbar sx={{ justifyContent: "space-between", boxShadow: 3 }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            {isMobile && (
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer}
                sx={{ mr: 1 }}
              >
                <MenuIcon />
              </IconButton>
            )}
            <Typography variant="h6" sx={{ color: "white" }}>
              Loan Calculator
            </Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center" }}>
            {!isMobile && (
              <Box className="buttons">
                <Button component={NavLink} to="/" className="nav-button">
                  Home
                </Button>
                <Button
                  component={NavLink}
                  to="/ExchangeRate"
                  className="nav-button"
                >
                  Exchange Rates (Live)
                </Button>
                <Button component={NavLink} to="/about" className="nav-button">
                  About
                </Button>
                <Button
                  component={NavLink}
                  to="/ErrorPage"
                  className="nav-button"
                >
                  Error Page
                </Button>
              </Box>
            )}
            <Box>
              <Switch
                checked={Values.mode}
                onChange={handleModeChange}
                name="mode"
              />
            </Box>
          </Box>
        </Toolbar>
      </AppBar>

      {isMobile && (
        <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
          <List sx={{ width: 250, display: "flex", flexDirection: "column" }}>
            <ListItem onClick={toggleDrawer}>
              <NavLink
                style={{
                  color: theme.palette.text.primary,
                  textDecoration: "none",
                }}
                to="/"
                className={({ isActive }) =>
                  isActive ? "drawer-link active" : "drawer-link"
                }
              >
                Home
              </NavLink>
            </ListItem>
            <Divider
              sx={{
                width: "100%",
                color: theme.palette.text.primary,
                background: theme.palette.background.default,
              }}
            />
            <ListItem onClick={toggleDrawer}>
              <NavLink
                style={{
                  color: theme.palette.text.primary,
                  textDecoration: "none",
                }}
                to="/ExchangeRate"
                className={({ isActive }) =>
                  isActive ? "drawer-link active" : "drawer-link"
                }
              >
                Exchange Rates (Live)
              </NavLink>
            </ListItem>
            <Divider
              sx={{
                width: "100%",
                color: theme.palette.text.primary,
                background: theme.palette.background.default,
              }}
            />
            <ListItem onClick={toggleDrawer}>
              <NavLink
                style={{
                  color: theme.palette.text.primary,
                  textDecoration: "none",
                }}
                to="/about"
                className={({ isActive }) =>
                  isActive ? "drawer-link active" : "drawer-link"
                }
              >
                About
              </NavLink>
            </ListItem>
            <Divider
              sx={{
                width: "100%",
                color: theme.palette.text.primary,
                background: theme.palette.background.default,
              }}
            />
            <ListItem onClick={toggleDrawer}>
              <NavLink
                style={{
                  color: theme.palette.text.primary,
                  textDecoration: "none",
                }}
                to="/ErrorPage"
                className={({ isActive }) =>
                  isActive ? "drawer-link active" : "drawer-link"
                }
              >
                Error Page
              </NavLink>
            </ListItem>
          </List>
        </Drawer>
      )}
    </>
  );
}

export default NavBar;
