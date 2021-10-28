import { Avatar, Card, Typography, Box, Stack, Container } from "@mui/material"

const PetProfileMed = () => {
  return (
    <Container>
      <Typography>Medications</Typography>
      <Stack spacing={2} sx={{p:2}}>
        <Typography>Diet:</Typography>
        <Typography>Preventatives:</Typography>
        <Typography>Vitamins/Supplements:</Typography>
      </Stack>
    </Container>
  )
}

export default PetProfileMed