import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  Avatar,
}
from "@material-ui/core";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import React, { useState, useContext, useEffect } from "react";
import { MdHome, MdLibraryBooks, MdMenu, MdLaptop } from "react-icons/md";
import { UserContext } from "../../context/UserContext";
import { FaLessThanEqual, FaUser } from "react-icons/fa";
import { IconContext } from "react-icons";
import "./Menu.css";
import { Redirect, useHistory } from "react-router-dom";



function AppMenu(props) {
  const history = useHistory();
  const [currentPage, setCurrentPage] = useState("/home");
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const { handleLogout, user, loadSession, setSession } = useContext(UserContext);
  const displayAvatar = user.accessToken ? "block" : "none";
  const displayAddBook = user.userAdmin == 1 ? "block" : "none";

  useEffect(() => {
    const user = loadSession()
    if(user.accessToken) setSession(user)
  }, [])

  function logout() {
    handleLogout();
    toggleAvatarMenu();
    history.push("/home");
  }

  function toggleAvatarMenu(event) {
    anchorEl ? setAnchorEl(null) : setAnchorEl(event.currentTarget);
  }

  function handleClick(pathName) {
    history.push(pathName);
    setCurrentPage(pathName);
  }

  function handleDrawer(isOpen) {
    setOpen(isOpen);
  }

  const pages = [
    {
      pathName: "/home",
      icon: <MdHome />,
      text: "Home",
      iconSize: "1.5em",
    },
    {
      pathName: "/nossoslivros",
      icon: <MdLibraryBooks />,
      text: "Nossos Livros",
      iconSize: "1.5em",
    },
    {
      pathName: "/login",
      icon: <FaUser />,
      text: "Login",
      iconSize: "1.5em",
    },
    {
      pathName: "/cadastro",
      icon: <MdLaptop />,
      text: "Cadastro",
      iconSize: "1.7em",
    },
  ];

  return (
    <>
      <AppBar position="fixed">
        <Toolbar className="toolBar">
          <IconButton
            edge="start"
            aria-label="menu"
            onClick={() => handleDrawer(!open)}
          >
            <MdMenu />
          </IconButton>

          <div className="logo">
            <img
              className="ico"
              alt="imagem"
              src="/images/HaiKaiVetorized.png"
            />
          </div>

          <div className="userContainer">
            <Avatar
              style={{ display: displayAvatar }}
              alt="User"
              className="avatar"
              src="/images/user.png"
              onClick={toggleAvatarMenu}
            />
          </div>

          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={toggleAvatarMenu}
            className="drop-menu"
          >
            <MenuItem
              style={{ display: displayAddBook }}
              onClick={() => history.push("/adicionarexemplar")}
            >
              Adicionar Exemplar
            </MenuItem>

            <MenuItem onClick={() => {
              history.push(`/user/${user.userId}`)
              }}>Editar Perfil</MenuItem>

            <MenuItem onClick={logout}>Logout</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>

      {props.children}
      <Drawer open={open} onClose={() => handleDrawer(false)}>
        <List className="list">
          {pages.map((listItem) => {
            return (
              <ListItem
                button
                selected={currentPage === listItem.pathName}
                onClick={() => handleClick(listItem.pathName)}
              >
                <IconContext.Provider value={{ size: listItem.iconSize }}>
                  {listItem.icon}
                </IconContext.Provider>
                <ListItemText className="listItemText">
                  <Typography className="typography">
                    {listItem.text}
                  </Typography>
                </ListItemText>
              </ListItem>
            );
          })}
        </List>
      </Drawer>
    </>
  );
}

export default AppMenu;
