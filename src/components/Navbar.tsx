import { AppBar, Toolbar, Typography, Button, Stack } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography sx={{ flexGrow: 1 }}>Job Portal</Typography>

        <Stack direction="row" spacing={2}>
          <Button component={Link} to="/" color="inherit">
            Home
          </Button>
          <Button component={Link} to="/about" color="inherit">
            About
          </Button>
          <Button component={Link} to="/jobs" color="inherit">
            Jobs
          </Button>
          <Button component={Link} to="/companies" color="inherit">
            Companies
          </Button>
          <Button component={Link} to="/contact" color="inherit">
            Contact
          </Button>
          <Button component={Link} to="/login" color="inherit">
            Login
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
