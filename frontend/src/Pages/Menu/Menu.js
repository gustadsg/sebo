import { Drawer,
        List, 
        ListItem, 
        ListItemText, 
        Typography, 
        AppBar, Toolbar, 
        IconButton, 
        Avatar } from "@material-ui/core";
import React, { useState } from "react";
import { MdHome, MdLibraryBooks, MdMenu, MdLaptop } from "react-icons/md"
import { FaUser } from "react-icons/fa"
import { IconContext } from "react-icons";
import "./Menu.css";
import { useHistory } from "react-router-dom";


function Menu(props){
    const history = useHistory();
    const [currentPage, setCurrentPage] = useState("/home");
    const [open, setOpen] = useState(false);

    function handleClick(pathName){
        history.push(pathName);
        setCurrentPage(pathName);
    }

    function handleDrawer(isOpen){
        setOpen(isOpen);
    }

    const pages = [
        {
            pathName: "/home",
            icon: <MdHome/>,
            text: "Home",
            iconSize: "1.5em",
        },
        {
            pathName: "/nossoslivros",
            icon: <MdLibraryBooks/>,
            text: "Nossos Livros",
            iconSize: "1.5em",
        },
        {
            pathName: "/login",
            icon: <FaUser/>,
            text: "Login",
            iconSize: "1.5em",
        },
        {
            pathName: "/cadastro",
            icon: <MdLaptop/>,
            text: "Cadastro",
            iconSize: "1.7em",
        },
    ];

    return (
        <>
        <AppBar position="fixed">
            <Toolbar className="toolBar">

                <IconButton edge="start" aria-label="menu" onClick={() => handleDrawer(!open)}>
                    <MdMenu />
                </IconButton>

                <div className="logo">
                    <img className="ico" alt="imagem" src="/images/HaiKaiVetorized.png"/>
                </div>

                <div className="userContainer">
                    <Avatar alt="User" src="/images/user.png" />
                </div>

            </Toolbar>
        </AppBar>

        {props.children}
        <Drawer open = {open} onClose = {() => handleDrawer(false)}>
            <List className="list">
                {pages.map((listItem) => {
                    return (
                        <ListItem 
                        button
                        selected={currentPage === listItem.pathName}
                        onClick={
                            () => handleClick(listItem.pathName)}>
                            <IconContext.Provider value={{size: listItem.iconSize}}>
                                {listItem.icon}
                            </IconContext.Provider>
                            <ListItemText className="listItemText">
                                <Typography className="typography">{listItem.text}</Typography>
                            </ListItemText>
                        </ListItem>
                    );
                })}
            </List>
        </Drawer>
        </>
    );
}

export default Menu;