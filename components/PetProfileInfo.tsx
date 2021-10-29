import { Avatar, Card, Typography, Box, Stack, Container, Grid, Paper, Button } from "@mui/material"

const PetProfileInfo = () => {
  return (
    <Container>
      <Avatar alt="pet picture" variant='rounded' sx={{height:90, width:90}}/>
        <Stack>
          <Typography>Pet Name</Typography>
          <Typography>Sex</Typography>
          <Typography>Species</Typography>
      <Typography>Breed</Typography>
        </Stack>
    </Container>
  )
}

export default PetProfileInfo