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
} from "@mui/material";
import { ThemeContext } from "../utility/ThemeProvider";
import MenuIcon from "@mui/icons-material/Menu";
function NavBar() {
  const Values = useContext(ThemeContext);
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
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
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
          </div>

          <div style={{ display: "flex", alignItems: "center" }}>
            {!isMobile && (
              <div className="buttons">
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
              </div>
            )}
            <div>
              <Switch
                checked={Values.mode}
                onChange={handleModeChange}
                name="mode"
              />
            </div>
          </div>
        </Toolbar>
      </AppBar>

      {isMobile && (
        <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
          <List sx={{ width: 250 }}>
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
