import { useState } from "react"
import Container from "@mui/material/Container"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"

import Header from "./components/Header"
import UserForm from "./components/UserForm"
import InfoCard from "./components/InfoCard"

export default function App() {
  const [users, setUsers] = useState([
    { id: 1, name: "Anna", email: "anna@example.com" },
  ])

  const handleAddUser = (user) => {
    setUsers((prev) => [{ id: Date.now(), ...user }, ...prev])
  }

  return (
    <>
      <Header title="Task 48.1 — Material UI" />

      <Container sx={{ py: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Box sx={{ position: "sticky", top: 16 }}>
              <UserForm onSubmit={handleAddUser} />
            </Box>
          </Grid>

          <Grid item xs={12} md={8}>
            <Box sx={{ display: "grid", gap: 2 }}>
              {users.map((u) => (
                <InfoCard key={u.id} name={u.name} email={u.email} />
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}