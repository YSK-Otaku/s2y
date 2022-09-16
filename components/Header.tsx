import {AppBar, Button, Toolbar, Typography} from "@mui/material";

const Header = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    href="/"
                    className="logo"
                >
                    chartのサイト
                </Typography>
                <div className="boxContainer">
                    <Button href="#" color="inherit">項目1</Button>
                    <Button href="#" color="inherit">項目2</Button>
                </div>
            </Toolbar>
        </AppBar>
    )
}

export default Header