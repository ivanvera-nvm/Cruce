import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearUser } from "../../state/user";
import useStyles from "../../utils/stylesNavbar";

import { useSnackbar } from "notistack";
import messagesHandler from '../../utils/messagesHandler'

const CadeteriaNavbar = () => {
  const classes = useStyles();
  const history = useHistory();

  const dispatch = useDispatch();
  const token = localStorage.getItem("token");


  const messages = messagesHandler(useSnackbar())


  const logout = () => {
    localStorage.removeItem("token");
    dispatch(clearUser()) && messages.info('Deslogueado correctamente')
    history.push("/cadeteria/login");
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ backgroundColor: "red" }}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}></Typography>
          {!token ? (
            <>
              <Link to="/login" style={{ color: "inherit" }}>
                <Button color="inherit">Login</Button>
              </Link>
              <Link to="/register" style={{ color: "inherit" }}>
                <Button color="inherit">Register</Button>
              </Link>
            </>
          ) : (
            <>
              <Button color="inherit" onClick={logout}>
                Logout
              </Button>
            </>
          )}
          <Link to="/" style={{ color: "inherit" }}>
            <Button color="inherit">Home</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default CadeteriaNavbar;
