import { useState } from "react"
import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"

export default function UserForm({ onSubmit }) {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!name.trim() || !email.trim()) return

        onSubmit?.({ name: name.trim(), email: email.trim() })
        setName("")
        setEmail("")
    }

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ display: "grid", gap: 2 }}>
            <TextField
                label="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                fullWidth
            />

            <TextField
                label="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
            />

            <Button type="submit" variant="contained">
                Add
            </Button>
        </Box>
    )
}