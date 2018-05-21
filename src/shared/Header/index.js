import React from "react";
import AppBar from "@material-ui/core/AppBar";
import TextField from "@material-ui/core/TextField";


import "./style.css";
export default class Header extends React.Component {
  render() {
    return (
      <div className="header-container">
        <AppBar className="__appbar-container" position="fixed">
          <h2>Unite</h2>
          <form className="__searchbar-container" noValidate autoComplete="off">
            <TextField
                className="searchbar-field"
              label="Search a topic..."
              placeholder="Go Ahead..."
              margin="normal"
            />
          </form>
          <div className="__sidebar-container">
            Stuff Over here
          </div>
        </AppBar>
      </div>
    );
  }
}
