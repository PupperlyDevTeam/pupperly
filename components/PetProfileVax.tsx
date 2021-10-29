//this component need to conditionally render based on species.
import { Avatar, Card, Typography, Box, Stack, Container, Button } from "@mui/material"

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
        <Button variant="contained" size="small" onClick={()=>{alert('clicked')}}>Edit</Button>
    </Container>
  )
}

export default PetProfileVax