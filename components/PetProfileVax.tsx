//this component need to conditionally render based on species.
import { Avatar, Card, Typography, Box, Stack, Container } from "@mui/material"

const PetProfileVax = () => {
  return (
    <Container>
      <Typography>Vaccinations</Typography>
        <Stack spacing={2} sx={{p:2}}>
          <Typography>Rabies</Typography>
          <Typography>DA2PP</Typography>
          <Typography>Bordetella</Typography>
          <Typography>Leptospirosis</Typography>
          <Typography>Lyme</Typography>
          <Typography>Influenza</Typography>
        </Stack>
    </Container>
  )
}

export default PetProfileVax