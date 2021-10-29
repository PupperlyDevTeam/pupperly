import { Avatar, Card, Typography, Box, Stack, Container, Grid, Paper, Button } from "@mui/material"

const PetProfileHx = () => {
  return (
    <Container>
      <Typography>Major Medication History</Typography>
      <Stack spacing={2} sx={{p:2}}>
      </Stack>
      <Button variant="contained" size="small" onClick={()=>{alert('clicked')}}>Edit</Button>
    </Container>

  )
}

export default PetProfileHx