import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"

export default function InfoCard({ name, email }) {
    return (
        <Card variant="outlined">
            <CardContent>
                <Typography variant="h6">{name}</Typography>
                <Typography variant="body2" color="text.secondary">
                    {email}
                </Typography>
            </CardContent>
        </Card>
    )
}