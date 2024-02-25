import React from "react";
import { navigationMenu } from "./NavigationMenu";
import { useNavigate } from "react-router-dom";
import { Avatar, Button } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


const Navigation = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const navigate = useNavigate();
  const handleLogout = ()=>{
    console.log("logout")
    handleClose()
  }
  return (
    <div className="h-screen sticky top-0">
      <div className="py-5 h-14 w-14 mb-12">
        <img src="/twitter.png" alt="" />
      </div>
      <div className="space-y-6">
        {navigationMenu.map((item) => (
          <div
            className="cursor-pointer flex space-x-3 
            item-center "
            onClick={() =>
              item.title === "Profile"
                ? navigate(`/profile/${5}`)
                : navigate(item.path)
            }
          >
            {item.icon}
            <p className="text-xl">{item.title}</p>
          </div>
        ))}
      </div>
      <div className="py-10">
        <Button
          sx={{ width: "100%", borderRadius: "29px", bgcolor: "#1e88e5" }}
          variant="contained"
        >
          Tweet
        </Button>
      </div>
      <div className="flex item-center justify-between ">
        <div className="flex item-center space-x-3 ">
          <Avatar alt="username" src="/user.png" />
          <div className="py-2">
            <span>Deniz Kozan</span><br/>
            <span className="opacity-70">@Kozan.Deniz</span>
            
          </div>
          
          <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MoreHorizIcon className="my-2" />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
        
      </Menu>



        </div>
      </div>
    </div>
  );
};

export default Navigation;
