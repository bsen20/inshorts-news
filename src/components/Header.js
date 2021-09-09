import React from "react";
import { AppBar, Toolbar, makeStyles } from "@material-ui/core";

import HamburderIcon from "./HamburgerIcon";
const useStyles = makeStyles({
  header: {
    background: "#fff",
    height: 70,
  },
  logo: {
    height: 55,
    margin: "auto",
    paddingRight: 70,
  },
  menu: {
    color: "#000",
  },
});

function Header({ setCategory, setLoadmore }) {
  const classes = useStyles();
  const logoUrl =
    "https://assets.inshorts.com/website_assets/images/logo_inshorts.png";
  return (
    <AppBar className={classes.header}>
      <Toolbar>
        <div>
          <HamburderIcon setCategory={setCategory} setLoadmore={setLoadmore} />
        </div>
        <img src={logoUrl} alt="" className={classes.logo} />
      </Toolbar>
    </AppBar>
  );
}

export default Header;
