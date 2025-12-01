import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu'; 
import ThemeToggle from "./ThemeToggle";
import { Link } from 'react-router-dom';

function Header(){
    return(
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed" sx={{
                background: "linear-gradient(135deg, #a6addeff, #6f0d90ff)",
                display:"flex",
                alignItems:"center",
             
            }}>
                <Toolbar sx={{ width:"100%", display:"flex" }}>
                    
                    <IconButton size="large" edge="start" color="inherit">
                        <MenuIcon />
                    </IconButton>

                
                    <Typography variant="h6" sx={{ flexGrow: 1,color:"black" }}>
                        My Portfolio
                    </Typography>

                    <Link to={'/'}><Button sx={{color:"black"}}>Home</Button></Link>
                    <Link to={'/projects'}><Button sx={{color:"black"}}>Projects</Button></Link>
                    <Link to={'/contact'}><Button sx={{color:"black"}}>Contact</Button></Link>

                    <ThemeToggle/>

                </Toolbar>
            </AppBar>
        </Box>
    )
}
export default Header;
