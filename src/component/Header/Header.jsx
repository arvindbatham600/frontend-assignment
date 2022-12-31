import {
  AppBar,
  Toolbar,
  IconButton,

} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Buttons from "./Buttons";

// css




const Header = () => {


  return (
      <AppBar position="fixed">
          <Toolbar style={{
          backgroundColor: '#2874f0',
          display: 'flex',
              justifyContent: 'space-between',
          minHeight:'55px'
    
      }}>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Buttons />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
