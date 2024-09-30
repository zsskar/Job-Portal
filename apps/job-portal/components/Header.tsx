import { AppBar, Toolbar, Typography, Box, Button } from '@mui/material';
import { Home, Work, Business, Login, PostAdd } from '@mui/icons-material'; // Optional icons

const Header = () => {
  return (
    <AppBar position="sticky" color="default" elevation={4}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h6" color="primary" fontWeight="bold">
          Job Portal
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Button color="inherit" sx={{ marginRight: 2, transition: '0.3s', '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.1)' } }}>
            <Home sx={{ marginRight: 1 }} /> Home
          </Button>
          <Button color="inherit" sx={{ marginRight: 2, transition: '0.3s', '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.1)' } }}>
            <Work sx={{ marginRight: 1 }} /> Jobs
          </Button>
          <Button color="inherit" sx={{ marginRight: 2, transition: '0.3s', '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.1)' } }}>
            <Business sx={{ marginRight: 1 }} /> Companies
          </Button>
          <Button color="inherit" sx={{ marginRight: 2, transition: '0.3s', '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.1)' } }}>
            <Login sx={{ marginRight: 1 }} /> Sign In
          </Button>
          <Button variant="contained" color="primary" sx={{ transition: '0.3s', '&:hover': { backgroundColor: '#3f51b5', boxShadow: '0 4px 20px rgba(63, 81, 181, 0.3)' } }}>
            <PostAdd sx={{ marginRight: 1 }} /> Post a Job
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
