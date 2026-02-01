import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"

export default function Header({ title = "Task 48.1" }) {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div">
                    {title}
                </Typography>
            </Toolbar>
        </AppBar>
    )
}